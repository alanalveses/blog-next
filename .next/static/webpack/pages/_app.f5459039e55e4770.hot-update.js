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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href, title, className = \"\" } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\\n            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 \\n            group-hover:w-full transition-[width] ease duration-300\\n            \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n            dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setisOpen] = useState(false);\n    const handleClick = ()=>{\n        setisOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between fixed top-0 z-50 bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex flex-col justify-center items-center lg:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://github.com/alanalveses\",\n                        target: \"_blank\",\n                        className: \"w-7 mr-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.GithubIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://www.linkedin.com/in/alanalveses/\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://wa.me//5511992668420?text=%20Ol\\xe1,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20servi\\xe7os!\",\n                        target: \"_blank\",\n                        className: \"w-8 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.WhatsAppIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://web.facebook.com/?_rdc=1&_rdr\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3 bg-light rounded-full\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\\n        \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n        \"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projetos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"Sobre\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Artigos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/contact\",\n                        title: \"Contato\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/more\",\n                        title: \"Mais\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%] bg-transparent\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"gEsn1W5zpuxcO6O0nW7Ibb7oc2c=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szt3QkFBWUMsT0FBTTt3QkFBVUMsV0FBVTs7Ozs7O2tDQUN2RCw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVdDLE9BQU07d0JBQVVDLFdBQVU7Ozs7OztrQ0FDdEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFRQyxPQUFNO3dCQUFPQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR2xELDhEQUFDcUI7Z0JBQUlyQixXQUFVOzBCQUNiLDRFQUFDTCw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtJQTlGTVM7O1FBQ29CUiwrREFBZ0JBOzs7TUFEcENRO0FBZ0dOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBHaXRodWJJY29uLFxyXG4gIExpbmtlZEluSWNvbixcclxuICBNb29uSWNvbixcclxuICBQaW50ZXJlc3RJY29uLFxyXG4gIFN1bkljb24sXHJcbiAgV2hhdHNBcHBJY29uLFxyXG59IGZyb20gXCIuL0ljb25zXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcclxuaW1wb3J0IHVzZVRoZW1lU3dpdGNoZXIgZnJvbSBcIi4vaG9va3MvdXNlVGhlbWVTd2l0Y2hlclwiO1xyXG5cclxuY29uc3QgQ3VzdG9tTGluayA9ICh7IGhyZWYsIHRpdGxlLCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9PlxyXG4gICAgICB7dGl0bGV9XHJcblxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICBoLVsxcHhdIGlubGluZS1ibG9jayBiZy1kYXJrIGFic29sdXRlIGxlZnQtMCAtYm90dG9tLTAuNSBcclxuICAgICAgICAgICAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxyXG4gICAgICAgICAgICAke3JvdXRlci5hc1BhdGggPT09IGhyZWYgPyBcInctZnVsbFwiIDogXCJ3LTBcIn1cclxuICAgICAgICAgICAgZGFyazpiZy1saWdodGB9XHJcbiAgICAgID5cclxuICAgICAgICAmbmJzcDtcclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlVGhlbWVTd2l0Y2hlcigpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldGlzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0aXNPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmaXhlZCB0b3AtMCB6LTUwIGJnLWxpZ2h0IGRhcms6YmctZGFyayBkYXJrOnRleHQtbGlnaHQgbGc6cHgtMTYgbWQ6cHgtMTIgc206cHgtOCBcIj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzpmbGV4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNiByb3VuZGVkLXNtIFwiXHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8c3BhblxyXG4gXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJsb2NrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbSBteS0wLjVcIlxyXG4gICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJsb2NrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbVwiXHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbGFuYWx2ZXNlc1wiXHJcbiAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgbXItM1wiXHJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdpdGh1Ykljb24gLz5cclxuICAgICAgICA8L21vdGlvbi5hPlxyXG5cclxuICAgICAgICA8bW90aW9uLmFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxhbmFsdmVzZXMvXCJcclxuICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcclxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cclxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlua2VkSW5JY29uIC8+XHJcbiAgICAgICAgPC9tb3Rpb24uYT5cclxuXHJcbiAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93YS5tZS8vNTUxMTk5MjY2ODQyMD90ZXh0PSUyME9sw6EsJTIwZXN0YXZhJTIwZW0lMjBzZXUlMjBzaXRlJTIwZmlxdWVpJTIwaW50ZXJlc3NhZG8lMjBlbSUyMHVtJTIwZGUlMjBzZXVzJTIwc2VydmnDp29zIVwiXHJcbiAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggbXgtM1wiXHJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFdoYXRzQXBwSWNvbiAvPlxyXG4gICAgICAgIDwvbW90aW9uLmE+XHJcblxyXG4gICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd2ViLmZhY2Vib29rLmNvbS8/X3JkYz0xJl9yZHJcIlxyXG4gICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTMgYmctbGlnaHQgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cclxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGludGVyZXN0SWNvbiAvPlxyXG4gICAgICAgIDwvbW90aW9uLmE+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGUobW9kZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWwtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xXHJcbiAgICAgICAgJHttb2RlID09PSBcImxpZ2h0XCIgPyBcImJnLWRhcmsgdGV4dC1saWdodFwiIDogXCJiZy1saWdodCB0ZXh0LWRhcmtcIn1cclxuICAgICAgICBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttb2RlID09PSBcImRhcmtcIiA/IChcclxuICAgICAgICAgICAgPFN1bkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPE1vb25JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT1cIm1yLTRcIiAvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvcHJvamVjdHNcIiB0aXRsZT1cIlByb2pldG9zXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiU29icmVcIiBjbGFzc05hbWU9XCJteC00XCIgLz5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2FydGljbGVzXCIgdGl0bGU9XCJBcnRpZ29zXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9jb250YWN0XCIgdGl0bGU9XCJDb250YXRvXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9tb3JlXCIgdGl0bGU9XCJNYWlzXCIgY2xhc3NOYW1lPVwibWwtNFwiIC8+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXSBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVJvdXRlciIsIkdpdGh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJNb29uSWNvbiIsIlBpbnRlcmVzdEljb24iLCJTdW5JY29uIiwiV2hhdHNBcHBJY29uIiwibW90aW9uIiwiTG9nbyIsInVzZVRoZW1lU3dpdGNoZXIiLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsIm1vZGUiLCJzZXRNb2RlIiwiaXNPcGVuIiwic2V0aXNPcGVuIiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsImhlYWRlciIsImJ1dHRvbiIsIm5hdiIsImEiLCJ0YXJnZXQiLCJ3aGlsZUhvdmVyIiwieSIsIndoaWxlVGFwIiwic2NhbGUiLCJvbkNsaWNrIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});