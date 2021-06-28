import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVDFRtYau1lnVIoIE61vUghEHwWd_B28I",
  authDomain: "routing-project-76bcc.firebaseapp.com",
  projectId: "routing-project-76bcc",
  storageBucket: "routing-project-76bcc.appspot.com",
  messagingSenderId: "249948422705",
  appId: "1:249948422705:web:846595196fb75aa9c64b10"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
