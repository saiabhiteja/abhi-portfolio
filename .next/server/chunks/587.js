exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ActivityLayout": 6083,
	"./ActivityLayout.js": 6083,
	"./AuthorLayout": 5114,
	"./AuthorLayout.js": 5114,
	"./ListLayout": 4966,
	"./ListLayout.js": 4966,
	"./PostLayout": 5067,
	"./PostLayout.js": 5067,
	"./PostSimple": 3168,
	"./PostSimple.js": 3168,
	"./SnippetsLayout": 8622,
	"./SnippetsLayout.js": 8622
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 4318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    });
};


/***/ }),

/***/ 7930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionContainer({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",
        children: children
    });
};


/***/ }),

/***/ 6587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "mdx-bundler/client"
var client_ = __webpack_require__(1228);
// EXTERNAL MODULE: ./components/common/Link.js
var Link = __webpack_require__(8719);
;// CONCATENATED MODULE: ./components/blog/TOCInline.js

/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */ /**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */ const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude ="" ,  })=>{
    const re = Array.isArray(exclude) ? new RegExp("^(" + exclude.join("|") + ")$", "i") : new RegExp("^(" + exclude + ")$", "i");
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
    );
    const tocList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${heading.depth >= indentDepth && "ml-6"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value)
        )
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                    className: "ml-6 pb-2 pt-2 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    });
};
/* harmony default export */ const blog_TOCInline = (TOCInline);

;// CONCATENATED MODULE: ./components/snippets/Pre.js


const Pre = (props)=>{
    const textInput = (0,external_react_.useRef)(null);
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${copied ? "border-green-400 focus:border-green-400 focus:outline-none" : "border-gray-300"}`,
                onClick: onCopy,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? "text-green-400" : "text-gray-300",
                    children: copied ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: props.children
            })
        ]
    });
};
/* harmony default export */ const snippets_Pre = (Pre);

;// CONCATENATED MODULE: ./components/snippets/CodeBlock.js


const CodeBlock = ({ title , description , languages , mediumLink  })=>{
    const { 0: selectedLanguage , 1: setSelectedLanguage  } = (0,external_react_.useState)(Object.keys(languages)[0]);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const copyToClipboard = async ()=>{
        try {
            await navigator.clipboard.writeText(languages[selectedLanguage]);
            setCopied(true);
            setTimeout(()=>setCopied(false)
            , 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900 dark:text-gray-100",
                            children: title
                        })
                    }),
                    description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex border-b border-gray-200 dark:border-gray-700",
                children: Object.keys(languages).map((lang)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setSelectedLanguage(lang)
                        ,
                        className: `px-4 py-2 text-sm font-medium transition-colors ${selectedLanguage === lang ? "border-b-2 border-blue-600 bg-white text-blue-600 dark:border-blue-400 dark:bg-gray-900 dark:text-blue-400" : "bg-gray-50 text-gray-600 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-100"}`,
                        children: lang
                    }, lang)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative bg-white dark:bg-gray-900",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute right-2 top-2 z-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: copyToClipboard,
                            className: `rounded-md px-3 py-1 text-xs font-medium transition-all duration-200 ${copied ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"}`,
                            children: copied ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "h-3 w-3",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Copied!"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "h-3 w-3",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Copy"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-4 pt-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                className: `language-${selectedLanguage.toLowerCase()}`,
                                children: languages[selectedLanguage]
                            })
                        })
                    })
                ]
            }),
            mediumLink && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50 dark:border-gray-700 dark:from-orange-900/20 dark:to-yellow-900/20",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-4 py-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: mediumLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group flex items-center justify-between rounded-lg border border-orange-200 bg-white p-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md dark:border-orange-700 dark:bg-gray-800",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-full bg-orange-500",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "h-4 w-4 text-white",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-sm font-medium text-gray-900 dark:text-gray-100",
                                                children: "Read the full article"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Detailed explanation on Medium"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-1 text-orange-600 group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-sm font-medium",
                                        children: "Read"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "h-4 w-4 transform transition-transform group-hover:translate-x-1",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const snippets_CodeBlock = (CodeBlock);

;// CONCATENATED MODULE: ./components/snippets/MDXComponents.js

