"use strict";
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 1820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResumePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6462);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4746);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2816);
const PROFILE_MAP={OpenSesame:{key:"tech-lead",title:"Tech Lead Resume",file:"/resumes/tech-lead.pdf"},PrimeTPM:{key:"tpm",title:"TPM Resume",file:"/resumes/tpm.pdf"},FSX2025:{key:"fullstack",title:"Full-Stack Resume",file:"/resumes/fullstack.pdf"}};function ResumeGate(){const{0:pwd,1:setPwd}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const onSubmit=e=>{e.preventDefault();const profile=PROFILE_MAP[pwd.trim()];if(!profile){setError("Invalid password.");return;}(0,_reach_router__WEBPACK_IMPORTED_MODULE_1__.navigate)(`/resume/${profile.key}`);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{title:"Resume"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"max-w-md mx-auto px-6 pt-16 pb-24"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-3xl font-bold"},"Resume Access"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"mt-3 text-gray-600 text-sm"},"Enter the password you were given to view the right resume."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",{onSubmit:onSubmit,className:"mt-6 space-y-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"password",placeholder:"Password",value:pwd,onChange:e=>setPwd(e.target.value),className:"w-full rounded-xl border px-4 py-3"}),error&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-red-600 text-sm"},error),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{type:"submit",className:"bg-brand text-white px-5 py-3 rounded-xl font-semibold hover:bg-brand-dark transition"},"Unlock"))));}function ResumeProfile({profileKey}){const profiles=Object.values(PROFILE_MAP).reduce((acc,p)=>{acc[p.key]=p;return acc;},{});const p=profiles[profileKey];if(!p){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{title:"Resume Not Found"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"max-w-md mx-auto px-6 pt-16 pb-24"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-2xl font-semibold"},"Not found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"mt-2 text-gray-600"},"This resume link is invalid. Try again from the password page.")));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{title:p.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"max-w-3xl mx-auto px-6 pt-12 pb-24"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex items-center justify-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-2xl font-bold"},p.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:p.file,className:"text-sm underline underline-offset-4",target:"_blank",rel:"noreferrer"},"Download PDF")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mt-6 rounded-xl border overflow-hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe",{title:p.title,src:p.file,className:"w-full",style:{height:"80vh"}}))));}function ResumePage(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__.Router,{basepath:"/resume"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResumeGate,{path:"/"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResumeProfile,{path:"/:profileKey"})));}

/***/ }),

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-resume-jsx.js.map