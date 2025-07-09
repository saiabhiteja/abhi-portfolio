"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 1255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4259);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);




const components = {
    mail: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiMail,
    github: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineGithub,
    facebook: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineFacebook,
    linkedin: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedinIn,
    twitter: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineTwitter,
    medium: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaMedium,
    website: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineGlobal,
    external: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiExternalLink
};
const SocialIcon = ({ kind , href , size =8  })=>{
    if (!href || kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)) return null;
    const SocialSvg = components[kind];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "text-sm text-gray-500 transition duration-200 hover:rotate-180 hover:text-gray-600",
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: kind
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialSvg, {
                className: `text-gray-700 hover:text-primary-color-500 dark:text-gray-200 dark:hover:text-primary-color-dark-500 h-${size} w-${size}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIcon);


/***/ })

};
;