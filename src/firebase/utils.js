import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

//firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
   if(!userAuth) return;
   const {uid} = userAuth;

   const userRef = firestore.doc(`users/${uid}`); //this will check whether the user id is present in the db or not
   const snapshot = await userRef.get() //will return a true/false value stating the usere is there or not

   if(!snapshot.exists){ //if user is not present
      const {displayName, email} = userAuth;
      const timestamp = new Date();

      try{
         await userRef.set({ //setting all data for the new user
            displayName,
            email,
            createdDate: timestamp,
            ...additionalData
         })

      }catch (err){
         //console.log(err);
      }
   }
   return userRef; //returning it to maintain the local state of my app
}