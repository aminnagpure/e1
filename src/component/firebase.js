const firebase = require("firebase");
const config = {
    apiKey: "AIzaSyAAm-5bCOVlzXeJFb_AxUPLEHZl66dkvxc",
    authDomain: "ether-51ed0.firebaseapp.com",
    databaseURL: "https://ether-51ed0.firebaseio.com",
    projectId: "ether-51ed0",
    storageBucket: "ether-51ed0.appspot.com",
    messagingSenderId: "258682462546"
};

firebase.initializeApp(config);
const db=firebase.firestore();
db.settings({
    timestampsInSnapshots:true
});
export default db;