/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slider{\n    max-width: 90%;\n    position: relative;\n    margin: auto;\n    height: 300px;\n    margin-bottom: 15px;\n}\n\n.slider #mainImageDiv img {\n    object-fit: cover;\n    width: 100%;\n    height: 300px;\n    border: none !important;\n    box-shadow: none !important;\n}\n\n.slider .prev, .slider .next {\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: white;\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n}\n.slider .next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n.slider .prev:hover,\n.slider .next:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n.slider_items {\n    display: flex;\n    justify-content: center;\n}\n.slider_item{\n    cursor: pointer;\n    height: 120px;\n    width: 120px;\n    margin: 0 2px;\n    background-color: #ddd;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n    \n}\n\n.bigImage{\n    height: 150px;\n    width: 150px;\n    \n}\n\n\n\n.slider .item {\n    -webkit-animation-name: fade;\n    -webkit-animation-duration: 1.5s;\n    animation-name: fade;\n    animation-duration: 1.5s;\n}\n@-webkit-keyframes fade {\n    from {\n        opacity: .4\n    }\n    to {\n        opacity: 1\n    }\n}\n@keyframes fade {\n    from {\n        opacity: .4\n    }\n    to {\n        opacity: 1\n    }\n}\n\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,0BAA0B;AAC9B;AACA;IACI,QAAQ;IACR,0BAA0B;AAC9B;;AAEA;;IAEI,oCAAoC;AACxC;;;AAGA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,sCAAsC;;AAE1C;;AAEA;IACI,aAAa;IACb,YAAY;;AAEhB;;;;AAIA;IACI,4BAA4B;IAC5B,gCAAgC;IAChC,oBAAoB;IACpB,wBAAwB;AAC5B;AACA;IACI;QACI;IACJ;IACA;QACI;IACJ;AACJ;AACA;IACI;QACI;IACJ;IACA;QACI;IACJ;AACJ","sourcesContent":[".slider{\n    max-width: 90%;\n    position: relative;\n    margin: auto;\n    height: 300px;\n    margin-bottom: 15px;\n}\n\n.slider #mainImageDiv img {\n    object-fit: cover;\n    width: 100%;\n    height: 300px;\n    border: none !important;\n    box-shadow: none !important;\n}\n\n.slider .prev, .slider .next {\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: white;\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n}\n.slider .next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n.slider .prev:hover,\n.slider .next:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n.slider_items {\n    display: flex;\n    justify-content: center;\n}\n.slider_item{\n    cursor: pointer;\n    height: 120px;\n    width: 120px;\n    margin: 0 2px;\n    background-color: #ddd;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n    \n}\n\n.bigImage{\n    height: 150px;\n    width: 150px;\n    \n}\n\n\n\n.slider .item {\n    -webkit-animation-name: fade;\n    -webkit-animation-duration: 1.5s;\n    animation-name: fade;\n    animation-duration: 1.5s;\n}\n@-webkit-keyframes fade {\n    from {\n        opacity: .4\n    }\n    to {\n        opacity: 1\n    }\n}\n@keyframes fade {\n    from {\n        opacity: .4\n    }\n    to {\n        opacity: 1\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index1 */ "./src/index1.js");


var index = 0;

var slide = function slide(n) {
  var mainImage = document.getElementById("mainImage");

  if (n > _index1__WEBPACK_IMPORTED_MODULE_1__["end"]) {
    index = 0;
  } else if (n < _index1__WEBPACK_IMPORTED_MODULE_1__["start"]) {
    index = _index1__WEBPACK_IMPORTED_MODULE_1__["imagesArray"].length;
  }

  mainImage.setAttribute('src', _index1__WEBPACK_IMPORTED_MODULE_1__["imagesArray"][index]);
  slideCarousel(index);
};

var slideCarousel = function slideCarousel(n) {
  var images = document.getElementsByClassName("slider_item");
  var first = index - 2;
  var second = index - 1;
  var beforlast = index + 1;
  var last = index + 2;

  if (index == _index1__WEBPACK_IMPORTED_MODULE_1__["start"]) {
    first = _index1__WEBPACK_IMPORTED_MODULE_1__["end"] - 2;
    second = _index1__WEBPACK_IMPORTED_MODULE_1__["end"] - 1;
  }

  if (index == _index1__WEBPACK_IMPORTED_MODULE_1__["start"] + 1) {
    first = _index1__WEBPACK_IMPORTED_MODULE_1__["end"] - 1;
  }

  if (index == _index1__WEBPACK_IMPORTED_MODULE_1__["end"]) {
    last = _index1__WEBPACK_IMPORTED_MODULE_1__["start"] + 2;
    beforlast = _index1__WEBPACK_IMPORTED_MODULE_1__["start"] + 1;
  }

  if (index == _index1__WEBPACK_IMPORTED_MODULE_1__["end"] - 1) {
    last = _index1__WEBPACK_IMPORTED_MODULE_1__["start"];
  }

  images[0].setAttribute('src', _index1__WEBPACK_IMPORTED_MODULE_1__["imagesArray"][first]);
  images[1].setAttribute('src', _index1__WEBPACK_IMPORTED_MODULE_1__["imagesArray"][second]);
  images[2].setAttribute('src', _index1__WEBPACK_IMPORTED_MODULE_1__["imagesArray"][index]);
  images[3].setAttribute('src', _index1__WEBPACK_IMPORTED_MODULE_1__["imagesArray"][beforlast]);
  images[4].setAttribute('src', _index1__WEBPACK_IMPORTED_MODULE_1__["imagesArray"][last]);
};

var slideLeftRight = function slideLeftRight() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '+';
  index = direction ? index + 1 : index - 1;
  slide(index);
};

setInterval(slideLeftRight, 3000);

/***/ }),

/***/ "./src/index1.js":
/*!***********************!*\
  !*** ./src/index1.js ***!
  \***********************/
/*! exports provided: imagesArray, start, end */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagesArray", function() { return imagesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
var imagesArray = ['https://gmsrp.cachefly.net/images/20/04/11/cdd5233f8a1f5e37e55ca7e1212dd63b/960.jpg', 'https://gmsrp.cachefly.net/images/19/10/11/ec561ff7cf3054f3bfcaaf393d23adf7/960.jpg', 'https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtt4D_bon1O5kiMapr3MC4HsYifjk53VevXY82_sYfYiFJfI&s', 'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/chelsea-fc-v-west-ham-united-premier-league-5cb238037df23d60a7000001.jpg'];
var start = 0;
var end = imagesArray.length - 1;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map