# LINE-trigger-WFH Cloud function , Daily line-notify WFH

### Features

Firebase Cloud Function to trigger and Retrive links infomation from firestore to request line-notify api

# How to install

Use powershell or cmd and type by order, please see below.

- `git clone https://github.com/kantinanm/LINE-trigger-WFH-Cloud-function.git`
- `cd LINE-trigger-WFH-Cloud-function`
  `npm install -g firebase-tools`
  `firebase login`
  - > login to autentication firebase useraccount in your browser.
- > create firebase-config.js and modify value.
  > `cp firebase-config.js.default firebase-config.js`
  > In windows use command `copy firebase-config.js.default firebase-config.js`
  > at firebase-config.js file to modify value,
  ```javascript
  module.exports = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxxx.firebaseio.com",
    projectId: "Your projectId",
    storageBucket: "xxx.appspot.com",
    messagingSenderId: "xxx",
    appId: "xxx",
    measurementId: "xxx",
  };
  ```
- > update Your projectId in file .firebaserc on this root project.
  ```javascript
      {
       "projects": {
       "default": "Your projectId"
        }
      }
  ```
- > Download serviceAccount.json from your Firebase Cloud Function and put on path ./functions in this project.
- > install package dependency in this project.
  - `cd functions`
  - `npm install`
- > create config.js and modify value.
  > `cp config.js.default config.js`
  > In windows use command `copy config.js.default config.js`
  > at config.js file to modify value,

  ```javascript
  const config = {
    accessToken: "xxx", // YOUR LINE TOKEN
    serviceAccountPath: "./serviceAccount.json",
    databaseURL: "xxx.firebaseio.com", // YOUR URL firestore
  };
  ```

- > To deploy Please back to root project (LINE-trigger-WFH-Cloud-function) and type command below and enter to deploy function.
- `firebase deploy --only functions`

# How to install the Local Emulator Suite

`firebase init emulators`

# How to test local

`firebase emulators:start --only functions`
