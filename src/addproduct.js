import  { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDRlpN1aSw5Ed9bvtp7tDsqhcezRTEpjxw",
  authDomain: "farmsolutions-f9ab9.firebaseapp.com",
  projectId: "farmsolutions-f9ab9",
  storageBucket: "farmsolutions-f9ab9.appspot.com",
  messagingSenderId: "268323594915",
  appId: "1:268323594915:web:9e696114bda71f5cca5516"
  };
const date =new Date
const consoleShow = `\n----------------------------\nScript running Time ${date}\n----------------------------`;
const app = initializeApp(firebaseConfig);
const db  = getFirestore();
const productdetails = collection(db, 'product');
export default function addProductJs(){

              const addProductForm = document.querySelector('.addProduct')
              addProductForm.addEventListener('submit', (e) => {
                                              e.preventDefault()
                                              
                                              
                                              addDoc(productdetails, {
                                                name: addProductForm.name.value,
                                                quantity: Number(addProductForm.quantity.value),
                                                price: Number(addProductForm.price.value),
                                                weight: Number(addProductForm.weight.value),
                                                details: addProductForm.details.value,
                                                createdAt: serverTimestamp(),
                                              })
                                              .then(() => {
                                                alert("Product added")
                                                addProductForm.reset()
                                              })
                                              .catch(()=>{
                                                console.log("error fileInputControladdEventListener ")
                                              })
                                            })
              }
export function fnAddproduct(){
  console.log(`exported script from addproduct ${consoleShow}`)
}