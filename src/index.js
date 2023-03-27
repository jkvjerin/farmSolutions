console.log(`Main script is "Running👌"`);//TODO: import defaltfn ,{non-defaultfn as aliasfn} from filepath.
// import { getRemoteConfig,fetchAndActivate, fetchConfig, activate, getValue}from 'firebase/remote-config'
// import {
//   getFirestore, collection, getDocs,
//   addDoc, deleteDoc, doc,
//   query, where,
//   orderBy, serverTimestamp} from 'firebase/firestore';
// import {
//   getAuth,connectAuthEmulator,
//   createUserWithEmailAndPassword}from 'firebase/auth'
// import { } from 'firebase/database';
// import {getDownloadURL,deleteObject,getStorage,ref } from 'firebase/storage'

import {linkfn,} from './insertWebAppIcon.js';
linkfn();
// import signuptoapp ,{fnsignup} from './signupscript.js'
// fnsignup();signuptoapp();
import  { initializeApp } from 'firebase/app';
const date =new Date().toString;
const consoleShow = `script running ${date}`;
// init firebase------------
// init services---------
// const db  = getFirestore();
// const auth = getAuth();

// // collection ref------------------------
// // const colRef = collection(db, 'books')
// const userdetails = collection(db, '@user');
// const productdetails = collection(db, 'product');
// const storageRef = ref(Storage)// makefolder
// -------------------------------------------------
// const imageRef = ref(storageRef,'images')
// const sparkRef = ref(storageRef,'images/spark.jpg');
// getDownloadURL(sparkRef)
// .then((url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType() = 'blob'
//   xhr.onload =(evn) => {
//     const blob = xhr.response;
//   };
//   xhr.open('GET',url);
//   xhr.send();
//   // insert into am image element 
//   const img1= document.getElementById('myimages1');
//   img1.setAttribute('src',url); 
// })
// .catch((e1 => {
//   // handle error
// // });
// deleteObject(sparkRef).then(()=>{
//   console.log('file deleted');
// }).catch(()=>{console.log('error w/h file upload')})


// get collection data----------------------------
// getDocs(colRef)
//   .then(snapshot => {
//     // console.log(snapshot.docs)
//     let books = []
//     let books1={}
//     console.log(snapshot)
//     snapshot.docs.forEach(doc => {
//       books.push({ ...doc.data(), id: doc.id })
      // let books1= JSON.stringify(books)
      // document.getElementById("show").innerHTML = books1;
  //   })
  //   console.log(books[1].id)
  //   console.log(books1)
  // })
  // .catch(err => {
  //   console.log(err.message)
  // })

// adding docs-----------------------------------
// const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     title: addBookForm.title.value,
//     author: addBookForm.author.value,
//   })
//   .then(() => {
//     addBookForm.reset()
//   })
// })
// deleting docs------------------------------------------
// const deleteBookForm = document.querySelector('.delete')
// deleteBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const docRef = doc(db, 'books', deleteBookForm.id.value)

//   deleteDoc(docRef)
//     .then(() => {
//       deleteBookForm.reset()
//     })
// })
// 

import addEmailtonewsletterJs, {fnAddEmail} from './addtonewsletter.js';
fnAddEmail();addEmailtonewsletterJs();
// 

