import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKKljtSFIO2CeXSkaAs1rdOcw4oB0yaQU",
  authDomain: "study-smart-bdf00.firebaseapp.com",
  projectId: "study-smart-bdf00",
  storageBucket: "study-smart-bdf00.appspot.com",
  messagingSenderId: "283078680388",
  appId: "1:283078680388:web:cee5b928a574b3e8ef4111",
  measurementId: "G-STWQ5MVTW2"
};


const app = initializeApp(firebaseConfig);

function openLogin() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log('Clicked login');
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  });
}

let login_btn = document.getElementById('login-button');
login_btn.addEventListener('click', openLogin);
