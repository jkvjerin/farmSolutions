import  { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
  addDoc, serverTimestamp} from 'firebase/firestore';
// import {getDownloadURL,deleteObject,getStorage,ref } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDRlpN1aSw5Ed9bvtp7tDsqhcezRTEpjxw",
  authDomain: "farmsolutions-f9ab9.firebaseapp.com",
  projectId: "farmsolutions-f9ab9",
  storageBucket: "farmsolutions-f9ab9.appspot.com",
  messagingSenderId: "268323594915",
  appId: "1:268323594915:web:9e696114bda71f5cca5516"
  };
const app = initializeApp(firebaseConfig);

// init services---------
const db  = getFirestore();
// collection ref------------------------
const emaildetails = collection(db, 'email');
export default function addEmailtonewsletterJs(){

console.log("exported script from addtonewsletter")
const addEmailForm = document.querySelector('.addEmail')
addEmailForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(emaildetails, {
    email: addEmailForm.email.value,
    createdAt: serverTimestamp(),
  })
  .then(() => {
    addEmailForm.reset()
  })
  .catch(()=>{
    console.log("error addEmailEventListener ")
  })
})
}
export function fnAddEmail(){
  console.log(`exported script from addtonewsletter 🗞️`)
}