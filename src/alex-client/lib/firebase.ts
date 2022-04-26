import { getApp, getApps, initializeApp } from 'firebase/app';
import { } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { collection, DocumentSnapshot, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';
import {} from 'firebase/storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBnSrI75QWNR8y4lKmUKYPDjcwrf11fqNI",
  authDomain: "alex-code4ro.firebaseapp.com",
  projectId: "alex-code4ro",
  storageBucket: "alex-code4ro.appspot.com",
  messagingSenderId: "878504888355",
  appId: "1:878504888355:web:d1f3d02c4489563a834996",
  measurementId: "G-5DFT7CENX9"
};

export const firebase = !getApps().length ?
  initializeApp(firebaseConfig)
  : getApp('alex-code4ro');

// Auth exports
export const googleAuthProvider = getAuth(firebase);

// Firestore exports
export const db = getFirestore(firebase);

// Storage exports
export const storage = getStorage(firebase);

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username:string) {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where('username', '==', username), limit(1));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0]?.data;
}