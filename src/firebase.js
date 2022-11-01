import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const signUp = ({email, password}) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCred) => {
    const user = userCred.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}

const signIn = ({email, password}) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCred) => {
    const user = userCred.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  })
}

const signInPopup = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode)
    console.log(errorMessage)
  })
}

const SignOut = () => {
  signOut(auth).then(() => {
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export { signUp, signIn, signInPopup, SignOut, auth };