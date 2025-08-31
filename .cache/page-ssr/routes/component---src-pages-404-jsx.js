"use strict";
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 2816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8154);
const SEO=({title,description})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .m,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,title?`${title} — Abhay Singh`:"Abhay Singh — Tech Lead Portfolio"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:description||"Portfolio of Abhay (Sunny) Singh — Senior Software Engineer → Tech Lead."}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ 3729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2816);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(123);
function NotFoundPage(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{title:"Page Not Found"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"max-w-2xl mx-auto px-6 pt-16 pb-24 text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-4xl font-bold mb-4"},"404 \u2014 Page Not Found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-gray-600 mb-8"},"Sorry, the page you are looking for does not exist or has been moved."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/",className:"bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition"},"Go Home")));}

/***/ }),

/***/ 4746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "/Users/abhaysingh/portfolio-gatsby/node_modules/react/index.js"
var index_js_ = __webpack_require__(4455);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/briefcase.js
var briefcase = __webpack_require__(2201);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/network.js
var network = __webpack_require__(5687);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/house.js
var house = __webpack_require__(1805);
;// ./src/components/Nav.jsx
const Nav=()=>/*#__PURE__*/index_js_default().createElement("nav",{className:"max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-5"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"font-bold text-lg"},"Abhay Singh"),/*#__PURE__*/index_js_default().createElement("div",{className:"flex items-center gap-5 text-sm"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/projects",className:"flex items-center gap-2 hover:text-brand"},/*#__PURE__*/index_js_default().createElement(briefcase/* default */.A,{size:16}),"Projects"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/leadership",className:"flex items-center gap-2 hover:text-brand"},/*#__PURE__*/index_js_default().createElement(network/* default */.A,{size:16}),"Leadership"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about",className:"flex items-center gap-2 hover:text-brand"},/*#__PURE__*/index_js_default().createElement(house/* default */.A,{size:16}),"Career"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/resume",className:"flex items-center gap-2 hover:text-brand"},"Resume")));/* harmony default export */ const components_Nav = (Nav);
;// ./src/components/Footer.jsx
const Footer=()=>/*#__PURE__*/index_js_default().createElement("footer",{className:"border-t mt-16 py-8 text-sm text-gray-500"},/*#__PURE__*/index_js_default().createElement("div",{className:"max-w-6xl mx-auto px-6 flex items-center justify-between"},/*#__PURE__*/index_js_default().createElement("p",null,"\xA9 ",new Date().getFullYear()," Abhay Singh. All rights reserved."),/*#__PURE__*/index_js_default().createElement("div",{className:"flex gap-4"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noreferrer",className:"hover:text-gray-700"},"LinkedIn"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"hover:text-gray-700"},"GitHub"))));/* harmony default export */ const components_Footer = (Footer);
;// ./src/components/Layout.jsx
const Layout=({children})=>/*#__PURE__*/index_js_default().createElement("div",{className:"min-h-screen flex flex-col"},/*#__PURE__*/index_js_default().createElement(components_Nav,null),/*#__PURE__*/index_js_default().createElement("main",{className:"flex-1"},children),/*#__PURE__*/index_js_default().createElement(components_Footer,null));/* harmony default export */ const components_Layout = (Layout);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-jsx.js.map