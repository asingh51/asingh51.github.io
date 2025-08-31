"use strict";
exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 1311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ featured)
/* harmony export */ });
const featured=[{title:"Vaccine Admin Management System Re‑host (CDC)",role:"Senior Full‑Stack Engineer / Team Lead",timeframe:"2024–2025",bullets:["Re‑platformed to AWS; improved scalability & resiliency across microservices.","Cut infra spend by multi‑million with right‑sizing, autoscaling, and S3 lifecycle policies.","Led 6 devs; introduced code review rubric and pairing rotations to raise quality.","Architected service boundaries and SLAs; documented ADRs to ensure alignment.","Instituted observability by default (structured logs, metrics, tracing) across services.","Achieved 99.9% uptime and reduced MTTR by 45% through resiliency patterns."]},{title:"HL7 Rules Engine & eICR GenAI pipeline",role:"Lead Engineer",timeframe:"2024",bullets:["Designed rules engine for OBX regrouping; reduced processing time by 40%.","Prototyped Bedrock‑powered extraction achieving 92% F1 on pilot dataset.","Coordinated with epidemiology SMEs to validate data quality KPIs.","Developed auditable rules DSL with lineage for OBX regrouping.","Benchmarked heuristics vs LLM pipeline and set guardrails for productionization.","Engaged with cross‑functional SMEs to align data models with epidemiology needs."]},{title:"JobMinglr — Swipe‑to‑match hiring platform",role:"Founder / Tech Lead",timeframe:"2023–present",bullets:["Built React/Gatsby front‑end, Node/Express API, and AWS infra (S3, Lambda, CFN).","Designed resume‑matching heuristics (skills, salary, location) and ATS integration.","Drove 20% faster screening for pilot recruiters; 15% better candidate fit.","Integrated with ATS platforms like Pinpoint and Greenhouse to sync candidates.","Implemented pilot metrics: conversion, fit score lift, time‑to‑screen improvements.","Led product/engineering roadmap; balanced feature delivery with cost constraints.","Explored GenAI‑powered resume parsing and ranking to improve candidate matching."]},{title:"Enterprise Web Applications (Capgemini)",role:"Software Engineer",timeframe:"2014–2016",bullets:["Worked on large-scale enterprise applications for global clients.","Developed REST APIs and UI components using Java/Spring and JavaScript frameworks.","Collaborated with cross-functional teams to deliver enhancements on time.","Contributed to code reviews and unit testing to improve code quality."]},{title:"Payment Processing Systems (Hitachi Payment Services)",role:"Software Engineer",timeframe:"2016–2018",bullets:["Enhanced secure payment processing platforms handling millions of daily transactions.","Developed and maintained microservices for transaction authorization and settlement.","Integrated PCI-DSS compliant features into the payment platform.","Improved system reliability and uptime through monitoring and incident response."]},{title:"Procurement & Supply Chain Platforms (John Deere)",role:"Senior Software Engineer",timeframe:"2018–2021",bullets:["Built procurement automation solutions saving ~$1.5M in vendor negotiations.","Designed microservices with Spring Boot and Hibernate for procurement workflows.","Optimized CI/CD pipelines and introduced containerization (Docker, Kubernetes).","Collaborated with product managers and business stakeholders to align delivery with ROI goals."]},{title:"Graduate Research & Projects (University of Texas at Arlington)",role:"Graduate Student / Research Assistant",timeframe:"2012–2014",bullets:["Completed Master’s in Computer Science specializing in Web, Mobile, and AI.","Built mobile and web applications as part of academic and research projects.","Researched AI/ML techniques and applied them in experimental prototypes.","Collaborated with faculty and peers on publications and project presentations."]}];

/***/ }),

/***/ 1687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const ImpactCard=({title,role,timeframe,bullets})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"rounded-2xl border p-6 shadow-sm hover:shadow-md transition"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex items-baseline justify-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"text-lg font-semibold"},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"text-xs text-gray-500"},timeframe)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-sm mt-1 text-gray-600"},"Role: ",role),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:"list-disc pl-5 mt-3 space-y-1 text-sm"},bullets.map((b,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{key:i},b))));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImpactCard);

/***/ }),

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

/***/ }),

/***/ 7811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4455);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2816);
/* harmony import */ var _components_ImpactCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1687);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1311);
function Projects(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{title:"Projects"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"max-w-6xl mx-auto px-6 pt-16 pb-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-3xl font-bold"},"Projects & Case Studies"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-gray-600 mt-2"},"Problem \u2192 Role \u2192 Architecture \u2192 Business Impact."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mt-8 grid md:grid-cols-2 gap-6"},_data_projects__WEBPACK_IMPORTED_MODULE_4__/* .featured */ .j.map((p,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ImpactCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,Object.assign({key:i},p))))));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-jsx.js.map