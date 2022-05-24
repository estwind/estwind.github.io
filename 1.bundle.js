"use strict";
(self["webpackChunktesttask_app"] = self["webpackChunktesttask_app"] || []).push([[1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 4 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 5 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 6 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 9 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 10 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* reset css */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n  border: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* reset css end */\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-size: 16px;\n  font-family: Roboto, sans-serif;\n  background-color: #fff;\n}\n\n.container {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-right: 12px;\n  padding-left: 12px;\n}\n\n.grid-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  row-gap: 24px;\n  margin-right: -12px;\n  margin-left: -12px;\n}\n.grid-col {\n  position: relative;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  max-width: 100%;\n  min-height: 1px;\n  padding-right: 12px;\n  padding-left: 12px;\n}\n@media screen and (max-width: 576px) {\n  .grid-col-xs-24 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n@media screen and (min-width: 576px) {\n  .grid-col-sm-24 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .grid-col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media screen and (min-width: 992px) {\n  .grid-col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .grid-col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n  }\n}\n.grid-col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%;\n}\n.grid-col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.jumbotron {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 100vh;\n  padding: 28px 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.jumbotron__header {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  max-width: 728px;\n  color: #fff;\n  text-align: center;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.jumbotron__header-title {\n  padding: 0 12px;\n  font-size: 3.75rem;\n}\n@media screen and (max-width: 576px) {\n  .jumbotron__header-title {\n    font-size: 3rem;\n  }\n}\n.jumbotron__header-subtext {\n  margin-top: 18px;\n  padding: 0 12px;\n  font-size: 1.25rem;\n}\n\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n.navbar__brand {\n  padding: 12px;\n}\n.navbar__toggler {\n  position: relative;\n  display: none;\n  width: 40px;\n  height: 24px;\n  margin-left: 30px;\n  padding: 0;\n  vertical-align: middle;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n@media screen and (max-width: 576px) {\n  .navbar__toggler {\n    display: inline-block;\n  }\n}\n.navbar__toggler--active .navbar__toggler-inner {\n  -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);\n          transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.navbar__toggler--active .navbar__toggler-inner::before {\n  -webkit-transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);\n          transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);\n  opacity: 0;\n}\n.navbar__toggler--active .navbar__toggler-inner::after {\n  -webkit-transform: translate3d(0, -20px, 0) rotate(-90deg);\n          transform: translate3d(0, -20px, 0) rotate(-90deg);\n}\n.navbar__toggler-inner {\n  top: 2px;\n  display: block;\n  margin-top: -2px;\n  position: absolute;\n  width: 40px;\n  height: 4px;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: 0.15s;\n          transition-duration: 0.15s;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.navbar__toggler-inner::before {\n  top: 10px;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: 0.15s;\n          transition-duration: 0.15s;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n.navbar__toggler-inner::before, .navbar__toggler-inner::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 40px;\n  height: 4px;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: 0.15s;\n          transition-duration: 0.15s;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.navbar__toggler-inner::after {\n  top: 20px;\n}\n.navbar__nav {\n  display: inline-block;\n}\n@media screen and (min-width: 576px) {\n  .navbar__nav--collapsed {\n    display: inline-block;\n  }\n}\n@media screen and (max-width: 576px) {\n  .navbar__nav {\n    position: absolute;\n    top: 64px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  .navbar__nav--collapsed {\n    display: none;\n  }\n}\n@media screen and (max-width: 576px) {\n  .navbar__list {\n    background: #fff;\n  }\n}\n.navbar__list li {\n  display: inline-block;\n}\n@media screen and (max-width: 576px) {\n  .navbar__list li {\n    display: block;\n  }\n}\n.navbar__list-link {\n  display: block;\n  padding: 12px 28px;\n  color: #fff;\n  font-size: 1.125rem;\n  text-decoration: none;\n}\n@media screen and (max-width: 576px) {\n  .navbar__list-link {\n    color: #333;\n  }\n}\n.navbar__cart {\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-left: 12px;\n  padding: 0;\n  vertical-align: middle;\n}\n\n.scroll-button {\n  position: absolute;\n  right: calc(50% - 1.099rem);\n  bottom: 40px;\n  display: block;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  width: 2.188rem;\n  height: 2.188rem;\n  padding: 0;\n  padding: 10px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.products {\n  min-height: 100vh;\n}\n.products__list {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n.products__item {\n  position: relative;\n  padding: 50px 18px 24px;\n  text-align: center;\n  background-color: #f5f6f7;\n  border: 6px solid transparent;\n}\n.products__item img {\n  max-width: 100%;\n}\n.products__item:hover {\n  border-color: #a99b77;\n}\n.products__item-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 1.25rem;\n  color: #424242;\n  font-size: 1.125rem;\n}\n.products__item-name {\n  color: #a99b77;\n  text-transform: uppercase;\n}\n.products__item-select {\n  position: absolute;\n  top: 24px;\n  left: 24px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 3px 20px 3px 3px;\n  color: #424242;\n  font-size: 1rem;\n  text-transform: uppercase;\n  background-color: transparent;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: right;\n  border: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.products__item-select.focus-visible {\n  outline: 2px solid #cbcbcb;\n}\n.products__item-select:focus-visible {\n  outline: 2px solid #cbcbcb;\n}\n.products__filter {\n  padding: 40px 0;\n  background-color: #f5f5f7;\n}\n.products__filter-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 576px) {\n  .products__filter-form {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    gap: 20px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n}\n.products__filter-clear {\n  padding: 20px 10px;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #a99b77;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n/* checkbox */\n.checkbox {\n  position: relative;\n  display: inline-block;\n  margin-right: 40px;\n  padding: 0 0 6px 43px;\n  color: #333;\n  font-size: 1.125rem;\n  line-height: 1.5;\n  text-transform: uppercase;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 22px;\n  height: 22px;\n  background-color: #fff;\n  border: 2px solid #cbcbcb;\n  border-radius: 5px;\n}\n.checkbox__checkmark::after {\n  position: absolute;\n  top: 2px;\n  left: 6px;\n  display: none;\n  width: 6px;\n  height: 11px;\n  border: solid #a99b77;\n  border-width: 0 4px 4px 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  content: \"\";\n}\n.checkbox__input {\n  position: absolute;\n  width: 0;\n  height: 0;\n  cursor: pointer;\n  opacity: 0;\n}\n.checkbox__input.focus-visible ~ .checkbox__checkmark {\n  outline: 2px solid black;\n}\n.checkbox__input:focus-visible ~ .checkbox__checkmark {\n  outline: 2px solid black;\n}\n.checkbox__input:checked ~ .checkbox__checkmark {\n  border-color: #a99b77;\n}\n.checkbox__input:checked ~ .checkbox__checkmark::after {\n  display: block;\n}\n\n.info {\n  padding-top: 24px;\n  padding-bottom: 24px;\n  color: #fff;\n  background-color: #535153;\n}\n.info__img {\n  margin-right: 20px;\n  vertical-align: middle;\n}\n\n.footer {\n  padding: 110px 0;\n  color: #fff;\n  background-color: #414141;\n}\n.footer__title {\n  font-size: 1.25rem;\n  text-transform: uppercase;\n}\n.footer__subtext {\n  max-width: 300px;\n  margin-top: 24px;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n}\n.footer__item-right {\n  text-align: right;\n}\n.footer__nav-item {\n  display: inline-block;\n  padding: 0 4px;\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  border-right: 1px solid #a99b77;\n}\n.footer__nav-item:last-of-type {\n  padding-right: 0;\n  border-right: none;\n}\n.footer__copyright {\n  margin-top: 14px;\n}\n@media screen and (max-width: 576px) {\n  .footer__subtext, .footer__title, .footer__item-right {\n    max-width: none;\n    text-align: center;\n  }\n}\n\n.align-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 12 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 13 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5445ecca1c6a53cdb56.jpg";

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 width=%2720px%27 height=%2712px%27 viewBox=%270 0 20 12%27 version=%271.1%27%3E%3Cg%3E%3Cpath d=%27M 10 7.375 L 5.601562 2.828125 C 5.273438 2.488281 4.742188 2.488281 4.414062 2.828125 C 4.085938 3.164062 4.085938 3.71875 4.414062 4.058594 L 9.363281 9.175781 C 9.539062 9.359375 9.769531 9.441406 10 9.425781 C 10.230469 9.441406 10.460938 9.359375 10.636719 9.175781 L 15.585938 4.058594 C 15.914062 3.71875 15.914062 3.167969 15.585938 2.828125 C 15.257812 2.488281 14.726562 2.488281 14.398438 2.828125 Z M 10 7.375 %27/%3E%3C/g%3E%3C/svg%3E%0A";

/***/ })
]]);