import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
const db = getFirestore(app);

async function record_push() {
    if (user === null) {
        alert('Please login first');
        return;
    }

    let col_id = user.email;
    let task_name = document.getElementById('task-name-id').value;
    if (task_name === '') {
        // alert('Please enter a task name');
        // return;
        task_name = 'default';
    }
    let prod = "very good";
    let time = "1 hour";
    let tags = [
        "tag1",
        "tag2",
        "tag3"
    ]
    
    await setDoc(doc(db, col_id, task_name), {
        prod: prod,
        time: time,
        tags: tags
    });

    console.log(user)
}

document.getElementById('record-button').addEventListener('click', record_push);