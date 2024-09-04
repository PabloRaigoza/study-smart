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
    isLoggedIn = true;

    document.getElementById('login-button').style.display = 'none';

    let profile_img = document.createElement('img');
    profile_img.src = result.user.photoURL;
    profile_img.style.width = '40px';
    profile_img.style.height = '40px';
    profile_img.style.borderRadius = '30%';
    profile_img.style.marginTop = '10px';
    profile_img.style.marginRight = '10px';
    document.getElementById('login-container-id').appendChild(profile_img);

    user = result.user;
  });
}

let login_btn = document.getElementById('login-button');
login_btn.addEventListener('click', openLogin);
