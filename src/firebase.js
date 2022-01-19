import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-ENgIATju6rmKjTUXy2SHDeDv6KV1b2Q",
  authDomain: "personal-fcb9d.firebaseapp.com",
  projectId: "personal-fcb9d",
  storageBucket: "personal-fcb9d.appspot.com",
  messagingSenderId: "692967504199",
  appId: "1:692967504199:web:a63a2a1963e85fa8faf462",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
