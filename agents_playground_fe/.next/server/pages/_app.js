/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/cloud/useCloud.tsx":
/*!********************************!*\
  !*** ./src/cloud/useCloud.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CloudProvider: () => (/* binding */ CloudProvider),\n/* harmony export */   useCloud: () => (/* binding */ useCloud)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction CloudProvider({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n}\nfunction useCloud() {\n    const generateToken = async ()=>{\n        throw new Error(\"Not implemented\");\n    };\n    const wsUrl = \"\";\n    return {\n        generateToken,\n        wsUrl\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xvdWQvdXNlQ2xvdWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sU0FBU0EsY0FBYyxFQUFFQyxRQUFRLEVBQWlDO0lBQ3ZFLHFCQUFPO2tCQUFHQTs7QUFDWjtBQUVPLFNBQVNDO0lBQ2QsTUFBTUMsZ0JBQXVDO1FBQzNDLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE1BQU1DLFFBQVE7SUFFZCxPQUFPO1FBQUVGO1FBQWVFO0lBQU07QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2VudHMtcGxheWdyb3VuZC8uL3NyYy9jbG91ZC91c2VDbG91ZC50c3g/MzNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gQ2xvdWRQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbG91ZCgpIHtcbiAgY29uc3QgZ2VuZXJhdGVUb2tlbjogKCkgPT4gUHJvbWlzZTxzdHJpbmc+ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgfTtcbiAgY29uc3Qgd3NVcmwgPSBcIlwiO1xuXG4gIHJldHVybiB7IGdlbmVyYXRlVG9rZW4sIHdzVXJsIH07XG59XG4iXSwibmFtZXMiOlsiQ2xvdWRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlQ2xvdWQiLCJnZW5lcmF0ZVRva2VuIiwiRXJyb3IiLCJ3c1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/cloud/useCloud.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cloud_useCloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/cloud/useCloud */ \"./src/cloud/useCloud.tsx\");\n/* harmony import */ var _livekit_components_styles_components_participant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @livekit/components-styles/components/participant */ \"./node_modules/@livekit/components-styles/dist/general/components/participant/index.css\");\n/* harmony import */ var _livekit_components_styles_components_participant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_livekit_components_styles_components_participant__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cloud_useCloud__WEBPACK_IMPORTED_MODULE_1__.CloudProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/user/Desktop/Projects/livekit/agents_playground_fe/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/user/Desktop/Projects/livekit/agents_playground_fe/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1U7QUFDN0I7QUFHZixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCwwREFBYUE7a0JBQ1osNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2VudHMtcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsb3VkUHJvdmlkZXIgfSBmcm9tIFwiQC9jbG91ZC91c2VDbG91ZFwiO1xuaW1wb3J0IFwiQGxpdmVraXQvY29tcG9uZW50cy1zdHlsZXMvY29tcG9uZW50cy9wYXJ0aWNpcGFudFwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2xvdWRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Nsb3VkUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2xvdWRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@livekit"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();