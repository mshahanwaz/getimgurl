import firebase from "firebase/app";
import "firebase/storage";

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAsivwM_woRD3qPpnf0QfLCRKQte2iRLTM",
  authDomain: "getimgurl.firebaseapp.com",
  projectId: "getimgurl",
  storageBucket: "getimgurl.appspot.com",
  messagingSenderId: "515318714101",
  appId: "1:515318714101:web:3fd3370a72eb5168713fbc",
});

const storage = firebase.storage();

export { storage };
