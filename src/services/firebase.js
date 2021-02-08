import firebase from "firebase/app";
import "firebase/auth";

// firebase services. For additional services just import the component and export it same as auth component

const app = firebase.initializeApp({
  apiKey: "Your firebase apiKey",
  authDomain: "Your firebase authDomain",
  databaseURL: "Your firebase database url",
  projectId: "Your firebase projectID",
  storageBucket: "Your firebase storageBucket",
  messagingSenderId: "Your firebase messagingSenderId",
  appId: "Your firebase appID",
  measurementId: "Your firebase measurementID",
});

export const auth = app.auth();
export default app;
