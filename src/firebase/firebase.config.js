// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2dhreTd4A4NQ90C7pEFK23_PbsCF1S-s",
  authDomain: "auth-moha-milon-1e902.firebaseapp.com",
  projectId: "auth-moha-milon-1e902",
  storageBucket: "auth-moha-milon-1e902.appspot.com",
  messagingSenderId: "379901285172",
  appId: "1:379901285172:web:70646a74008cd21da4cb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;