import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkjdi3JQaEmCoifhV-ZtthgHWlKy-H5wY",
  authDomain: "musicteam-48157.firebaseapp.com",
  projectId: "musicteam-48157",
  storageBucket: "musicteam-48157.appspot.com",
  messagingSenderId: "516085809252",
  appId: "1:516085809252:web:259d5c31b9ffb216561f71",
  measurementId: "G-SSRPQLNF2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db}
