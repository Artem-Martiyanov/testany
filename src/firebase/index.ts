import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;

const firebaseConfig = {
  apiKey: "AIzaSyB6Ek3J7phdYweu2SoZwV_9F2MY3Xz_76Y",
  authDomain: "test-any-5aa3b.firebaseapp.com",
  databaseURL: "https://test-any-5aa3b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-any-5aa3b",
  storageBucket: "test-any-5aa3b.appspot.com",
  messagingSenderId: "635520411650",
  appId: "1:635520411650:web:0de14c3a9d66bc935a1f1b",
  measurementId: "G-XQ4GXWM288"
};


export const app: ReturnType<typeof app> = initializeApp(firebaseConfig)
