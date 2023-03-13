export default ()=>{
 //signing users up
const signupForm =document.querySelector('#regForm')
if (signupForm === null) {
  //if null
} else {
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
                }).catch(()=>{
                  console.log("signupform error addEventListener ")
                })
const favDialog = document.getElementById('favDialog');
favDialog.querySelector('#emailVarify').value=email;
const emailVarify = favDialog.querySelector('#emailVarify');
const confirmBtn = favDialog.querySelector('#confirmSentVarify')
function dialogVarify() {
if (confirm("continue to varification.")) {
favDialog.showModal();
} 
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
};

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', () => {
outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});

document.getElementById("submitButton").addEventListener("click", function(event){
if (canRegister !== true) {
event.preventDefault();
alert("Form is not valid. Please fix the errors and try again.");
}
})})
}

   
}
export function fnsignup(){
    console.log(`exported script from signup.js`)
  }