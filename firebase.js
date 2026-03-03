// Import from Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase configuration (Reboot Gaming)
const firebaseConfig = {
  apiKey: "AIzaSyA68v0bI0WLh80L3VsQ6sCN6Uy7Wxj5TZQ",
  authDomain: "reboot-gaming.firebaseapp.com",
  projectId: "reboot-gaming",
  storageBucket: "reboot-gaming.firebasestorage.app",
  messagingSenderId: "519788310945",
  appId: "1:519788310945:web:eaf203c3df8191fce89be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);