/* eslint-disable react/display-name */ 





const MDXComponents = {
    TOCInline: blog_TOCInline,
    a: Link/* default */.Z,
    pre: snippets_Pre,
    CodeBlock: snippets_CodeBlock,
    wrapper: ({ components , layout , ...rest })=>{
        const Layout = __webpack_require__(9618)(`./${layout}`).default;
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            ...rest
        });
    }
};
const MDXLayoutRenderer = ({ layout , mdxSource , ...rest })=>{
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_.getMDXComponent)(mdxSource)
    , [
        mdxSource
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
        layout: layout,
        components: MDXComponents,
        ...rest
    });
};


/***/ }),

/***/ 6083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivityLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(532);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);



function ActivityLayout({ children , frontMatter  }) {
    const { name  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_SEO__WEBPACK_IMPORTED_MODULE_1__/* .PageSEO */ .TQ, {
                title: `Activity - ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().author)}`,
                description: "My activities"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-2xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-2 pb-8 pt-6 md:space-y-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
                                children: "Activity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-md leading-7 text-gray-500 dark:text-gray-400",
                                children: "List my activity."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "prose prose-lg max-w-none pb-8 dark:prose-dark xl:col-span-3",
                            children: children
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 5114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuthorLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/SEO.js
var SEO = __webpack_require__(532);
// EXTERNAL MODULE: ./components/common/Link.js
var Link = __webpack_require__(8719);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/blog/Timeline.js



const Timeline = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-8 flex items-center space-x-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCalendarAlt, {
                            className: "h-6 w-6 text-blue-600 dark:text-blue-400"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-bold text-gray-900 dark:text-gray-100",
                                children: "My Journey"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: "My professional timeline"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-8 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "space-y-8",
                        children: data.map((item, index1)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute left-8 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-500 shadow-lg dark:border-gray-800"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-16 rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mb-4 flex flex-wrap items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCalendarAlt, {
                                                                className: "mr-2 h-3 w-3"
                                                            }),
                                                            item.range
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMapMarkerAlt, {
                                                                className: "mr-2 h-3 w-3"
                                                            }),
                                                            item.location
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "mb-2 text-xl font-bold text-gray-900 dark:text-gray-100",
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-lg font-medium",
                                                    children: item.url ? /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                        href: item.url,
                                                        className: "special-underline text-primary-color-500 no-underline hover:text-gray-100 dark:text-primary-color-500 hover:dark:text-gray-100",
                                                        children: item.company
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "special-underline text-primary-color-500 no-underline hover:text-gray-100 dark:text-primary-color-500 hover:dark:text-gray-100",
                                                        children: item.company
                                                    })
                                                })
                                            }),
                                            item.description && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "leading-relaxed text-gray-600 dark:text-gray-400",
                                                    children: item.description
                                                })
                                            }),
                                            item.achievements && item.achievements.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "text-sm font-semibold text-gray-900 dark:text-gray-100",
                                                        children: "Key Achievements:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "space-y-1 text-sm text-gray-600 dark:text-gray-400",
                                                        children: item.achievements.map((achievement, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "flex items-start space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "leading-relaxed",
                                                                        children: achievement
                                                                    })
                                                                ]
                                                            }, index)
                                                        )
                                                    })
                                                ]
                                            }),
                                            item.url && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                    href: item.url,
                                                    className: "inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
                                                    children: [
                                                        "Visit ",
                                                        item.company,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "ml-1 h-4 w-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, index1)
                        )
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blog_Timeline = (Timeline);

// EXTERNAL MODULE: ./data/experienceData.js
var experienceData = __webpack_require__(5738);
// EXTERNAL MODULE: external "react-rough-notation"
var external_react_rough_notation_ = __webpack_require__(9499);
;// CONCATENATED MODULE: ./layouts/AuthorLayout.js







