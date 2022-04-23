import '../styles/globals.css'
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnSrI75QWNR8y4lKmUKYPDjcwrf11fqNI",
  authDomain: "alex-code4ro.firebaseapp.com",
  projectId: "alex-code4ro",
  storageBucket: "alex-code4ro.appspot.com",
  messagingSenderId: "878504888355",
  appId: "1:878504888355:web:d1f3d02c4489563a834996",
  measurementId: "G-5DFT7CENX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
isSupported().then(() => {
  const analytics = getAnalytics(app);
});

function AlexApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default AlexApp
