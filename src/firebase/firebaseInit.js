import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDYlM6l6Lh7htuEv5R4mLRqMbaMllNUbao",
  authDomain: "vue-blog-4775c.firebaseapp.com",
  projectId: "vue-blog-4775c",
  storageBucket: "vue-blog-4775c.appspot.com",
  messagingSenderId: "433978776043",
  appId: "1:433978776043:web:a7b526614bf1a97e91e1ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig),
  timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default firebaseApp.firestore();
