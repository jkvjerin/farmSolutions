/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/webPage/headTag.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkfn": () => (/* binding */ linkfn)
/* harmony export */ });
function linkfn(){
//   <meta content="FarmSolutions" name="description">
    const  metadesc = document.createElement('meta');
    metadesc.name="description";
    metadesc.content = "FarmSolutions";
    document.querySelector('head').appendChild(metadesc);

//   <meta content="FarmSolutions" name="keywords">
    const  metakeywd = document.createElement('meta');
    metakeywd.name="keywords";
    metakeywd.content = "FarmSolutions";
    document.querySelector('head').appendChild(metakeywd);
//   <!-- Favicons -->
//   <link href="./assets/img/favicon.png" rel="icon">
    const  link = document.createElement('link');
    link.rel = "icon";
    link.href = "https://farmsolutions-f9ab9.web.app/resources/images/logosq.svg";
    document.querySelector('head').appendChild(link);
//   <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>
    const  link2 = document.createElement('link');
    link2.rel = "apple-touch-icon";
    link2.href = "https://farmsolutions-f9ab9.web.app/resources/images/logosq.svg";
    document.querySelector('head').appendChild(link2);
// recaptcha
//  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
//gTranslate
//<script src="http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate" async></script>
   // <script >
//         function loadGoogleTranslate(){
//            new google.translate.TranslateElement("google_element");
//         }
//     </script>
// <style>
//   .VIpgJd-ZVi9od-ORHb-OEVmcd{
//     display:none;
    
//   }
//   .goog-te-gadget {
//     font-family: arial;
//     font-size: 25px;
//     color: #ff0000;
//     white-space: nowrap;
// }
// .goog-te-combo{
//   padding: 8px 40px;
//   font-weight: 650;
//   font-size: 14px;
//   line-height: 20px;
//   cursor: pointer;
//   border: 2px solid white;
//   border-radius: 10px;
//   width: 280px;
// }
// .goog-te-combo:hover{
//     color: black;
//     background-color: rgb(255, 255, 255);}   
//</style>
 let google_element =document.getElementById("gele")


  const scriptTag = document.createElement("script");
  scriptTag.src ="http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
  scriptTag.async = true;
  const scriptTag2 = document.createElement("script");
  scriptTag2.innerHTML=`
  function loadGoogleTranslate(){
               new google.translate.TranslateElement(google_element);
     }`;
  google_element.appendChild(scriptTag);
  google_element.appendChild(scriptTag2);

 
  style
  document.querySelector('.VIpgJd-ZVi9od-ORHb-OEVmcd').style.display= 'none';
  document.querySelector('.goog-te-gadget').style.fontFamily="arial" ;
  document.querySelector('.goog-te-gadget').style.fontSize = "25px" ;
  document.querySelector('.goog-te-gadget').style.color= "#ff0000" ;
  document.querySelector('.goog-te-gadget').style.whiteSpace= "nowrap" ;
  document.querySelector('.goog-te-gadget').style.padding= "8px 40px" ;
  document.querySelector('.goog-te-gadget').style.fontWeight= 650 ;
  document.querySelector('.goog-te-gadget').style.fontSize="14px" ;
  document.querySelector('.goog-te-gadget').style.lineHeight= "20px" ;
  document.querySelector('.goog-te-gadget').style.cursor= "pointer" ;
  document.querySelector('.goog-te-gadget').style.border= "2px solid white" ;
  document.querySelector('.goog-te-gadget').style.borderRadius= "10px" ;
  document.querySelector('.goog-te-gadget').style.width= "280px" ;
  document.querySelector('.goog-te-combo:hover').style.color="black" ;
  document.querySelector('.goog-te-combo:hover').style.backgroundColor= "rgb(255, 255, 255)" ;
}
linkfn();

// bluebd =document.getElementsByTagName('body');
// bluebd.style = "body-background:blue"

// function test()
// {
//     var element = document.createElement("div");
//     element.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
//     document.getElementbyId('lc').appendChild(element);
//     //docu1ment.body.appendChild(element);
// }
// myAnchor.setAttribute("href", "https://www.w3schools.com");
/******/ })()
;
//# sourceMappingURL=headtag.js.map