// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const firebaseInit = () => {
    initializeApp(firebaseConfig);
}

// const analytics = getAnalytics(app);
export default firebaseInit;