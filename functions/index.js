/* eslint-disable promise/no-nesting */
/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
const request = require("request-promise");
var config = require('./config.js');
var util = require('./util');
const LINE_NOTIFY_API = "https://notify-api.line.me/api/notify";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.scheduledFunction = functions.pubsub.schedule("0 9 * * 1-5").timeZone('Asia/Bangkok').onRun((context) => {

    //0 9 * * 1-5
    //0 */1 * * *


    return util.webHookInfo.then((doc) => {
        console.log('Document is ' + doc);
        console.log(doc);

        request({
            method: "POST",
            uri: LINE_NOTIFY_API,
            headers: {
                Authorization: `Bearer ${config.accessToken}`
            },
            formData: {
                message: `แบบรายงานตัว วันที่ ${doc.date_th}   ${doc.link}`,
                stickerPackageId: 4,
                stickerId: 613
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "item": doc,
                "response": response
            });

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "item": doc,
                "Error": err.message
            });
        });

    })

});