import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCwWGGNbalvzvAZ5kgnU0kE1pRAE5QP-pU",
  authDomain: "mibiblioteca1-dff9a.firebaseapp.com",
  projectId: "mibiblioteca1-dff9a",
  storageBucket: "mibiblioteca1-dff9a.appspot.com",
  messagingSenderId: "953768325705",
  appId: "1:953768325705:web:7a481e37c477609dc6c598"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
