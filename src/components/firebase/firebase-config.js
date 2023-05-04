// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiQSdB8rVeWmKy-vraBWx5nwVC1vdRDP4",
  authDomain: "great-recipe-great-chef-client.firebaseapp.com",
  projectId: "great-recipe-great-chef-client",
  storageBucket: "great-recipe-great-chef-client.appspot.com",
  messagingSenderId: "976860954855",
  appId: "1:976860954855:web:d1934983b136c9b525e242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;