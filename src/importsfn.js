import  { initializeApp } from 'firebase/app';
// import { getRemoteConfig,fetchAndActivate, fetchConfig, activate, getValue}from 'firebase/remote-config'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp} from 'firebase/firestore';
import {
  getAuth,connectAuthEmulator,
  createUserWithEmailAndPassword}from 'firebase/auth'
import { } from 'firebase/database';
import {getDownloadURL,deleteObject,getStorage,ref } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDRlpN1aSw5Ed9bvtp7tDsqhcezRTEpjxw",
  authDomain: "farmsolutions-f9ab9.firebaseapp.com",
  projectId: "farmsolutions-f9ab9",
  storageBucket: "farmsolutions-f9ab9.appspot.com",
  messagingSenderId: "268323594915",
  appId: "1:268323594915:web:9e696114bda71f5cca5516"
  };

const date =new Date().toString;
const consoleShow = `script running ${date}`;
// init firebase------------
const app = initializeApp(firebaseConfig);

// init services---------
const db  = getFirestore();
const auth = getAuth();

// collection ref------------------------
// const colRef = collection(db, 'books')
const userdetails = collection(db, '@user');
const productdetails = collection(db, 'product');