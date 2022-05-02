// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8vFcadzrv0HJRjGGmQUyt3LScAGi54lo",
  authDomain: "al-harmain-webapp.firebaseapp.com",
  projectId: "al-harmain-webapp",
  storageBucket: "al-harmain-webapp.appspot.com",
  messagingSenderId: "549197235659",
  appId: "1:549197235659:web:6c1b50b969bf3bdc2fa24e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;