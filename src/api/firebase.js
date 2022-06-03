import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref,
  getDownloadURL,
  getBlob,
  uploadBytesResumable,
} from "firebase/storage";
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

const app = app_length ? getApp() : initializeApp(firebaseConfig);

const auth = app_length
  ? getAuth(app)
  : initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
const db = getFirestore(app);
const storage = getStorage(app);

export const login = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (e) {
    console.log(e);
  }
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
      country: "",
      style: [],
    });
    return user;
  } catch (e) {
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

export const readUserPhoto = async () => {
  const { uid } = auth.currentUser;
  const storageRef = ref(storage, "/profilePicture/" + uid);

  return await getDownloadURL(storageRef);
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

export const updateUserPhoto = async (userPhoto) => {
  const { uid } = auth.currentUser;
  try {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", userPhoto.image.uri, true);
      xhr.send(null);
    });
    const storageRef = ref(storage, "/profilePicture/" + uid);

    await uploadBytesResumable(storageRef, blob);

    blob.close();
  } catch (e) {
    console.log(e);
  }
};
