/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/UbuntuCondensed-Regular.ttf */ \"./src/assets/font/UbuntuCondensed-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'Ubuntu Condensed';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\r\n}\r\n\r\nbody{\r\n    font-size: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-family: 'Ubuntu Condensed', sans-serif;\r\n}\r\n\r\n/*NAVBAR*/\r\n\r\n#nav{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    padding: 1rem 5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;\r\n    z-index: 2;\r\n    border-bottom: 4px solid #A3B18A;\r\n}\r\n\r\n.nav-btn{\r\n    border: none;\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    padding: 1rem;\r\n    background-color: transparent;\r\n    color: #9C6644;\r\n\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-property: transform;\r\n    transition-property: transform;\r\n}\r\n\r\n.nav-btn:hover{\r\n    cursor: pointer;\r\n    color:#4B3832;\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n/* HERO */\r\n\r\n.hero{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n\r\n/*MENU*/\r\n.menuSection{\r\n    margin: .5rem;\r\n}\r\n\r\n.menuSection h2{\r\n    font-size: 2rem;\r\n    letter-spacing: 1px;\r\n    color:#4B3832;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menuSection h3{\r\n    font-size: 1.5rem;\r\n    letter-spacing: 1px;\r\n    color:#9C6644;\r\n    text-decoration: underline;\r\n}\r\n\r\n.menuExample{\r\n    /*\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 3rem;\r\n    justify-content: center;\r\n    margin: 3rem 0;\r\n    */\r\n    display: grid;\r\n    grid-template-columns: 50% 50%; \r\n    grid-template-rows: auto auto;\r\n    gap: 10px;\r\n    width: 100%; \r\n    justify-items: center;\r\n}\r\n\r\n.menu-example{\r\n    width: 10rem;\r\n    height: 10rem;\r\n    overflow: hidden; \r\n    border-radius: 10px; \r\n    background-color: #4B3832;\r\n    border: 1px solid #9C6644; \r\n}\r\n\r\n.menu-example img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover; \r\n    object-position: top; \r\n}\r\n\r\n/*Carousel */\r\n\r\n.carousel{\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    height: 80vh;\r\n    position: relative;\r\n    padding-top: .5rem;\r\n}\r\n\r\n.carousel .carousel-item,\r\n.carousel .carousel-item-hidden{\r\n    display: none;\r\n}\r\n\r\n.carousel .carousel-item img{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n\r\n.carousel .carousel-item-active{\r\n    display: block;\r\n}\r\n\r\n.carousel .carousel-actions{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.carousel .carousel-actions button{\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: 1rem;\r\n}\r\n\r\n.carousel .carousel-actions button:hover{\r\n    background-color: #A3B18A;\r\n    color: #4B3832;\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1); \r\n}\r\n\r\n.carousel .carousel-actions button#carousel-btn-prev{\r\n    margin-left: 20px;\r\n}\r\n\r\n.carousel .carousel-actions button#carousel-btn-next{\r\n    margin-right: 20px;\r\n}\r\n\r\n/*Location*/\r\n.location h2{\r\n    font-size: 2rem;\r\n    letter-spacing: 1px;\r\n    color:#4B3832;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.location p{\r\n    font-size: 1rem;\r\n    letter-spacing: 1px;\r\n    color:#9C6644;\r\n}\r\n\r\n/*MENU PAGE*/\r\n\r\n.menu {\r\n    display: grid;\r\n    /*grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));*/\r\n    gap: 20px; \r\n    padding: 20px;\r\n    max-width: 1200px; \r\n    margin: 0 auto;\r\n}\r\n\r\n/* Sections */\r\n.menu > div {\r\n    background-color: #fff;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n    padding: 15px;\r\n    text-align: center;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu > div:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.menu-item {\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    max-width: 200px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n    width: 150px;\r\n    height: 150px; \r\n    background-color: #ccc;\r\n    display: flex;\r\n    align-items: center; \r\n    justify-content: center; \r\n  }\r\n  \r\n  .menu-item img {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n/* Titles */\r\n.hotBeveragesSection h2, .coldBeveragesSection h2, .pressedSub h2, .dessert h2 {\r\n    font-size: 2rem;\r\n    margin-bottom: 10px;\r\n    color: #4B3832; \r\n}\r\n\r\n.hotBeveragesSection h3, .coldBeveragesSection h3, .pressedSub h3, .dessert h3 {\r\n    font-size: 1.5rem;\r\n    margin: 10px 0 5px 0;\r\n    color: #9C6644;\r\n}\r\n\r\n/* Text */\r\n.hotBeveragesSection p, .coldBeveragesSection p, .pressedSub p, .dessert p {\r\n    font-size: 1rem;\r\n    color: #9C6644;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* Responsividad */\r\n@media (max-width: 600px) {\r\n    .menu-container {\r\n        grid-template-columns: 1fr; \r\n    }\r\n}\r\n\r\n/*ABOUT*/\r\n\r\n.about {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n  }\r\n  \r\n/* Sección de la imagen */\r\n.aboutSection {\r\n    flex: 1;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.about p{\r\n    color: #9C6644;\r\n    font-size: 1rem;\r\n}\r\n\r\n.aboutSection img {\r\n    width: 100%;\r\n    height: 50vh;\r\n    opacity: .5;\r\n}\r\n  \r\n  /* Sección de texto */\r\n.aboutText {\r\n    flex: 1.5;\r\n}\r\n  \r\n  /* Sección de contacto */\r\n.contactSection {\r\n    flex: 1;\r\n    text-align: center;\r\n}\r\n\r\n.contactSection h2{\r\n    font-size: 2rem;\r\n    letter-spacing: 1px;\r\n    color:#4B3832;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.contactSection p{\r\n    font-size: 1rem;\r\n    letter-spacing: 1px;\r\n    color:#9C6644;\r\n}\r\n\r\n  /* Formulario de contacto */\r\n  \r\n  /* Título de contacto */\r\n.contactTitle {\r\n    margin-bottom: 10px;\r\n}\r\n  \r\n  /* Elementos de contacto */\r\n.contactEmail, .contactMedia {\r\n    margin-bottom: 5px;\r\n}\r\n  \r\n  /* Redes sociales */\r\n.socialMedia {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n  \r\n  /* Iconos de redes sociales */\r\n.media {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.media:hover{\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_coffee_shop_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/coffee-shop.jpg */ \"./src/assets/coffee-shop.jpg\");\n/* harmony import */ var _assets_instagram_brands_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/instagram-brands-solid.svg */ \"./src/assets/instagram-brands-solid.svg\");\n/* harmony import */ var _assets_x_twitter_brands_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/x-twitter-brands-solid.svg */ \"./src/assets/x-twitter-brands-solid.svg\");\n/* harmony import */ var _assets_square_facebook_brands_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/square-facebook-brands-solid.svg */ \"./src/assets/square-facebook-brands-solid.svg\");\n\r\n\r\n\r\n\r\n\r\nfunction loadAbout(){\r\n    const about = document.createElement('div');\r\n    about.classList.add('about');\r\n\r\n    const aboutSection = document.createElement('div');\r\n    aboutSection.classList.add('aboutSection');\r\n\r\n    const aboutImg = document.createElement('div');\r\n    aboutImg.classList.add ='aboutImg'; \r\n    aboutImg.innerHTML = `<img src=\"${_assets_coffee_shop_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"coffee-shop\" class=\"menu-img\">`; \r\n    /* Photo by Dmitry Zvolskiy: https://www.pexels.com/photo/inside-a-store-2199190/ */\r\n\r\n    const aboutText = document.createElement('p');\r\n    aboutText.innerHTML = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante metus turpis dis consectetur; pharetra sed integer aliquet hendrerit. Auctor sodales cras egestas rutrum litora imperdiet metus. Enim morbi habitant pellentesque posuere sem rutrum scelerisque leo. Natoque bibendum iaculis ornare potenti enim.';\r\n\r\n    const contactSection = document.createElement('div');\r\n    contactSection.classList.add('contactSection');\r\n\r\n    const contactTitle = document.createElement('h2');\r\n    contactTitle.innerHTML = 'Contact Us';\r\n\r\n    const contactEmail = document.createElement('p');\r\n    contactEmail.innerHTML = 'coffee@email.com';\r\n\r\n    const contactMedia = document.createElement('p');\r\n    contactMedia.innerHTML = 'Follow Us';\r\n\r\n    const socialMedia = document.createElement('div');\r\n    socialMedia.classList.add('socialMedia');\r\n\r\n    const media1 = document.createElement('div');\r\n    media1.classList.add('media');\r\n    media1.innerHTML = `<img src=\"${_assets_instagram_brands_solid_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"coffee-shop\" class=\"menu-img\">`;\r\n    \r\n    const media2 = document.createElement('div');\r\n    media2.classList.add('media');\r\n    media2.innerHTML = `<img src=\"${_assets_x_twitter_brands_solid_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"coffee-shop\" class=\"menu-img\">`;\r\n    \r\n    const media3 = document.createElement('div');\r\n    media3.classList.add('media');\r\n    media3.innerHTML = `<img src=\"${_assets_square_facebook_brands_solid_svg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"coffee-shop\" class=\"menu-img\">`;\r\n\r\n    //Adding img to About Section\r\n    aboutSection.appendChild(aboutImg);\r\n\r\n    //Adding elements to Social Media\r\n    socialMedia.appendChild(media1);\r\n    socialMedia.appendChild(media2);\r\n    socialMedia.appendChild(media3);\r\n\r\n    //Adding elements to Contact Section\r\n    contactSection.appendChild(contactTitle);\r\n    contactSection.appendChild(contactEmail);\r\n    contactSection.appendChild(contactMedia);\r\n    contactSection.appendChild(socialMedia);\r\n\r\n    //Adding elements to About\r\n    about.appendChild(aboutSection);\r\n    about.appendChild(aboutText);\r\n    about.appendChild(contactSection);\r\n \r\n    return about;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://webpack-demo/./src/about.js?");

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_image1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/image1.jpg */ \"./src/assets/image1.jpg\");\n/* harmony import */ var _assets_image2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/image2.jpg */ \"./src/assets/image2.jpg\");\n/* harmony import */ var _assets_image3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/image3.jpg */ \"./src/assets/image3.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction loadCarousel(){\r\n    //Main div\r\n    const carousel = document.createElement('div');\r\n    carousel.classList.add('carousel');\r\n\r\n    //Carousel imgs\r\n    const images = [_assets_image1_jpg__WEBPACK_IMPORTED_MODULE_0__,_assets_image2_jpg__WEBPACK_IMPORTED_MODULE_1__,_assets_image3_jpg__WEBPACK_IMPORTED_MODULE_2__];\r\n    const slides = []\r\n    images.forEach((src,index)=>{\r\n        const item = document.createElement('div');\r\n        item.classList.add('carousel-item');\r\n        if(index === 0){\r\n            item.classList.add('carousel-item-active')\r\n        }\r\n\r\n        const img = document.createElement('img');\r\n        img.src = src;\r\n        img.alt = `image${index + 1}`;\r\n        item.appendChild(img);\r\n\r\n        carousel.appendChild(item);\r\n        slides.push(item);\r\n    });\r\n\r\n    //Carousel btns\r\n    const carouselActions = document.createElement('div');\r\n    carouselActions.classList.add('carousel-actions');\r\n\r\n    const prevBtn = document.createElement('button');\r\n    prevBtn.id = 'carousel-prev-btn';\r\n    prevBtn.setAttribute('aria-label','previus-slide');\r\n    prevBtn.textContent = '<';\r\n\r\n    const nextBtn = document.createElement('button');\r\n    nextBtn.id = 'carousel-next-btn';\r\n    nextBtn.setAttribute('aria-label','next-slide');\r\n    nextBtn.textContent = '>';\r\n\r\n    carousel.appendChild(carouselActions);\r\n\r\n    carouselActions.appendChild(prevBtn);\r\n    carouselActions.appendChild(nextBtn);\r\n\r\n    //Logica del carrusel\r\n\r\n    let slidePosition = 0;\r\n    const totalSlides = slides.length;\r\n\r\n    function updateSlidePosition() {\r\n        slides.forEach((slide) => {\r\n            slide.classList.remove('carousel-item-active');\r\n            slide.classList.add('carousel-item-hidden');\r\n        });\r\n        slides[slidePosition].classList.add('carousel-item-active');\r\n    }\r\n\r\n    function moveToNextSlide() {\r\n        if (slidePosition === totalSlides - 1) {\r\n            slidePosition = 0; // Reinicia al inicio\r\n        } else {\r\n            slidePosition++;\r\n        }\r\n        updateSlidePosition();\r\n    }\r\n\r\n    function moveToPrevSlide() {\r\n        if (slidePosition === 0) {\r\n            slidePosition = totalSlides - 1; // Va al final\r\n        } else {\r\n            slidePosition--;\r\n        }\r\n        updateSlidePosition();\r\n    }\r\n\r\n    // Agrega los eventos a los botones\r\n    prevBtn.addEventListener('click', moveToPrevSlide);\r\n    nextBtn.addEventListener('click', moveToNextSlide);\r\n\r\n    return carousel;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCarousel);\n\n//# sourceURL=webpack://webpack-demo/./src/carousel.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/carousel.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _assets_capuccino_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/capuccino.jpg */ \"./src/assets/capuccino.jpg\");\n/* harmony import */ var _assets_golfeado_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/golfeado.jpg */ \"./src/assets/golfeado.jpg\");\n/* harmony import */ var _assets_mediterranean_chicken_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/mediterranean-chicken.jpg */ \"./src/assets/mediterranean-chicken.jpg\");\n/* harmony import */ var _assets_iced_mocha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/iced-mocha.jpg */ \"./src/assets/iced-mocha.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadHome(){\r\n    const home = document.createElement('div');\r\n    home.classList.add('home');\r\n    \r\n    //Hero Section\r\n    const hero = document.createElement('div');\r\n    hero.classList.add('hero'); \r\n    const carousel = (0,_carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    hero.appendChild(carousel);\r\n\r\n    //Menu Section\r\n    const menuSection = document.createElement('div');\r\n    menuSection.classList.add('menuSection')\r\n\r\n    const menuTitle = document.createElement('h2');\r\n    menuTitle.innerHTML = 'Menu';\r\n\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('menuExample');\r\n\r\n    const menuImg1 = document.createElement('div');\r\n    menuImg1.innerHTML= `<img src=\"${_assets_capuccino_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Capuccino\">`;\r\n    menuImg1.classList.add('menu-example');\r\n    \r\n    const menuImg2 = document.createElement('div');\r\n    menuImg2.innerHTML= `<img src=\"${_assets_iced_mocha_jpg__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Iced Mocha\">`;\r\n    menuImg2.classList.add('menu-example');\r\n\r\n    const menuImg3 = document.createElement('div');\r\n    menuImg3.innerHTML= `<img src=\"${_assets_mediterranean_chicken_jpg__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Chicken Sub\">`;\r\n    menuImg3.classList.add('menu-example');\r\n\r\n    const menuImg4 = document.createElement('div');\r\n    menuImg4.innerHTML= `<img src=\"${_assets_golfeado_jpg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Golfeado\" >`;\r\n    menuImg4.classList.add('menu-example');\r\n\r\n    const exploreMenu = document.createElement('h3');\r\n    exploreMenu.innerHTML = 'Explore Our Menu';\r\n\r\n    //Location Section\r\n    const locationSection = document.createElement('div');\r\n    locationSection.classList.add('location');\r\n\r\n    const locationTitle = document.createElement('h2');\r\n    locationTitle.innerHTML = 'Locations';\r\n\r\n    const location = document.createElement('p');\r\n    location.innerHTML = '1237 Maple Street, <br>Downtown District <br>San Francisco CA, 94103, USA';\r\n\r\n    const schedule = document.createElement('p');\r\n    schedule.innerHTML = 'Store Schedule: <br>Mon-Fri: 7:00 AM - 7:00 PM <br>Sat-Sun: 9:00 AM - 5:00 PM';\r\n    \r\n    //Adding elementos to location section\r\n    locationSection.append(locationTitle);\r\n    locationSection.append(location);\r\n    locationSection.append(schedule); \r\n\r\n    //Adding imgs to menu\r\n    menu.appendChild(menuImg1);\r\n    menu.appendChild(menuImg2);\r\n    menu.appendChild(menuImg3);\r\n    menu.appendChild(menuImg4);\r\n\r\n    //Adding elements to menu section\r\n    menuSection.appendChild(menuTitle);\r\n    menuSection.appendChild(menu);\r\n    menuSection.appendChild(exploreMenu);\r\n\r\n    //Adding elements to home section\r\n    home.appendChild(hero);\r\n    home.appendChild(menuSection);\r\n    home.appendChild(locationSection);\r\n\r\n    return home;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome); \n\n//# sourceURL=webpack://webpack-demo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\nfunction init(){\r\n    const content = document.getElementById('content');\r\n    \r\n    const clearContent = () =>{\r\n        content.textContent = '';\r\n    }\r\n\r\n    const home = document.getElementById('home');\r\n    const menu = document.getElementById('menu');\r\n    const about = document.getElementById('about');\r\n\r\n    home.addEventListener('click', ()=>{\r\n        clearContent();\r\n        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\n    })\r\n\r\n    menu.addEventListener('click', ()=>{\r\n        clearContent();\r\n        content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    })\r\n\r\n    about.addEventListener('click', ()=>{\r\n        clearContent();\r\n        content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n    })\r\n\r\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_capuccino_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/capuccino.jpg */ \"./src/assets/capuccino.jpg\");\n/* harmony import */ var _assets_iced_mocha_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/iced-mocha.jpg */ \"./src/assets/iced-mocha.jpg\");\n/* harmony import */ var _assets_brownie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/brownie.jpg */ \"./src/assets/brownie.jpg\");\n/* harmony import */ var _assets_caprese_pressed_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/caprese-pressed.jpg */ \"./src/assets/caprese-pressed.jpg\");\n/* harmony import */ var _assets_golfeado_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/golfeado.jpg */ \"./src/assets/golfeado.jpg\");\n/* harmony import */ var _assets_mediterranean_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/mediterranean-chicken.jpg */ \"./src/assets/mediterranean-chicken.jpg\");\n/* harmony import */ var _assets_quesillo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/quesillo.jpg */ \"./src/assets/quesillo.jpg\");\n/* harmony import */ var _assets_tres_leches_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/tres-leches.jpg */ \"./src/assets/tres-leches.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu(){\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('menu');\r\n\r\n    //Hot Beverages//\r\n    const hotBeveragesSection = document.createElement('div');\r\n    hotBeveragesSection.classList.add('hotBeveragesSection')\r\n\r\n    const hotBeveragesTitle = document.createElement('h2');\r\n    hotBeveragesTitle.innerHTML = 'Coffees & Teas'\r\n\r\n    const hotBeveragesItem = document.createElement('div');\r\n    hotBeveragesItem.classList.add('menu-item');\r\n    hotBeveragesItem.innerHTML = `<img src=\"${_assets_capuccino_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Capuccino\" class=\"menu-img\">`;\r\n\r\n    const hotBeverages = document.createElement('p');\r\n    hotBeverages.innerHTML = 'Espresso <br>Americano <br>Capuccino <br>Latte <br>Green Tea <br>Earl Grey Tea <br>Hot Chocolate'\r\n\r\n    //Cold Beverages//\r\n    const coldBeveragesSection = document.createElement('div');\r\n    coldBeveragesSection.classList.add('coldBeveragesSection');\r\n\r\n    const coldBeveragesTitle = document.createElement('h2');\r\n    coldBeveragesTitle.innerHTML = 'Beverages';\r\n\r\n    const coldBeveragesItem = document.createElement('div');\r\n    coldBeveragesItem.classList.add('menu-item');\r\n    coldBeveragesItem.innerHTML = `<img src=\"${_assets_iced_mocha_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"iced-mocha\" class=\"menu-img\">`;\r\n    \r\n    const coldBeverages = document.createElement('p');\r\n    coldBeverages.innerHTML = 'Iced Latte <br>Iced Mocha <br>Frappe <br>Iced Tea <br>Lemonade';\r\n\r\n    //Pressed Sub//\r\n    const pressedSub = document.createElement('div');\r\n    pressedSub.classList.add('pressedSub');\r\n\r\n    const pressedSubTitle = document.createElement('h2');\r\n    pressedSubTitle.innerHTML = 'Pressed Sub';\r\n\r\n    const pressedSub1Title = document.createElement('h3');\r\n    pressedSub1Title.innerHTML = 'Capresse'\r\n\r\n    const pressedSub1 = document.createElement('p');\r\n    pressedSub1.innerHTML = 'Bread, Mozarella, Tomatoes, Basil <br>Comes with some yuca chips';\r\n\r\n    const pressedSub1Item = document.createElement('div');\r\n    pressedSub1Item.classList.add('menu-item');\r\n    pressedSub1Item.innerHTML = `<img src=\"${_assets_caprese_pressed_jpg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"caprese-sub\" class=\"menu-img\">`;\r\n\r\n    const pressedSub2Title = document.createElement('h3');\r\n    pressedSub2Title.innerHTML = 'Mediterranean Chicken'\r\n\r\n    const pressedSub2 = document.createElement('p');\r\n    pressedSub2.innerHTML = 'Bread, Grill Chicken, Hummus, Spinach, Peppers, Feta Cheese <br>Comes with some yuca chips';\r\n\r\n    const pressedSub2Item = document.createElement('div');\r\n    pressedSub2Item.classList.add('menu-item');\r\n    pressedSub2Item.innerHTML = `<img src=\"${_assets_mediterranean_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"chicken-sub\" class=\"menu-img\">`;\r\n\r\n    //Desserts//\r\n    const dessert = document.createElement('div');\r\n    dessert.classList.add('dessert');\r\n\r\n    const dessertsTitle = document.createElement('h2');\r\n    dessertsTitle.innerHTML = 'Desserts';\r\n\r\n    const dessert1Title = document.createElement('h3');\r\n    dessert1Title.innerHTML = 'Tres Leches'\r\n\r\n    const dessert1 = document.createElement('p');\r\n    dessert1.innerHTML = 'A spongy cake soaked in a blend of three types of milk and topped with whipped cream.';\r\n\r\n    const dessert1Item = document.createElement('div');\r\n    dessert1Item.classList.add('menu-item');\r\n    dessert1Item.innerHTML = `<img src=\"${_assets_tres_leches_jpg__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"tres-leches\" class=\"menu-img\">`;\r\n\r\n    const dessert2Title = document.createElement('h3');\r\n    dessert2Title.innerHTML = 'Quesillo'\r\n\r\n    const dessert2 = document.createElement('p');\r\n    dessert2.innerHTML = 'A traditional Venezuelan flan made with condensed milk, regular milk, and eggs, topped with golden caramel.';\r\n\r\n    const dessert2Item = document.createElement('div');\r\n    dessert2Item.classList.add('menu-item');\r\n    dessert2Item.innerHTML = `<img src=\"${_assets_quesillo_jpg__WEBPACK_IMPORTED_MODULE_6__}\" alt=\"quesillo\" class=\"menu-img\">`;\r\n\r\n    const dessert3Title = document.createElement('h3');\r\n    dessert3Title.innerHTML = 'Golfeado'\r\n\r\n    const dessert3 = document.createElement('p');\r\n    dessert3.innerHTML = 'Sweet rolls with a hint of anise, glazed with cane syrup and served with fresh cheese.';\r\n\r\n    const dessert3Item = document.createElement('div');\r\n    dessert3Item.classList.add('menu-item');\r\n    dessert3Item.innerHTML = `<img src=\"${_assets_golfeado_jpg__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"golfeado\" class=\"menu-img\">`;\r\n\r\n    const dessert4Title = document.createElement('h3');\r\n    dessert4Title.innerHTML = 'Brownie'\r\n\r\n    const dessert4 = document.createElement('p');\r\n    dessert4.innerHTML = 'Rich and moist, served with optional vanilla ice cream.';\r\n\r\n    const dessert4Item = document.createElement('div');\r\n    dessert4Item.classList.add('menu-item');\r\n    dessert4Item.innerHTML = `<img src=\"${_assets_brownie_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"brownie\" class=\"menu-img\">`;\r\n\r\n    //Adding elements to the hot beverages sections\r\n\r\n    hotBeveragesSection.appendChild(hotBeveragesTitle);\r\n    hotBeveragesSection.appendChild(hotBeveragesItem);\r\n    hotBeveragesSection.appendChild(hotBeverages);\r\n\r\n    //Adding elements to the cold beverages section\r\n\r\n    coldBeveragesSection.appendChild(coldBeveragesTitle);\r\n    coldBeveragesSection.appendChild(coldBeveragesItem);\r\n    coldBeveragesSection.appendChild(coldBeverages);\r\n\r\n    //Adding elements to the pressed sub section\r\n    pressedSub.appendChild(pressedSubTitle);\r\n    pressedSub.appendChild(pressedSub1Title);\r\n    pressedSub.appendChild(pressedSub1);\r\n    pressedSub.appendChild(pressedSub1Item)\r\n    pressedSub.appendChild(pressedSub2Title);\r\n    pressedSub.appendChild(pressedSub2);\r\n    pressedSub.appendChild(pressedSub2Item);\r\n\r\n    //Adding elements to the dessserts section\r\n    dessert.appendChild(dessertsTitle);\r\n    dessert.appendChild(dessert1Title);\r\n    dessert.appendChild(dessert1);\r\n    dessert.appendChild(dessert1Item);\r\n    dessert.appendChild(dessert2Title);\r\n    dessert.appendChild(dessert2);\r\n    dessert.appendChild(dessert2Item);\r\n    dessert.appendChild(dessert3Title);\r\n    dessert.appendChild(dessert3);\r\n    dessert.appendChild(dessert3Item);\r\n    dessert.appendChild(dessert4Title);\r\n    dessert.appendChild(dessert4);\r\n    dessert.appendChild(dessert4Item);\r\n\r\n    //Adding elements to menu section\r\n    menu.appendChild(hotBeveragesSection);\r\n    menu.appendChild(coldBeveragesSection);\r\n    menu.appendChild(pressedSub);\r\n    menu.appendChild(dessert);\r\n\r\n    return menu;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://webpack-demo/./src/menu.js?");

