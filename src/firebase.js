import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyCkiCouVgbMKeyODp0PebknBxcH88QxrM4',
    authDomain: 'spark-books.firebaseapp.com',
    projectId: 'spark-books',
    storageBucket: 'spark-books.appspot.com',
    messagingSenderId: '906090321145',
    appId: '1:906090321145:web:a6637a80203acd0bfafe28',
    measurementId: 'G-7CEB8ED41H',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebaseApp.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
