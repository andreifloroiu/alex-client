import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';
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

const apps = getApps()
export const app = !apps.length ?
  initializeApp(firebaseConfig, 'alex')
  : getApp('alex');

// Auth exports
export const auth = getAuth(app);
// Firestore database
export const db = getFirestore(app);
// Storage exports
export const storage = getStorage(app);

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

/**`
 * Gets if CSO profile is created.
 * @param  {string} profileId
 */
export async function getIsCSOProfileCreated(profileId = 'default') {
  const ref = collection(db, 'CSOProfile')
  const q = query(ref, where('id', '==', profileId), limit(1))
  const querySnapshot = await getDocs(q)
  if ((querySnapshot?.docs?.length ?? 0) == 0) {
    return false
  }
  const data = querySnapshot?.docs[0]?.data()
  console.log(JSON.stringify(data, null, 2))
  return data?.isProfileComplete
}