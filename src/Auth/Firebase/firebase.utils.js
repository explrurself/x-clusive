import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBnoweTqFmIAbKKTvjBxypEtDdEjd0NfLc",
    authDomain: "exclusive-fash.firebaseapp.com",
    projectId: "exclusive-fash",
    storageBucket: "exclusive-fash.appspot.com",
    messagingSenderId: "959379107631",
    appId: "1:959379107631:web:8fcf22d198c3d8693bbbda",
    measurementId: "G-9L3PEQP9GF"
  };


 export const createUserProfileDocument = async( userAuth, additionalData) =>{
     if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
     const snapShot = await userRef.get()

     if(!snapShot.exists){
         const { displayName, email} = userAuth;
         const createDate = new Date();

         try{
            await userRef.set({
                displayName,
                email,
                createDate,
                ...additionalData
            })
         }catch(error){
            console.log("error creating user", error.message);
         }
     }
     return userRef;
     
 }



  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" })

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;