import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBjie7upOh09wY4DWV_9V5fW0hTN36kYso",
  authDomain: "disney-plus-clone-44e51.firebaseapp.com",
  projectId: "disney-plus-clone-44e51",
  storageBucket: "disney-plus-clone-44e51.appspot.com",
  messagingSenderId: "622276605673",
  appId: "1:622276605673:web:d786c8b2b074919bfee278"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}