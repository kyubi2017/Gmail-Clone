import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAE5VMEIaFFrX_YFroMkfeTsGIaZXszKpU",
  authDomain: "clone-75943.firebaseapp.com",
  projectId: "clone-75943",
  storageBucket: "clone-75943.appspot.com",
  messagingSenderId: "365700408500",
  appId: "1:365700408500:web:63fa271e3d9a8425fa63e1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

export default firebase;
