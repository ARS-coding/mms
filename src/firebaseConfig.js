import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfoOW--l_p3r4vayZZZIqj0lHzboffQCo",
  authDomain: "mms-project-2a291.firebaseapp.com",
  projectId: "mms-project-2a291",
  storageBucket: "mms-project-2a291.appspot.com",
  messagingSenderId: "994317126203",
  appId: "1:994317126203:web:c6247c93e7ddd27394aa1e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
