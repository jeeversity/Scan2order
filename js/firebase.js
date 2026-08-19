import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDpdPHwPKK0c_6tNbqjMtd42K_-gOmEVqA",
authDomain: "scan2order-1e5fb.firebaseapp.com",
projectId: "scan2order-1e5fb",
storageBucket: "scan2order-1e5fb.firebasestorage.app",
messagingSenderId: "854560018689",
appId: "1:854560018689:web:99a08f349ab0da74bdcb00"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };