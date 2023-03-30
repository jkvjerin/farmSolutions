import  { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp} from 'firebase/firestore';
  import { getDownloadURL,uploadBytesResumable,getStorage,ref} from 'firebase/storage';
   
  
  export default function showProductsJs(){ 

  const firebaseConfig = {
  apiKey: "AIzaSyDRlpN1aSw5Ed9bvtp7tDsqhcezRTEpjxw",
  authDomain: "farmsolutions-f9ab9.firebaseapp.com",
  projectId: "farmsolutions-f9ab9",
  storageBucket: "farmsolutions-f9ab9.appspot.com",
  messagingSenderId: "268323594915",
  appId: "1:268323594915:web:9e696114bda71f5cca5516"
  };
const app = initializeApp(firebaseConfig);
const db  = getFirestore();
const stor = getStorage();
// const storageRef = ref(storage, 'images/mountains.jpg');

const productdetails = collection(db, 'product');
let inputid =``;
const displayProduct = document.getElementById('displayProduct');


displayProduct.addEventListener(`load`,()=>{
                // create an array of product item objects with the relevant data

const products = [
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/farmsolutions-f9ab9.appspot.com/o/PRODUCT%2FuPzFxYGmcj9tuf9QT4PO%2Fpineapple.jpg?alt=media&token=afbe89ff-4401-4424-9e67-d4395822222e',
    name: 'Pineapple',
    price: '24.00 RS'
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/farmsolutions-f9ab9.appspot.com/o/PRODUCT%2FuPzFxYGmcj9tuf9QT4PO%2Fwatermelon.jpg?alt=media&token=1e6fc70c-047a-4fc8-b6b2-94c2d6ee00e6',
    name: 'Watermelon',
    price: '30.00 RS'
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/farmsolutions-f9ab9.appspot.com/o/PRODUCT%2FuPzFxYGmcj9tuf9QT4PO%2Fbanana.jpg?alt=media&token=78a2f964-4d4e-4b7a-b4b4-3294db5d10c5',
    name: 'Banana',
    price: '12.00 RS'
  }
];

// get the displayProduct element
const displayProductDiv = document.getElementById('displayProduct');

// loop through the products array and generate a product item for each one
products.forEach(product => {
  // create the HTML elements for the product item
  const colDiv = document.createElement('div');
  colDiv.classList.add('col-lg-4', 'col-md-6', 'col-sm-6');

  const productItemDiv = document.createElement('div');
  productItemDiv.classList.add('product__item');

  const productImageDiv = document.createElement('div');
  productImageDiv.classList.add('product__item__pic', 'set-bg');
  productImageDiv.dataset.setbg = product.imageSrc;

  const productImageHoverUl = document.createElement('ul');
  productImageHoverUl.classList.add('product__item__pic__hover');

  const heartLi = document.createElement('li');
  const heartLink = document.createElement('a');
  heartLink.href = '#';
  const heartIcon = document.createElement('i');
  heartIcon.classList.add('fa', 'fa-heart');
  heartLink.appendChild(heartIcon);
  heartLi.appendChild(heartLink);
  productImageHoverUl.appendChild(heartLi);

  const retweetLi = document.createElement('li');
  const retweetLink = document.createElement('a');
  retweetLink.href = '#';
  const retweetIcon = document.createElement('i');
  retweetIcon.classList.add('fa', 'fa-retweet');
  retweetLink.appendChild(retweetIcon);
  retweetLi.appendChild(retweetLink);
  productImageHoverUl.appendChild(retweetLi);

  const cartLi = document.createElement('li');
  const cartLink = document.createElement('a');
  cartLink.href = '#';
  const cartIcon = document.createElement('i');
  cartIcon.classList.add('fa', 'fa-shopping-cart');
  cartLink.appendChild(cartIcon);
  cartLi.appendChild(cartLink);
  productImageHoverUl.appendChild(cartLi);

  const productTextDiv = document.createElement('div');
  productTextDiv.classList;
              }).catch(errshowproduct)
              {
                console.log(errshowproduct.message)
              }
               console.log(`From show product js`)
              })
 }
 showProductsJs();