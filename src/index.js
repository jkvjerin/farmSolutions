import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp} from 'firebase/firestore'
import {
  getAuth,connectAuthEmulator,
  createUserWithEmailAndPassword}from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDRlpN1aSw5Ed9bvtp7tDsqhcezRTEpjxw",
  authDomain: "farmsolutions-f9ab9.firebaseapp.com",
  projectId: "farmsolutions-f9ab9",
  storageBucket: "farmsolutions-f9ab9.appspot.com",
  messagingSenderId: "268323594915",
  appId: "1:268323594915:web:9e696114bda71f5cca5516"
  };
// init firebase------------
initializeApp(firebaseConfig)

// init services---------
const db = getFirestore()
const auth =getAuth()
const authUi = ui.start('#firebaseui-auth-container', {
  signInOptions: [{
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
  },
  {
    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    scopes: [
      'https://www.googleapis.com/auth/contacts.readonly'
    ],
    customParameters: {
      // Forces account selection even when one account
      // is available.
      prompt: 'select_account'
    }
  },
  {
    provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    scopes: [
      'public_profile',
      'email',
      'user_likes',
      'user_friends'
    ],
    customParameters: {
      // Forces password re-entry.
      auth_type: 'reauthenticate'
    }
  },
  firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  firebase,auth.Anonymou
  ],
  // Other config options...
});
//connectAuthEmulator=(auth,"http://localhost")
// Initialize the FirebaseUI Widget using Firebase.
//var ui = new firebaseui.auth.AuthUI(firebase.auth());

// collection ref------------------------
// const colRef = collection(db, 'books')
const userdetails = collection(db, '@user')

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
//signing users up
const signupForm =document.querySelector('#regForm')

signupForm.addEventListener('submit',(e)=>{
  const name = signupForm.name.value;
  const email=signupForm.email.value;
  const password=signupForm.password.value;
    e.preventDefault();
    // alert("Form is not valid. Please fix the errors and try again.");
  
    addDoc(userdetails, 
      {
      name: name,
      email: email,
      password: password,
      createdAt: serverTimestamp()
    })
    .then(() => {
      signupForm.reset()
    })
    const favDialog = document.getElementById('favDialog');
    favDialog.querySelector('#emailVarify').value=email;
    const emailVarify = favDialog.querySelector('#emailVarify');
    const confirmBtn = favDialog.querySelector('#confirmSentVarify')
    createUserWithEmailAndPassword(auth,email,password)
      .then(()=>{
        function dialogVarify() {
          if (confirm("continue to varification.")) {
            favDialog.showModal();
          } 
        }
        alert('user created')
        dialogVarify();
        emailVarify.addEventListener('input', (e) => {
          confirmSentVarify.value = emailVarify.value;
          
        });
        // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
        favDialog.addEventListener('close', () => {
           
        if ( favDialog.returnValue == null || favDialog.returnValue == "") {
        alert( ` Varification sent ${favDialog.returnValue}.`);
      } else {
        alert( `Varification sent ${favDialog.returnValue}.`);
      }
        });
        // console.log('user created',cred.user)
        const actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be in the authorized domains list in the Firebase Console.
          url: 'https://www.example.com/finishSignUp?cartId=1234',
          // This must be true.
          handleCodeInApp: true,
          // iOS: {
          //   bundleId: 'com.example.ios'
          // },
          // android: {
          //   packageName: 'com.example.android',
          //   installApp: true,
          //   minimumVersion: '12'
          // },
          dynamicLinkDomain: 'example.page.link'
        };
        signupForm.reset();
        //location.replace("http://localhost/ServerDirectory/farmSolutions/dist/dashboard/dashboardAdmin/pages-login.html")
      })
      .catch((err)=>{
        const errorCode = err.code;
        const errorMessage = err.message;

        alert(errorCode)
        alert(errorMessage)
      })
  });
  
  // "Favorite animal" input sets the value of the submit button
  selectEl.addEventListener('change', (e) => {
    confirmBtn.value = selectEl.value;
  });
  // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
  favDialog.addEventListener('close', () => {
    outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
  });
// document.getElementById("submitButton").addEventListener("click", function(event){
//   if (canRegister !== true) {
//     event.preventDefault();
//     alert("Form is not valid. Please fix the errors and try again.");
//   }
// });