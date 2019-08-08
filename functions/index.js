const functions = require("firebase-functions");
const express = require("express");
const engines = require("consolidate");
const firebase = require("firebase-admin");

const firebaseApp = firebase.initializeApp(functions.config().firebase);

const app = express();
app.engine("hbs", engines.handlebars);
app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (request, response) => {
  facts = ["1: Hello world", "2: Do you hear me"];
  response.render("facts", { facts });
});

exports.app = functions.https.onRequest(app);
