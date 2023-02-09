/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/project-three.js":
/*!*********************************!*\
  !*** ./src/js/project-three.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_gifs_port_three_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/gifs/port-three.gif */ \"./src/images/gifs/port-three.gif\");\n/* harmony import */ var _images_Icons_linkedin_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Icons/linkedin-logo.png */ \"./src/images/Icons/linkedin-logo.png\");\n/* harmony import */ var _images_Icons_Github_Logos_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Icons/Github-Logos/GitHub-Mark-Light-120px-plus.png */ \"./src/images/Icons/Github-Logos/GitHub-Mark-Light-120px-plus.png\");\n\n\n\ndocument.getElementById(\"linkedin\").src = _images_Icons_linkedin_logo_png__WEBPACK_IMPORTED_MODULE_1__;\ndocument.getElementById(\"github\").src = _images_Icons_Github_Logos_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_2__;\n\n// reveal animation from bottom up\n\nif (window.location.pathname === '/project-three') {\n  document.getElementById(\"portThree\").src = _images_gifs_port_three_gif__WEBPACK_IMPORTED_MODULE_0__;\n}\nfunction reveal() {\n  if (window.location.pathname === '/project-three') {\n    var reveals = document.querySelectorAll(\".reveal\");\n    for (var i = 0; i < reveals.length; i++) {\n      var windowHeight = window.innerHeight;\n      var elementTop = reveals[i].getBoundingClientRect().top;\n      var elementVisible = 150;\n      if (elementTop < windowHeight - elementVisible) {\n        reveals[i].classList.add(\"active\");\n      } else {\n        reveals[i].classList.remove(\"active\");\n      }\n    }\n  }\n}\nwindow.addEventListener(\"scroll\", reveal);\n\n// reveal animation from left tp right\n\n$(document).ready(function () {\n  if (window.location.pathname === '/project-three') {\n    //check to see if any animation containers are currently in view\n    var check_if_in_view = function check_if_in_view() {\n      //get current window information\n      var window_height = web_window.height();\n      var window_top_position = web_window.scrollTop();\n      var window_bottom_position = window_top_position + window_height;\n\n      //iterate through elements to see if its in view\n      $.each(animation_elements, function () {\n        //get the element sinformation\n        var element = $(this);\n        var element_height = $(element).outerHeight();\n        var element_top_position = $(element).offset().top;\n        var element_bottom_position = element_top_position + element_height;\n\n        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)\n        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {\n          element.addClass('in-view');\n        } else {\n          element.removeClass('in-view');\n        }\n      });\n    }; //on or scroll, detect elements in view\n    //window and animation items\n    var animation_elements = $.find('.animation-element');\n    var web_window = $(window);\n    $(window).on('scroll resize', function () {\n      check_if_in_view();\n    });\n    //trigger our scroll event on initial load\n    $(window).trigger('scroll');\n  }\n});\nfunction revealSequence() {\n  var revealMe = document.getElementById(\"fadeIn\");\n  revealMe.style.opacity = \"1\";\n  revealMe.style.transition = \"1.3s\";\n}\nsetTimeout(revealSequence, 1000);\n\n//# sourceURL=webpack://17-ins_caching-images-client/./src/js/project-three.js?");

/***/ }),

/***/ "./src/images/Icons/Github-Logos/GitHub-Mark-Light-120px-plus.png":
/*!************************************************************************!*\
  !*** ./src/images/Icons/Github-Logos/GitHub-Mark-Light-120px-plus.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5de0643bf1bbf77878ff.png\";\n\n//# sourceURL=webpack://17-ins_caching-images-client/./src/images/Icons/Github-Logos/GitHub-Mark-Light-120px-plus.png?");

/***/ }),

/***/ "./src/images/Icons/linkedin-logo.png":
/*!********************************************!*\
  !*** ./src/images/Icons/linkedin-logo.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"15c75f236ac4e3f74352.png\";\n\n//# sourceURL=webpack://17-ins_caching-images-client/./src/images/Icons/linkedin-logo.png?");

/***/ }),

/***/ "./src/images/gifs/port-three.gif":
/*!****************************************!*\
  !*** ./src/images/gifs/port-three.gif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef6b6ef26da71ed32447.gif\";\n\n//# sourceURL=webpack://17-ins_caching-images-client/./src/images/gifs/port-three.gif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/project-three.js");
/******/ 	
/******/ })()
;