/***/ }),

/***/ "./src/assets/brownie.jpg":
/*!********************************!*\
  !*** ./src/assets/brownie.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/brownie.d728dc954fe177e2b214..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/brownie.jpg?");

/***/ }),

/***/ "./src/assets/caprese-pressed.jpg":
/*!****************************************!*\
  !*** ./src/assets/caprese-pressed.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/caprese-pressed.99ef3e1f604869d89680..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/caprese-pressed.jpg?");

/***/ }),

/***/ "./src/assets/capuccino.jpg":
/*!**********************************!*\
  !*** ./src/assets/capuccino.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/capuccino.0207679650f023d8e5c6..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/capuccino.jpg?");

/***/ }),

/***/ "./src/assets/coffee-shop.jpg":
/*!************************************!*\
  !*** ./src/assets/coffee-shop.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/coffee-shop.4ecddb2cb4f1ceae2ed0..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/coffee-shop.jpg?");

/***/ }),

/***/ "./src/assets/font/UbuntuCondensed-Regular.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/font/UbuntuCondensed-Regular.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/font/UbuntuCondensed-Regular.ttf\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/font/UbuntuCondensed-Regular.ttf?");

/***/ }),

/***/ "./src/assets/golfeado.jpg":
/*!*********************************!*\
  !*** ./src/assets/golfeado.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/golfeado.159990522974d2e11131..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/golfeado.jpg?");

/***/ }),

