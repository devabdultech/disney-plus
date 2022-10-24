import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD0X6vWrF0MizSM5Q0HDzdJzn9niKlqtr0",
  authDomain: "disney-plus-clone-45030.firebaseapp.com",
  projectId: "disney-plus-clone-45030",
  storageBucket: "disney-plus-clone-45030.appspot.com",
  messagingSenderId: "57601288394",
  appId: "1:57601288394:web:cefc3dbb9537a57f4eac33",
  measurementId: "G-SSJ3E5R0E5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider;

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((err) => {
    console.log(err)
  })
}

const signUpWithEmail = ({email, password}) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}

const signInWithEmail = ({email, password}) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message
    console.log(errorCode);
    console.log(errorMessage);
  })
}

const SignOut = () => {
  signOut(auth).then(() => {
    console.log('Successfull Signout')
  }).catch((err) => {
    console.log(err)
  })
}

export { signInWithGoogle, signUpWithEmail, signInWithEmail, SignOut };