// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKKljtSFIO2CeXSkaAs1rdOcw4oB0yaQU",
  authDomain: "study-smart-bdf00.firebaseapp.com",
  projectId: "study-smart-bdf00",
  storageBucket: "study-smart-bdf00.appspot.com",
  messagingSenderId: "283078680388",
  appId: "1:283078680388:web:cee5b928a574b3e8ef4111",
  measurementId: "G-STWQ5MVTW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
} catch (e) {
  console.error("Error adding document: ", e);
}

console.log('sucess fully connectedt');
console.log(app);

export { app, db, setDoc, doc };

// Close modal if clicked outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById('auth-modal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
}
