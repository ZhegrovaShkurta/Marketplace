import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtSGUvlqOgmIdRmSHTgKP6AK9F7FDjuN8",
  authDomain: "house-marketplace-798e5.firebaseapp.com",
  projectId: "house-marketplace-798e5",
  storageBucket: "house-marketplace-798e5.appspot.com",
  messagingSenderId: "1004887605943",
  appId: "1:1004887605943:web:7fce6ae0806c9c10d50332"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
