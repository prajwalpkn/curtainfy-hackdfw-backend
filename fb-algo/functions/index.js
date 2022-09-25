const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get("/:zipcode&:north&:east&:south&:west", (req, res) =>{
    const zip = req.params.zipcode;
//   const snapshot = await
// admin.firestore().collection('solar').doc(req.params.zipcode).get();
//   const userId = snapshot.id;
//   const userData = snapshot.data();
//   const saved = userData["totalCarbonOffsetPossible"];
  return res.send(JSON.stringify({nst: zip,net: zip,est: zip,eet: zip,sst: zip,set: zip,wst: zip,wet: zip}));
});



exports.times = functions.https.onRequest(app);
