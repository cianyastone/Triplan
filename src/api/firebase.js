import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCgzHLrxthEg8fCuy3A60Of9NdqQWzgj0s",
  authDomain: "triplan-3ec40.firebaseapp.com",
  projectId: "triplan-3ec40",
  storageBucket: "triplan-3ec40.appspot.com",
  messagingSenderId: "180042243625",
  appId: "1:180042243625:web:d78e13121d4174a81ac638",
  measurementId: "G-7MWQXTDXRJ",
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

//REFERENCE AUTH
const auth = app_length
  ? getAuth(app)
  : initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });

// REFERENCE DB
const db = getFirestore(app);

export const login = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  return user;
};

export const register = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      name,
      email: email,
    });
    return user;
  } catch (e) {
    console.log("error ...");
    console.log(e);
  }
};

export const logout = () => {
  signOut(auth);
};

export const readUser = async () => {
  const { uid } = auth.currentUser;

  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return "No such document!";
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (userInfo) => {
  const { uid } = auth.currentUser;
  try {
    const docRef = doc(db, "users", uid);
    await setDoc(docRef, userInfo);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (e) {
    console.log(e);
  }
};
