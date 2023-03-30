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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkfn": () => (/* binding */ linkfn)
/* harmony export */ });
function linkfn(){
//   <meta content="FarmSolutions" name="description">
    const  metadesc = document.createElement('meta');
    metadesc.name="description";
    metadesc.content = "FarmSolutions";
    document.getElementsByTagName('head')[0].appendChild(metadesc);

//   <meta content="FarmSolutions" name="keywords">
    const  metakeywd = document.createElement('meta');
    metakeywd.name="keywords";
    metakeywd.content = "FarmSolutions";
    document.getElementsByTagName('head')[1].appendChild(metakeywd);
//   <!-- Favicons -->
//   <link href="./assets/img/favicon.png" rel="icon">
    const  link = document.createElement('link');
    link.rel = "icon";
    link.href = "https://farmsolutions-f9ab9.web.app/resources/images/logosq.svg";
    document.getElementsByTagName('head')[2].appendChild(link);
//   <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>
    const  link2 = document.createElement('link');
    link2.rel = "apple-touch-icon";
    link2.href = "https://farmsolutions-f9ab9.web.app/resources/images/logosq.svg";
    document.getElementsByTagName('head')[3].appendChild(link2);
}
linkfn();
/******/ })()
;
//# sourceMappingURL=home.js.map