function AuthorLayout({ children , frontMatter  }) {
    const { name , avatar , occupation , company , email , twitter , linkedin , github , text1 , text2 , text3 ,  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* PageSEO */.TQ, {
                title: `About - ${name}`,
                description: `A little trivia me`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "space-y-2 pb-8 pt-6 md:space-y-5 md:pl-16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: avatar,
                                        alt: "avatar",
                                        width: "192",
                                        height: "192",
                                        className: "h-48 w-48 rounded-full xl:rounded-full"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight",
                                        children: name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: occupation
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: company
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col pt-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white hover:shadow dark:text-white",
                                            href: "https://www.linkedin.com/in/saiabhitejachepuri/",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {
                                                    className: "mb-0.5 mr-2 inline h-5 w-5"
                                                }),
                                                "Say Hi!"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_rough_notation_.RoughNotation, {
                                            type: "bracket",
                                            brackets: [
                                                "left",
                                                "right"
                                            ],
                                            show: true,
                                            color: "#FF0000",
                                            animationDelay: 300,
                                            animationDuration: 3000,
                                            children: [
                                                text1,
                                                " Currently, I am focused on building scalable software solutions at",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                    href: "https://www.cloudera.com/",
                                                    className: "special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100",
                                                    children: "Cloudera"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "This is what I am doing right",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                href: "/current-work",
                                                className: "special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100",
                                                children: "now"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "sm:block md:hidden lg:hidden",
                                        children: [
                                            text2,
                                            " I enjoy solving complex engineering challenges and sharing knowledge through technical writing. I am always looking to learn new things and currently working on scalable software solutions and distributed systems. I am passionate about exploring new technologies and contributing to the developer community."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "hidden md:block",
                                        children: [
                                            text2,
                                            " I enjoy solving complex engineering challenges and sharing knowledge through technical writing. I am always looking to learn new things and currently working on scalable software solutions and distributed systems. I am passionate about exploring new technologies and contributing to the developer community."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            text3,
                                            " I am a strong advocate for open source and I am always interested in working on new projects with new people. Feel free to reach out if you have anything to talk about, you can reach me through",
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                href: "mailto:saiabhitejachepuri@gmail.com",
                                                className: "special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100",
                                                children: [
                                                    "Mail",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        className: "ml-0.5 inline-block h-4 w-4 fill-current",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                            "data-name": "Layer 2",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                "data-name": "external-link",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        opacity: "0"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            " ",
                                            "or",
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                href: "https://www.linkedin.com/in/saiabhitejachepuri/",
                                                className: "special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100",
                                                children: [
                                                    "LinkedIn",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        className: "ml-0.5 inline-block h-4 w-4 fill-current",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                            "data-name": "Layer 2",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                "data-name": "external-link",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        opacity: "0"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-10 md:pl-16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blog_Timeline, {
                            data: experienceData/* default */.Z
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-16 border-t border-gray-200 pt-8 dark:border-gray-700 md:pl-16",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "prose max-w-none dark:prose-dark",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "About this site"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Welcome to my home on the internet. This site functions as a blog/portfolio, a place to share code and thoughts. Opinions are my own."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "I learnt how to build this site from the most awesome people in the community:",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                            href: "https://github.com/timlrx/tailwind-nextjs-starter-blog",
                                                            className: "special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100",
                                                            children: [
                                                                "Timothy's Next.js and Tailwind CSS template",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "ml-0.5 inline-block h-4 w-4 fill-current",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                        "data-name": "Layer 2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                            "data-name": "external-link",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                    width: "24",
                                                                                    height: "24",
                                                                                    opacity: "0"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    d: "M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    d: "M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        ": Template starter where I bootstrapped the project."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                            href: "https://www.einargudni.com/",
                                                            className: "special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100",
                                                            children: [
                                                                "Einar Gu\xf0j\xf3nsson",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "ml-0.5 inline-block h-4 w-4 fill-current",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                        "data-name": "Layer 2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                            "data-name": "external-link",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                    width: "24",
                                                                                    height: "24",
                                                                                    opacity: "0"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    d: "M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    d: "M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        ": Now page, navigation style, animations and much more."
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8719);
/* harmony import */ var _components_blog_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_blog_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1501);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6232);






function ListLayout({ posts , title: title1 , initialDisplayPosts =[] , pagination  }) {
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const filteredBlogPosts = posts.filter((frontMatter)=>{
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-6xl divide-y divide-gray-400",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-2 pb-8 pt-6 md:space-y-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                                children: title1
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative max-w-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        "aria-label": "Search articles",
                                        type: "text",
                                        onChange: (e)=>setSearchValue(e.target.value)
                                        ,
                                        placeholder: "Search articles",
                                        className: "block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            !filteredBlogPosts.length && "No posts found.",
                            displayPosts.map((frontMatter)=>{
                                const { slug , date , title , summary , tags  } = frontMatter;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    href: `/blog/${slug}`,
                                    className: "group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "py-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                            className: "space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                                                        className: "text-sm font-normal leading-6 text-gray-500 dark:text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                                dateTime: date,
                                                                children: (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date)
                                                            }),
                                                            " \u2022 "
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "space-y-5 xl:col-span-4",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-2xl font-bold leading-8 tracking-tight",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                        href: `/blog/${slug}`,
                                                                        className: "text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500",
                                                                        children: title
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex flex-wrap",
                                                                children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                        text: tag
                                                                    }, tag)
                                                                )
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "prose max-w-none pt-5 text-gray-500 dark:text-gray-400",
                                                                children: summary
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }, slug)
                                }, slug);
                            })
                        ]
                    })
                ]
            }),
            pagination && pagination.totalPages > 1 && !searchValue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                currentPage: pagination.currentPage,
                totalPages: pagination.totalPages
            })
        ]
    });
};


