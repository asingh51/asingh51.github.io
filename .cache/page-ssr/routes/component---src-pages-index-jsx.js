"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 2816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8154);
const SEOComponent=({title,description})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .m,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,title?`${title} — Abhay Singh`:"Abhay Singh — Tech Lead Portfolio"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:description||"Portfolio of Abhay (Sunny) Singh — Senior Software Engineer → Tech Lead."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"theme-color",content:"#ffffff"}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEOComponent);

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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(8697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.js
var menu = __webpack_require__(9230);
;// ./src/components/Nav.jsx
const Nav=()=>{const{0:open,1:setOpen}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement("nav",{className:"max-w-6xl mx-auto px-4 sm:px-6 py-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex items-center justify-between gap-5"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"font-bold text-lg"},"Abhay Singh"),/*#__PURE__*/index_js_default().createElement("div",{className:"hidden md:flex items-center gap-6 text-sm"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/projects",className:"flex items-center gap-2 hover:text-brand"},/*#__PURE__*/index_js_default().createElement(briefcase/* default */.A,{size:16}),"Projects"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/leadership",className:"flex items-center gap-2 hover:text-brand"},/*#__PURE__*/index_js_default().createElement(network/* default */.A,{size:16}),"Leadership"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about",className:"flex items-center gap-2 hover:text-brand"},/*#__PURE__*/index_js_default().createElement(house/* default */.A,{size:16}),"Career"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/resume",className:"hover:text-brand text-sm"},"Resume")),/*#__PURE__*/index_js_default().createElement("button",{className:"md:hidden p-2 rounded-lg border",onClick:()=>setOpen(!open),"aria-label":"Toggle menu"},open?/*#__PURE__*/index_js_default().createElement(x/* default */.A,{size:18}):/*#__PURE__*/index_js_default().createElement(menu/* default */.A,{size:18}))),open&&/*#__PURE__*/index_js_default().createElement("div",{className:"md:hidden mt-3 rounded-2xl border p-4 space-y-3 text-sm bg-white"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/projects",className:"block",onClick:()=>setOpen(false)},"Projects"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/leadership",className:"block",onClick:()=>setOpen(false)},"Leadership"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about",className:"block",onClick:()=>setOpen(false)},"Career"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/resume",className:"block",onClick:()=>setOpen(false)},"Resume")));};/* harmony default export */ const components_Nav = (Nav);
;// ./src/components/Footer.jsx
const Footer=()=>/*#__PURE__*/index_js_default().createElement("footer",{className:"border-t mt-16 py-8 text-sm text-gray-500"},/*#__PURE__*/index_js_default().createElement("div",{className:"max-w-6xl mx-auto px-6 flex items-center justify-between"},/*#__PURE__*/index_js_default().createElement("p",null,"\xA9 ",new Date().getFullYear()," Abhay Singh. All rights reserved."),/*#__PURE__*/index_js_default().createElement("div",{className:"flex gap-4"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.linkedin.com/in/abbi/",target:"_blank",rel:"noreferrer",className:"hover:text-gray-700"},"LinkedIn"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/asingh51",target:"_blank",rel:"noreferrer",className:"hover:text-gray-700"},"GitHub"))));/* harmony default export */ const components_Footer = (Footer);
;// ./src/components/Layout.jsx
const Layout=({children})=>/*#__PURE__*/index_js_default().createElement("div",{className:"min-h-screen flex flex-col"},/*#__PURE__*/index_js_default().createElement(components_Nav,null),/*#__PURE__*/index_js_default().createElement("main",{className:"flex-1"},children),/*#__PURE__*/index_js_default().createElement(components_Footer,null));/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 7325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2816);
function About(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{title:"About"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"max-w-3xl mx-auto px-6 pt-16 pb-16 prose lg:prose-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex justify-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:"/images/profile.png",alt:"Abhay Singh",className:"w-32 h-32 rounded-full mx-auto mb-6"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"I\u2019m helping to build ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://jobminglr.com",target:"_blank",rel:"noopener noreferrer"},"JobMinglr")," as CTO \u2014 a swipe-to-match hiring platform."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"-"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Currently, I lead tech teams at"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://www2.deloitte.com",target:"_blank",rel:"noopener noreferrer"},"Deloitte"),". My career journey spans"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://www.capgemini.com",target:"_blank",rel:"noopener noreferrer"},"Capgemini"),", ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://www.hitachi-payments.com",target:"_blank",rel:"noopener noreferrer"},"Hitachi Payment Services"),", ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://www.deere.com",target:"_blank",rel:"noopener noreferrer"},"John Deere"),", and Deloitte\u2014where I\u2019ve engineered large-scale systems, taken end-to-end ownership from architecture to delivery, and grown teams through a \u2018structure over control\u2019 leadership style."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"-"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Interested in collaborating or learning more? Feel free to ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"mailto:abhaysingh200009@gmail.com",className:"text-blue-600 underline"},"reach out via email"),".")));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map