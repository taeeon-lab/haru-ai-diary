import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTCRqzVBVAzx_Sr3RtybDzK3Xz5alQZ3w",
  authDomain: "haru-ca627.firebaseapp.com",
  projectId: "haru-ca627",
  storageBucket: "haru-ca627.firebasestorage.app",
  messagingSenderId: "869615652170",
  appId: "1:869615652170:web:70a33e3adf897199b745b3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);