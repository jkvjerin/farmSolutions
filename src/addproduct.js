import  { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp} from 'firebase/firestore';
  import { getDownloadURL,uploadBytesResumable,getStorage,ref} from 'firebase/storage';
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
const stor = getStorage();
// const storageRef = ref(storage, 'images/mountains.jpg');

const productdetails = collection(db, 'product');
let inputid =``;
export function returnDocid(id)
{
  inputid=id;
  console.log(`returnDocid ${inputid}`)
};
export default function addProductJs(){
                const bar = document.querySelector(".bar");
                

                const percentageTag=document.querySelector(".percentage");
                const total = 100;
                let solved = 0;
                solved=11;
                
                  const proportion = solved ;
                const percentage =  Math.round(proportion * 100) / total;
                const fileTypes = [
                  "image/*",
                  "image/apng",
                  "image/bmp",
                  "image/gif",
                  "image/jpeg",
                  "image/pjpeg",
                  "image/png",
                  "image/svg+xml",
                  "image/tiff",
                  "image/webp",
                  "image/x-icon"
                ];

                function validFileType(file) {
                  return fileTypes.includes(file.type);
                }
                function returnFileSize(number) {
                  if (number < 1024) {
                    return `${number} bytes`;
                  } else if (number >= 1024 && number < 1048576) {
                    return `${(number / 1024).toFixed(1)} KB`;
                  } else if (number >= 1048576) {
                    return `${(number / 1048576).toFixed(1)} MB`;
                  }
                }
                percentageTag.textContent =`${percentage}%`;
                // bar.style.width = `${percentage}%`;
              const addProductForm = document.querySelector('.addProduct')
              const input = document.querySelector('#fileInputControl');
              const preview = document.querySelector('.preview');
              function updateImageDisplay() {
                while(preview.firstChild) {
                  preview.removeChild(preview.firstChild);
                }
              
                const curFiles = input.files;
                if (curFiles.length === 0) {
                  const para = document.createElement('p');
                  para.textContent = 'No files currently selected for upload';
                  preview.appendChild(para);
                } else {
                  const list = document.createElement('div');
                  list.style="display: grid;grid-template-columns: 1fr 1fr 1fr;gap: 50px;padding: 10px;";
                  list.id="imggrid";
                  preview.appendChild(list);
              
                  for (const file of curFiles) {
                    const listItem = document.createElement('div');
                    
                    const para = document.createElement('p');
                    
                    if (validFileType(file)) {
                      para.textContent = `${file.name}, file size ${returnFileSize(file.size)}.`;
                      const image = document.createElement('img');
                      image.src = URL.createObjectURL(file);
              
                      listItem.appendChild(image);
                      listItem.appendChild(para);
                    } else {
                      para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
                      listItem.appendChild(para);
                    }
              
                    list.appendChild(listItem);
                  }
                }
              }
              input.addEventListener('change', (eimg) => {
                eimg.preventDefault();updateImageDisplay();
              // console.log(document.getElementById('fileInputControl').files[0]) ;
              // imgvar =document.getElementById('fileInputControl').files[0];
              
              // document.getElementById('productImg').appendChild(imgprev);
              // const storref = ref(stor,`/images/${imgvar.name}`);

            //  console.log(getDownloadURL(storref));

            //  const uploadTask =  fileRef.put(e.target.files[0])
            //   storref.on('state_changed', 
            //     (snapshot) => {
                  
            //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //       if(progress=='100') alert('uploaded')
            //     }, 
            //     (error) => {
            //     console.log(error)
            //     }, 
                // () => {
                  
                 // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                   
                    // document.querySelector('#proimg').src = downloadURL
                    // firebase.auth().currentUser.updateProfile({
                    //   photoURL: downloadURL
                    // })
                  // });
                // }
              // );
              //
            }
              )
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
                                              .then((docRef)=>{
                                                inputid = docRef.id;
                                                returnDocid(inputid);})
                                              .then((docRef) => {if (curFiles.length !== 0) 
                  {
                                              // Points to the root reference
                                              // const storageRef = storage().ref();
                                              // Points to 'images'
                                              // const imagesStorageRef = storageRef.child('');
                                              // const storageRef = ref(storage, 'some-child');
                                              const imagesStorageRef = ref(stor, 'PRODUCT');
                                              // space ref where image will be stored
                                              
                  for (const file of curFiles) {
                    
                    if (validFileType(file)) {
                     // `${file.name}, file size ${returnFileSize(file.size)}.`;
                      // image.src = URL.createObjectURL(file);
                      // const spaceRef = imagesStorageRef.child(`${file.name}`);
                       
                      const spaceRef = ref(imagesStorageRef,`${inputid}/${file.name}`)
                      const uploadTask = uploadBytesResumable(spaceRef, file);
                                              uploadTask.on('state_changed',
                                                  (snapshot) => {
                                                      // Observe state change events such as progress, pause, and resume
                                                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                                      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                      console.log(`Upload is ${progress} % done ${file.name}\n`);
                                                      switch (snapshot.state) {
                                                        case 'paused':
                                                          console.log('Upload is paused');
                                                          break;
                                                        case 'running':
                                                          console.log('Upload is running');
                                                          break;
                                                      }
                                                      
                                                  },
                                                  (error) => {
                                                      // Handle unsuccessful uploads
                                                  },
                                                  () => {
                                                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                                      console.log('File available at', downloadURL);
                                                          //onUploadSuccess(downloadURL);
                                                      })
                                                  }
                                              );
                                              
                                                                   
                    } else {
                      //not valid img
                    }
                    
                  }
                }
                                                alert("Product added");
                                                
                                                // console.log(inputid);
                                                const preview = document.querySelector('.preview');
                                                preview.removeChild(preview.firstChild);;
                                                addProductForm.reset()
                                              })
                                              .catch((erdoc)=>{
                                                console.log(`${erdoc.message} error in fileInputControladdEventListener`)
                                              });
                                              const curFiles = input.files;
                
                                              
                                                           
                                                                                
                                            })
              }
export function fnAddproduct(){
  console.log(`exported script from addproduct ${consoleShow}`)

}
// export function fnimgfile(){
//   document.querySelector('#fileInputControl').addEventListener('change', (eimg) => {
//     eimg.preventDefault()
//   console.log(document.getElementById('fileInputControl')) ;
//   })
// }
