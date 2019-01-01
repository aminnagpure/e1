

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.onetherUpdate = functions.firestore.document('exchangead/{exchangeadId}')
.onUpdate((change, context) => {
    
    const kk=change.after.id;
    // ...or the previous value before this update
    //const previousId=change.before.data().
    //const did=change.before.data().id;
    //const did=change.before.data().id;
    console.log(kk);

    const previousValue = change.before.data();
    const newValue = change.after.data();

    admin.firestore().collection('lastethvalue').doc(kk).update(previousValue);
    console.log('previous value'+previousValue);
    console.log(newValue);
});

exports.onAdCreate=functions.firestore.document('exchangead/{exchangeid')
.onCreate((snap,con)=>{
    did=snap.id;
    admin.firestore().collection(lastethvalue).doc(did).create({eth:'dfgdfg'}).then((jj)=>{
        console.log(jj);
    }

    ).catch(er=>{
        console.log(er);
    })
   // admin.firestore().collection('exchangead').doc(did).update({id:did}).then((jj)=>{
   //     console.log('added id to')
   // })
})

