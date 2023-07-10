import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCantzHQMdUew4QdEdgpT8ys3eeKjp4ONg",
    authDomain: "projectify-4271b.firebaseapp.com",
    projectId: "projectify-4271b",
    storageBucket: "projectify-4271b.appspot.com",
    messagingSenderId: "1000926965270",
    appId: "1:1000926965270:web:7210440661401e490e4f37",
    measurementId: "G-FWN5V3P5WS"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }