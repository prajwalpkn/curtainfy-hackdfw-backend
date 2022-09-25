const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get("/:zipcode", async (req, res) =>{
  const snapshot = await
	admin.firestore().collection('solar').doc(req.params.zipcode).get();
  const userData = snapshot.data();
	const saved = userData["totalCarbonOffsetPossible"];

	const snap = await
	admin.firestore().collection('area').doc(req.params.zipcode).get();
  const data = snap.data();
	const area = data["population"]/data["density"];

	const save = saved/area;

  return res.send(JSON.stringify({offsetpkm: save, Area: area, offsettotal: saved}));
});

exports.api = functions.https.onRequest(app);
