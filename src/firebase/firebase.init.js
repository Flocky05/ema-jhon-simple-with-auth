// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSEMaeH6zMdzOqtmrtYMcOZZnwpd0H3Zo",
    authDomain: "ema-jhon-simple-dc504.firebaseapp.com",
    projectId: "ema-jhon-simple-dc504",
    storageBucket: "ema-jhon-simple-dc504.appspot.com",
    messagingSenderId: "861996333764",
    appId: "1:861996333764:web:e674dff889603a43836791",
    measurementId: "G-MFV5316XJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;