/***/ "./src/assets/iced-mocha.jpg":
/*!***********************************!*\
  !*** ./src/assets/iced-mocha.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/iced-mocha.c67b147705f8a408a1f6..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/iced-mocha.jpg?");

/***/ }),

/***/ "./src/assets/image1.jpg":
/*!*******************************!*\
  !*** ./src/assets/image1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image1.a8e3ef37939286ddfddf..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/image1.jpg?");

/***/ }),

/***/ "./src/assets/image2.jpg":
/*!*******************************!*\
  !*** ./src/assets/image2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image2.a8cbcf7dc7ec6112d008..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/image2.jpg?");

/***/ }),

/***/ "./src/assets/image3.jpg":
/*!*******************************!*\
  !*** ./src/assets/image3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image3.4d6d61ce798bb21b6800..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/image3.jpg?");

/***/ }),

/***/ "./src/assets/instagram-brands-solid.svg":
/*!***********************************************!*\
  !*** ./src/assets/instagram-brands-solid.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/instagram-brands-solid.d59520a206ffbc6aadcf..svg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/instagram-brands-solid.svg?");

/***/ }),

/***/ "./src/assets/mediterranean-chicken.jpg":
/*!**********************************************!*\
  !*** ./src/assets/mediterranean-chicken.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/mediterranean-chicken.95ff272249d796354ad9..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/mediterranean-chicken.jpg?");

/***/ }),

/***/ "./src/assets/quesillo.jpg":
/*!*********************************!*\
  !*** ./src/assets/quesillo.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/quesillo.67ef46090b033de8ad0e..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/quesillo.jpg?");

/***/ }),

/***/ "./src/assets/square-facebook-brands-solid.svg":
/*!*****************************************************!*\
  !*** ./src/assets/square-facebook-brands-solid.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/square-facebook-brands-solid.25b8a7579c39c2e01ebf..svg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/square-facebook-brands-solid.svg?");

/***/ }),

/***/ "./src/assets/tres-leches.jpg":
/*!************************************!*\
  !*** ./src/assets/tres-leches.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/tres-leches.060370b9d341b077e15e..jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/tres-leches.jpg?");

/***/ }),

/***/ "./src/assets/x-twitter-brands-solid.svg":
/*!***********************************************!*\
  !*** ./src/assets/x-twitter-brands-solid.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/x-twitter-brands-solid.9354bb618cf36e9a60b2..svg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/x-twitter-brands-solid.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;