// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ9xuOUlm1xILxtdqvIzAPHlYH4O6hKBA",
  authDomain: "asg9-realestate.firebaseapp.com",
  projectId: "asg9-realestate",
  storageBucket: "asg9-realestate.appspot.com",
  messagingSenderId: "817132136340",
  appId: "1:817132136340:web:ebad87d93a7bd26ce75181",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
