
const date =new Date().toString;
const consoleShow = `script running `;
console.log(`Show category is "Running👌${date}"`);
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp} from 'firebase/firestore';
import  { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyDRlpN1aSw5Ed9bvtp7tDsqhcezRTEpjxw",
    authDomain: "farmsolutions-f9ab9.firebaseapp.com",
    projectId: "farmsolutions-f9ab9",
    storageBucket: "farmsolutions-f9ab9.appspot.com",
    messagingSenderId: "268323594915",
    appId: "1:268323594915:web:9e696114bda71f5cca5516"
    };
// init firebase------------

// init services---------
// const db  = getFirestore();
const catdetails = collection(db, 'cat');

// get collection data----------------------------
getDocs(catdetails )
  .then(snapshot => {
//     // console.log(snapshot.docs)
    let books = [];
    console.log(snapshot)
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
      let books1= JSON.stringify(books)
      document.getElementById("show").innerHTML = books1;
    })
    console.log(books[1].id)
    console.log(books1)
  })
  .catch(err => {
    console.log(err.message)
  })

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
