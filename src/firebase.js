import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZLan_ULjxl2qWP9neujXKKUYPEF4yf-w",
  authDomain: "disneyplus-clone-7d2bd.firebaseapp.com",
  projectId: "disneyplus-clone-7d2bd",
  storageBucket: "disneyplus-clone-7d2bd.appspot.com",
  messagingSenderId: "537090541645",
  appId: "1:537090541645:web:0c2aa7d9e3b6c512ee3404",
  measurementId: "G-E8GPXFHH83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }

export default db