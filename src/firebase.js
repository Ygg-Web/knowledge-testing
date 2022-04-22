import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export const signup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// export const useAuth = () => {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) =>
//       setCurrentUser(user)
//     );
//     return unsubscribe;
//   }, []);

//   return currentUser;
// };

export const logoutSession = () => signOut(auth);
export const deleteProfile = () => deleteUser(auth.currentUser);

// export const uploadImage(file, currentUser, setLoading) {
//   const fileRef =
// }

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + "png");
  console.log(file);
  // setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  console.log(snapshot);

  const photoURL = await getDownloadURL(fileRef);
  console.log(photoURL);

  return photoURL;
  // updateProfile(currentUser, { photoURL });

  // setLoading(false);
  // alert("Uploaded file!");
}
