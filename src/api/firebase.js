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
  uploadBytesResumable,
} from "firebase/storage";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import { async } from "@firebase/util";

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

export const uploadTrip = async ({ name, days, date, image }) => {
  const { uid } = auth.currentUser;
  try {
    const docRef = await addDoc(collection(db, "trip"), {
      user: uid,
      name,
      days,
      date,
      image,
    });
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (e) {
    console.log(e);
  }
};

export const readTrip = async () => {
  const { uid } = auth.currentUser;

  try {
    const q = query(collection(db, "trip"), where("user", "==", uid));
    const querySnapshot = await getDocs(q);
    var datas = [];
    querySnapshot.forEach((doc) => {
      datas.push(doc.data());
    });
    return datas;
  } catch (e) {
    console.log(e);
  }
};

export const readOthersTrip = async () => {
  const { uid } = auth.currentUser;

  try {
    const q = query(collection(db, "trip"), where("user", "!=", uid));
    const querySnapshot = await getDocs(q);
    var datas = [];
    querySnapshot.forEach((doc) => {
      datas.push(doc.data());
    });
    return datas;
  } catch (e) {
    console.log(e);
  }
};

export const deleteTrip = async ({ name }) => {
  const { uid } = auth.currentUser;

  try {
    const collectionRef = query(
      collection(db, "trip"),
      where("name", "==", name),
      where("user", "==", uid)
    );
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((data) => {
      const docRef = doc(db, "trip", data.id);
      deleteDoc(docRef);
      console.log("success");
    });
  } catch (e) {
    console.log(e);
  }
};

export const collectTrip = async ({ name, user }) => {
  const { uid } = auth.currentUser;
  try {
    const docRef = await addDoc(collection(db, "/users/" + uid + "/collect"), {
      name,
      user,
    });
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (e) {
    console.log(e);
  }
};

export const deleteCollect = async ({ name, user }) => {
  const { uid } = auth.currentUser;
  try {
    const collectionRef = query(
      collection(db, "/users/" + uid + "/collect"),
      where("name", "==", name),
      where("user", "==", user)
    );
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((data) => {
      const docRef = doc(db, "/users/" + uid + "/collect", data.id);
      deleteDoc(docRef);
    });
  } catch (e) {
    console.log(e);
  }
};

export const readCollect = async () => {
  const { uid } = auth.currentUser;

  try {
    const querySnapshot = await getDocs(
      collection(db, "/users/" + uid + "/collect")
    );
    var datas = [];
    querySnapshot.forEach((doc) => {
      datas.push(doc.data());
    });
    return datas;
  } catch (e) {
    console.log(e);
  }
};
