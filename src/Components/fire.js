import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCEjw4SfGCW7U0x-7ubau-4r3B8TxKjWig",
  authDomain: "a-design-guy.firebaseapp.com",
  projectId: "a-design-guy",
  storageBucket: "a-design-guy.appspot.com",
  messagingSenderId: "315915174948",
  appId: "1:315915174948:web:3bd817f1591cf1c39844b1",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
