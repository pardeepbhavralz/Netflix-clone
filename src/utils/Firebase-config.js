import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDWlKtCKw2kMMUeyHoPbTFaNpZuUTW0jYA",
  authDomain: "netflix-clone-cc29d.firebaseapp.com",
  projectId: "netflix-clone-cc29d",
  storageBucket: "netflix-clone-cc29d.appspot.com",
  messagingSenderId: "39879881397",
  appId: "1:39879881397:web:32b88973e1507710f844fc",
  measurementId: "G-E948MNF0K3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
