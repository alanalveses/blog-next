"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href, title, className = \"\" } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\\n            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 \\n            group-hover:w-full transition-[width] ease duration-300\\n            \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n            dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setisOpen] = useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between fixed top-0 z-50 bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex flex-col justify-center items-center lg:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://github.com/alanalveses\",\n                        target: \"_blank\",\n                        className: \"w-7 mr-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.GithubIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://www.linkedin.com/in/alanalveses/\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://wa.me//5511992668420?text=%20Ol\\xe1,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20servi\\xe7os!\",\n                        target: \"_blank\",\n                        className: \"w-8 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.WhatsAppIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://web.facebook.com/?_rdc=1&_rdr\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3 bg-light rounded-full\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\\n        \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n        \"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projetos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"Sobre\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Artigos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/contact\",\n                        title: \"Contato\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/more\",\n                        title: \"Mais\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%] bg-transparent\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"gEsn1W5zpuxcO6O0nW7Ibb7oc2c=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0MsTUFBSzt3QkFBV0MsT0FBTTt3QkFBVUMsV0FBVTs7Ozs7O2tDQUN0RCw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVFDLE9BQU07d0JBQU9DLFdBQVU7Ozs7Ozs7Ozs7OzswQkFHbEQsOERBQUNvQjtnQkFBSXBCLFdBQVU7MEJBQ2IsNEVBQUNMLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0lBL0ZNUzs7UUFDb0JSLCtEQUFnQkE7OztNQURwQ1E7QUFpR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEdpdGh1Ykljb24sXHJcbiAgTGlua2VkSW5JY29uLFxyXG4gIE1vb25JY29uLFxyXG4gIFBpbnRlcmVzdEljb24sXHJcbiAgU3VuSWNvbixcclxuICBXaGF0c0FwcEljb24sXHJcbn0gZnJvbSBcIi4vSWNvbnNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xyXG5pbXBvcnQgdXNlVGhlbWVTd2l0Y2hlciBmcm9tIFwiLi9ob29rcy91c2VUaGVtZVN3aXRjaGVyXCI7XHJcblxyXG5jb25zdCBDdXN0b21MaW5rID0gKHsgaHJlZiwgdGl0bGUsIGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XHJcbiAgICAgIHt0aXRsZX1cclxuXHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgIGgtWzFweF0gaW5saW5lLWJsb2NrIGJnLWRhcmsgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMC41IFxyXG4gICAgICAgICAgICBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwXHJcbiAgICAgICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/IFwidy1mdWxsXCIgOiBcInctMFwifVxyXG4gICAgICAgICAgICBkYXJrOmJnLWxpZ2h0YH1cclxuICAgICAgPlxyXG4gICAgICAgICZuYnNwO1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VUaGVtZVN3aXRjaGVyKCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0aXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmaXhlZCB0b3AtMCB6LTUwIGJnLWxpZ2h0IGRhcms6YmctZGFyayBkYXJrOnRleHQtbGlnaHQgbGc6cHgtMTYgbWQ6cHgtMTIgc206cHgtOCBcIj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzpmbGV4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNiByb3VuZGVkLXNtIFwiXHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8c3BhblxyXG4gXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJsb2NrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbSBteS0wLjVcIlxyXG4gICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc21cIlxyXG4gICAgICAgID48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgICA8bW90aW9uLmFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWxhbmFsdmVzZXNcIlxyXG4gICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy03IG1yLTNcIlxyXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxyXG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHaXRodWJJY29uIC8+XHJcbiAgICAgICAgPC9tb3Rpb24uYT5cclxuXHJcbiAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsYW5hbHZlc2VzL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiXHJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxyXG4gICAgICAgIDwvbW90aW9uLmE+XHJcblxyXG4gICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd2EubWUvLzU1MTE5OTI2Njg0MjA/dGV4dD0lMjBPbMOhLCUyMGVzdGF2YSUyMGVtJTIwc2V1JTIwc2l0ZSUyMGZpcXVlaSUyMGludGVyZXNzYWRvJTIwZW0lMjB1bSUyMGRlJTIwc2V1cyUyMHNlcnZpw6dvcyFcIlxyXG4gICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04IG14LTNcIlxyXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxyXG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxXaGF0c0FwcEljb24gLz5cclxuICAgICAgICA8L21vdGlvbi5hPlxyXG5cclxuICAgICAgICA8bW90aW9uLmFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3dlYi5mYWNlYm9vay5jb20vP19yZGM9MSZfcmRyXCJcclxuICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zIGJnLWxpZ2h0IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBpbnRlcmVzdEljb24gLz5cclxuICAgICAgICA8L21vdGlvbi5hPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKG1vZGUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHAtMVxyXG4gICAgICAgICR7bW9kZSA9PT0gXCJsaWdodFwiID8gXCJiZy1kYXJrIHRleHQtbGlnaHRcIiA6IFwiYmctbGlnaHQgdGV4dC1kYXJrXCJ9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bW9kZSA9PT0gXCJkYXJrXCIgPyAoXHJcbiAgICAgICAgICAgIDxTdW5JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxNb29uSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9cIiB0aXRsZT1cIkhvbWVcIiBjbGFzc05hbWU9XCJtci00XCIgLz5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm9qZXRvc1wiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYWJvdXRcIiB0aXRsZT1cIlNvYnJlXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hcnRpY2xlc1wiIHRpdGxlPVwiQXJ0aWdvc1wiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvY29udGFjdFwiIHRpdGxlPVwiQ29udGF0b1wiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvbW9yZVwiIHRpdGxlPVwiTWFpc1wiIGNsYXNzTmFtZT1cIm1sLTRcIiAvPlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV0gYmctdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICA8TG9nbyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJHaXRodWJJY29uIiwiTGlua2VkSW5JY29uIiwiTW9vbkljb24iLCJQaW50ZXJlc3RJY29uIiwiU3VuSWNvbiIsIldoYXRzQXBwSWNvbiIsIm1vdGlvbiIsIkxvZ28iLCJ1c2VUaGVtZVN3aXRjaGVyIiwiQ3VzdG9tTGluayIsImhyZWYiLCJ0aXRsZSIsImNsYXNzTmFtZSIsInJvdXRlciIsInNwYW4iLCJhc1BhdGgiLCJOYXZCYXIiLCJtb2RlIiwic2V0TW9kZSIsImlzT3BlbiIsInNldGlzT3BlbiIsInVzZVN0YXRlIiwiaGVhZGVyIiwiYnV0dG9uIiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});