/***/ }),

/***/ 5067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8719);
/* harmony import */ var _components_common_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4318);
/* harmony import */ var _components_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7930);
/* harmony import */ var _components_layout_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(532);
/* harmony import */ var _components_blog_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4577);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3468);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__);











const editUrl = (fileName)=>`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().siteRepo)}/blob/master/data/blog/${fileName}`
;
const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { slug , fileName , date , title , images , tags , readingTime  } = frontMatter;
    const postUrl = `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().siteUrl)}/blog/${slug}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_SEO__WEBPACK_IMPORTED_MODULE_4__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().siteUrl)}/blog/${slug}`,
                authorDetails: authorDetails,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            className: "pt-6 xl:pb-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-1 text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        className: "space-y-10",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("time", {
                                                        dateTime: date,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsCalendarDate, {
                                                                className: "-mt-1.5 mr-1.5 inline h-4 w-4"
                                                            }),
                                                            new Date(date).toLocaleDateString((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().locale), postDateTemplate)
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center gap-5 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_9__.HiOutlinePencil, {
                                                        className: "h-5 w-5"
                                                    }),
                                                    readingTime.words,
                                                    " words"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_9__.HiOutlineClock, {
                                                        className: "h-5 w-5"
                                                    }),
                                                    readingTime.text
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                    className: "pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                            className: "sr-only",
                                            children: "Authors"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",
                                                children: authorDetails.map((author)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            author.avatar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: author.avatar,
                                                                width: "38",
                                                                height: "38",
                                                                alt: "avatar",
                                                                className: "h-10 w-10 rounded-full"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                                className: "whitespace-nowrap text-sm font-medium leading-5",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        className: "text-gray-900 dark:text-gray-100",
                                                                        children: author.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        children: author.twitter && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                            href: author.twitter,
                                                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                            children: [
                                                                                author.twitter.replace("https://twitter.com/", "@"),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    viewBox: "0 0 24 24",
                                                                                    className: "ml-0.5 inline-block h-4 w-4 fill-current",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                                                        "data-name": "Layer 2",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                            "data-name": "external-link",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                    width: "24",
                                                                                                    height: "24",
                                                                                                    opacity: "0"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                    d: "M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                    d: "M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, author.name)
                                                )
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "prose max-w-none pb-8 pt-10 dark:prose-dark",
                                            children: children
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "grid place-items-center pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_7__.TwitterShareButton, {
                                                        url: postUrl,
                                                        title: title,
                                                        via: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().socialAccount.twitter),
                                                        className: "flex items-center overflow-hidden rounded-full !bg-[#1da1f2] hover:scale-110",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_8__.SocialIcon, {
                                                            network: "twitter",
                                                            style: {
                                                                height: 35,
                                                                width: 35
                                                            },
                                                            fgColor: "#fff",
                                                            bgColor: "#1da1f2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_7__.FacebookShareButton, {
                                                        url: postUrl,
                                                        quote: title,
                                                        className: "flex items-center overflow-hidden rounded-full !bg-[#1877f2] hover:scale-110",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_8__.SocialIcon, {
                                                            network: "facebook",
                                                            style: {
                                                                height: 35,
                                                                width: 35
                                                            },
                                                            fgColor: "#fff",
                                                            bgColor: "#1877f2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_7__.EmailShareButton, {
                                                        body: "Check out this blog",
                                                        subject: title,
                                                        separator: " : ",
                                                        url: postUrl,
                                                        className: "flex items-center overflow-hidden rounded-full !bg-[#B61AC1] hover:scale-110",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_8__.SocialIcon, {
                                                            network: "email",
                                                            style: {
                                                                height: 35,
                                                                width: 35
                                                            },
                                                            fgColor: "#fff",
                                                            bgColor: "#B61AC1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_7__.LinkedinShareButton, {
                                                        summary: "Check out this blog",
                                                        title: title,
                                                        source: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().siteUrl),
                                                        url: postUrl,
                                                        className: "flex items-center overflow-hidden rounded-full !bg-[#0072b1] hover:scale-110",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_8__.SocialIcon, {
                                                            network: "linkedin",
                                                            style: {
                                                                height: 35,
                                                                width: 35
                                                            },
                                                            fgColor: "#fff",
                                                            bgColor: "#0072b1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_7__.RedditShareButton, {
                                                        title: title,
                                                        url: postUrl,
                                                        className: "flex items-center overflow-hidden rounded-full !bg-[#ff4500] hover:scale-110",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_8__.SocialIcon, {
                                                            network: "reddit",
                                                            style: {
                                                                height: 35,
                                                                width: 35
                                                            },
                                                            fgColor: "#fff",
                                                            bgColor: "#ff4500"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_7__.WhatsappShareButton, {
                                                        title: title,
                                                        separator: " : ",
                                                        url: postUrl,
                                                        className: "flex items-center overflow-hidden rounded-full !bg-[#25D366] hover:scale-110",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_8__.SocialIcon, {
                                                            network: "whatsapp",
                                                            style: {
                                                                height: 35,
                                                                width: 35
                                                            },
                                                            fgColor: "#fff",
                                                            bgColor: "#25D366"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        href: editUrl(fileName),
                                                        className: "flex items-center overflow-hidden rounded-full !bg-[#5A6272] hover:scale-110",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_8__.SocialIcon, {
                                                            network: "github",
                                                            style: {
                                                                height: 35,
                                                                width: 35
                                                            },
                                                            fgColor: "#fff",
                                                            bgColor: "#5A6272"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",
                                            children: [
                                                tags && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "py-4 xl:py-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "pb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                            children: "Tags"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-wrap",
                                                            children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Tag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                    text: tag
                                                                }, tag)
                                                            )
                                                        })
                                                    ]
                                                }),
                                                (next || prev) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                                                    children: [
                                                        prev && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                                    children: "Previous Article"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                        href: `/blog/${prev.slug}`,
                                                                        children: prev.title
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        next && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                                    children: "Next Article"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                        href: `/blog/${next.slug}`,
                                                                        children: next.title
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pt-4 xl:pt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                href: "/blog",
                                                className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                children: "\u2190 Back to the blog"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 3168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8719);
/* harmony import */ var _components_common_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4318);
/* harmony import */ var _components_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7930);
/* harmony import */ var _components_layout_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(532);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6232);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__);









function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { slug , date , title , summary , readingTime  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_SEO__WEBPACK_IMPORTED_MODULE_4__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default().siteUrl)}/snippets/${frontMatter.slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto max-w-3xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("time", {
                                                        dateTime: date,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsCalendarDate, {
                                                                className: "-mt-1 mr-1 inline h-4 w-4"
                                                            }),
                                                            " ",
                                                            (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(date)
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center gap-5 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlinePencil, {
                                                        className: "h-5 w-5"
                                                    }),
                                                    readingTime.words,
                                                    " words"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineClock, {
                                                        className: "h-5 w-5"
                                                    }),
                                                    readingTime.text
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "prose max-w-none pb-8 pt-10 dark:prose-dark",
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/snippets/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "\u2190 ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/snippets/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " \u2192"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;