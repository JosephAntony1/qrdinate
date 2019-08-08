const functions = require("firebase-functions");
const express = require("express");
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
const _app_folder = './qrclient/dist';

const app = express();

app.get('*', express.static('./qrclient/dist', {maxAge: '1y'}));

app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root:  _app_folder});
});

exports.app = functions.https.onRequest(app);
