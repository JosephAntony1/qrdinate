const functions = require("firebase-functions");
const express = require("express");

const _app_folder = "./qrclient/dist";

// Fetch the service account key JSON file contents
var serviceAccount = require("./qrdinate-firebase-adminsdk-b3vs7-fbc44634f8.json");

const app = express();
app.use(express.json()); // <==== parse request body as JSON

var admin = require("firebase-admin");
const router = express.Router();

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://qrdinate.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("events");

app.post("/event/add", (req, res) => {
  res.json({ requestBody: req.body });
  ref.child(req.body["id"]).set(req.body["details"]);
});

app.get("/event-info", (req, res) => {
  ref = db.ref("events/" + req.query.id);
  ref.on("value", snapshot => {
    res.json(snapshot);
  });
});

app.get("*", express.static(_app_folder, { maxAge: "1y" }));

app.all("*", (req, res) => {
  res.status(200).sendFile(`/`, { root: _app_folder });
});

exports.app = functions.https.onRequest(app);
