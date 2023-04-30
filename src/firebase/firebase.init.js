import * as dotenv from 'dotenv' ; 
dotenv.config() ;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let keys = process.env ;
const firebaseConfig = {
  apiKey: keys.API_KEY,
  authDomain: keys.AUTH_DOMAIN,
  projectId: keys.PROJECT_ID,
  storageBucket: keys.STORAGE_BUCKET,
  messagingSenderId: keys.MESSAGING_SENDER_ID,
  appId: keys.APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
