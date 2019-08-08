const functions = require("firebase-functions");
const express = require("express");

const _app_folder = './qrclient/dist';

const app = express();

app.get('*', express.static(_app_folder, {maxAge: '1y'}));

app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root:  _app_folder});
});

exports.app = functions.https.onRequest(app);
