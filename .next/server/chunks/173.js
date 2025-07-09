"use strict";
exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 1173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSTS_PER_PAGE": () => (/* binding */ POSTS_PER_PAGE),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Snippets)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_SnippetsLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8622);
/* harmony import */ var _components_layout_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(532);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_1__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const POSTS_PER_PAGE = 5;
async function getStaticProps() {
    const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__/* .getAllFilesFrontMatter */ .sj)("snippets");
    const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
    };
    return {
        props: {
            initialDisplayPosts,
            posts,
            pagination
        }
    };
}
function Snippets({ posts , initialDisplayPosts , pagination  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_SEO__WEBPACK_IMPORTED_MODULE_4__/* .PageSEO */ .TQ, {
                title: `Snippets - ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().author)}`,
                description: "Reuseable code snippets collected by Saiabhiteja"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_SnippetsLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
                posts: posts,
                initialDisplayPosts: initialDisplayPosts,
                pagination: pagination,
                title: "All Snippets"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;