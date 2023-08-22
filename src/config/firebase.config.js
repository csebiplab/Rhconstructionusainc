const admin = require("firebase-admin");

const serviceAccount = require("../firebase.service.json");

function initFirebase() {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://login-signup-practice-default-rtdb.firebaseio.com"
    })
}
module.exports = {
    initFirebase
}