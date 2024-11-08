/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "PT Sans", sans-serif;
  height: 100vh;
  width: 100vw;
  background: #222;
  color: #ccc;
}

canvas {
  border: 3px solid #666666;
}

.game {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  height: 100%;
}
.game--with-layer {
  border-color: indianred;
}
.game__title {
  text-transform: lowercase;
}
.game__title span + span {
  margin-left: 10px;
}
.game__score {
  color: #ffffff;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss"],"names":[],"mappings":"AAMA;;EAEI,SAAA;EACA,UAAA;AALJ;;AAQA;EACI,kCAAA;EACA,aAAA;EACA,YAAA;EACA,gBAde;EAef,WAdI;AASR;;AAQA;EACI,yBAAA;AALJ;;AAQA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;AALJ;AAOI;EACI,uBAAA;AALR;AAQI;EACI,yBAAA;AANR;AAQQ;EACI,iBAAA;AANZ;AAUI;EACI,cAAA;AARR","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/js/layer.js":
/*!*************************!*\
  !*** ./src/js/layer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layer)
/* harmony export */ });
class Layer {
    constructor(canvas, options = {}) {
        this.canvas = document.getElementById(canvas);
        this.scoreContainer = document.getElementById('score');

        this.options = Object.assign(
            {},
            {
                blockSize: 10,
                height: 300,
                width: 300,
                showGrid: false,
                renderFullBlock: false,
            },
            options
        );

        if (
            this.options.height % this.options.blockSize !== 0 ||
            this.options.width % this.options.blockSize !== 0
        ) {
            throw new Error(
                'The canvas height and width should be devided entirely by blockSize property'
            );
        }

        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d');
        } else {
            throw new Error('Browser does not support canvas API');
        }
    }

    init() {
        this.initLayout();
        if (this.options.showGrid === true && !this.options.renderFullBlock) {
            this.initGrid();
        }
    }

    initLayout() {
        this.canvas.height = this.options.height;
        this.canvas.width = this.options.width;
    }

    initGrid() {
        const context = this.getContext();
        context.beginPath();

        for (
            let i = 0;
            i < this.canvas.width - this.blockSize;
            i += this.blockSize
        ) {
            context.moveTo(i + this.blockSize, 0);
            context.lineTo(i + this.blockSize, this.canvas.height);
        }

        for (
            let i = 0;
            i < this.canvas.height - this.blockSize;
            i += this.blockSize
        ) {
            context.moveTo(0, this.blockSize + i);
            context.lineTo(
                this.canvas.width + this.blockSize,
                this.blockSize + i
            );
        }

        context.strokeStyle = '#3a3a3a';
        context.stroke();
    }

    getContext() {
        return this.ctx;
    }

    renderPoint(obj) {
        this.ctx.fillStyle = obj.color;
        const rect = {
            x: obj.x * this.blockSize,
            y: obj.y * this.blockSize,
            width: this.blockSize,
            height: this.blockSize,
        };
        if (!this.options.renderFullBlock) {
            rect.x += 1;
            rect.y += 1;
            rect.width -= 2;
            rect.height -= 2;
        }
        this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }

    clearRect(obj) {
        const rect = {
            x: obj.x * this.blockSize,
            y: obj.y * this.blockSize,
            width: this.blockSize,
            height: this.blockSize,
        };
        if (!this.options.renderFullBlock) {
            rect.x += 1;
            rect.y += 1;
            rect.width -= 2;
            rect.height -= 2;
        }
        this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    }

    renderScore(score) {
        this.scoreContainer.innerHTML = score;
    }

    get blockSize() {
        return this.options.blockSize;
    }
}


/***/ }),

/***/ "./src/js/point.js":
/*!*************************!*\
  !*** ./src/js/point.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
class Point {
    constructor(x, y, color = 'black') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    getCoords() {
        return { x: this.x, y: this.y };
    }

    getColor() {
        return this.color;
    }
}


/***/ }),

/***/ "./src/js/snake.js":
/*!*************************!*\
  !*** ./src/js/snake.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snake)
/* harmony export */ });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/js/point.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/js/util.js");



const _initialSpeed = 1000 / 10;
let _objects = [];
const isBackDirection = function (type, currentDirection) {
    return (
        (currentDirection === 'left' && type === 'right') ||
        (currentDirection === 'right' && type === 'left') ||
        (currentDirection === 'up' && type === 'down') ||
        (currentDirection === 'down' && type === 'up')
    );
};
const BUTTONS = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    RESET: 32,
};
const dX = 1;
const dY = 1;

class Snake {
    constructor(layer, options = {}) {
        if (!layer || layer == null) {
            throw new Error('Cant get canvas layer');
        }

        this.options = Object.assign(
            {},
            {
                speed: _initialSpeed,
                snakeColor: '#c3c3c3',
                foodColor: 'red',
                startlen: 5,
                resetAfterEnd: false,
                noLayerCollision: false,
            },
            options
        );

        this.interval = '';
        this.speed = this.options.speed;
        this.direction = 'right';
        this.score = 0;
        this.startlen = this.options.startlen;
        this.changeDirection = 0;
        this.limitChangeDirection = 10;
        this.stepY = 1;
        this.stepX = 1;
        this.layer = layer;
        this.food = null;
        this.resetAfterEnd = this.options.resetAfterEnd;

        const checkButtons = (e) => {
            switch (e.keyCode) {
                case BUTTONS.UP:
                    this.move('up');
                    break;
                case BUTTONS.DOWN:
                    this.move('down');
                    break;
                case BUTTONS.LEFT:
                    this.move('left');
                    break;
                case BUTTONS.RIGHT:
                    this.move('right');
                    break;
                case BUTTONS.RESET:
                    this.reset();
                    break;
                default:
                    console.log('This command not found!');
                    break;
            }
        };

        document.addEventListener('keydown', checkButtons, false);
    }

    init() {
        if (this.options.noLayerCollision === false) {
            this.layer.canvas.classList.add('game--with-layer');
        }

        this.createSnake();
        this.layer.renderScore(0);
        this.setSpeed(this.getSpeed());
        this.addFood();

        try {
            if (_objects.length === 0) {
                throw new Error(
                    'you should add some objects in snake before init'
                );
            }
            if (this.food == null) {
                throw new Error(
                    'you should add food object in snake before init'
                );
            }
            if (
                this.direction == null &&
                _util__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(this.move[this.direction])
            ) {
                throw new Error('you should define direction before init');
            }
        } catch (e) {
            console.error(e);
        }

        // let's go
        // render food
        this.renderFood();
        this.start();
        this.stoped = false;
    }

    start() {
        this.render();
        this.interval = setInterval(() => {
            this.step();
            this.render();
        }, this.getSpeed());
    }

    step() {
        this.move();
        if (!this.stoped) {
            this.update();
        }
    }

    stop() {
        this.stoped = true;
        clearInterval(this.interval);
        if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(this['right'])) {
            this['right']();
        }
        console.log('Game is over');
    }

    reset() {
        this.stop();
        if (!this.resetAfterEnd) {
            return;
        }
        this.clearScr();
        _objects = [];
        this.speed = null;
        this.food = null;
        this.score = 0;
        this.direction = 'right';

        this.addFood();
        this.init();
    }

    setSpeed(value) {
        this.speed = this.speed != null ? value : this.options.speed;
    }

    getSpeed() {
        return this.speed == null ? this.options.speed : this.speed;
    }

    createSnake() {
        for (var i = 0; i < this.startlen; i++) {
            this.add(new _point__WEBPACK_IMPORTED_MODULE_0__["default"](i, 1, this.options.snakeColor));
        }
    }

    incSpeed() {
        let speed = this.getSpeed();
        if (this.len() % 4 === 0) {
            clearInterval(this.interval);
            if (speed <= this.options.speed && speed > 50) {
                speed -= 5;
                this.setSpeed(speed);
            }
            this.start();
        }
    }

    clearScr() {
        for (var point of _objects) {
            this.layer.clearRect(point);
        }
        this.layer.clearRect(this.food);
    }

    getHead() {
        return _objects[0];
    }

    getTail() {
        const clone = _objects.slice();
        // is it good idea use len of _objects for clone?
        clone.splice(0, 1);
        return clone;
    }

    render() {
        for (var i = 0; i <= this.len(); i++) {
            this.layer.renderPoint(_objects[i]);
        }
    }

    len() {
        return _objects.length - 1;
    }

    remove(index) {
        if (index < this.len() + 1 && index != null) {
            this.layer.clearRect(_objects[index]);
            _objects.splice(index, 1);
        }
    }

    add(obj) {
        if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(obj)) {
            _objects = [..._objects, ...obj];
        } else {
            _objects.unshift(obj);
        }
    }

    eatFood() {
        this.score++;
        this.layer.renderScore(this.score);

        this.addFood();
        this.renderFood();
    }

    checkFood() {
        return (
            this.getHead().x === this.food.x && this.getHead().y === this.food.y
        );
    }

    addFood() {
        const foodCoords = this.generateFoodCoords();
        const foodInSnake = _objects.some(
            (val, key) => val.x === foodCoords.x && val.y === foodCoords.y
        );

        if (foodInSnake) {
            console.log('Food in snake!');
            this.addFood();
            return false;
        }

        this.food = new _point__WEBPACK_IMPORTED_MODULE_0__["default"](
            foodCoords.x,
            foodCoords.y,
            this.options.foodColor
        );
    }

    renderFood() {
        this.layer.renderPoint(this.food);
    }

    up() {
        this.stepY = -dY;
        this.stepX = 0;
    }

    down() {
        this.stepY = dY;
        this.stepX = 0;
    }

    left() {
        this.stepY = 0;
        this.stepX = -dX;
    }

    right() {
        this.stepY = 0;
        this.stepX = dX;
    }

    move(type) {
        let sameDirect = false;

        if (this.checkCollision()) {
            this.reset();
            return;
        }

        // set new direction if exist
        // check same direct and back direction
        if (type != null && this[type] != null) {
            sameDirect = type === this.direction;
            if (sameDirect || isBackDirection(type, this.direction)) {
                return;
            }
            this.direction = type;
        }

        if (!sameDirect && type != null) {
            // this.checkDirectionTimes();
        }
        // change dx and dy
        if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(this[this.direction]) && !sameDirect) {
            this[this.direction]();
        }
    }

    update() {
        // add new head
        const newHead = new _point__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.getHead().x + this.stepX,
            this.getHead().y + this.stepY,
            this.options.snakeColor
        );

        if (
            this.checkCollisionWithLayer(newHead) &&
            this.options.noLayerCollision
        ) {
            const verticalBlockSize =
                this.layer.canvas.height / this.layer.blockSize;
            const horizontalBlockSize =
                this.layer.canvas.width / this.layer.blockSize;

            newHead.x =
                newHead.x < 0
                    ? horizontalBlockSize - -newHead.x
                    : Math.abs(newHead.x % horizontalBlockSize);

            newHead.y =
                newHead.y < 0
                    ? verticalBlockSize - -newHead.y
                    : Math.abs(newHead.y % verticalBlockSize);
        }

        if (this.checkFood()) {
            this.eatFood();
            this.incSpeed();
        } else {
            this.remove(this.len());
        }

        this.add(newHead);
    }

    checkDirectionTimes() {
        if (this.changeDirection < this.limitChangeDirection) {
            this.changeDirection++;
            console.log(
                'Осталось попыток: ',
                this.limitChangeDirection - this.changeDirection
            );
        } else {
            this.reset();
        }
    }

    checkItselfCollision(head, tail) {
        return (
            _util__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(tail) &&
            tail.some((item) => head.x === item.x && head.y === item.y)
        );
    }

    checkCollisionWithLayer(head) {
        const canvas = this.layer.canvas;
        const blockSize = this.layer.blockSize;

        return (
            head.x * blockSize + blockSize > canvas.width ||
            head.y * blockSize + blockSize > canvas.height ||
            head.x < 0 ||
            head.y < 0
        );
    }

    checkCollision() {
        const head = this.getHead();
        const tail = this.getTail();

        return (
            this.checkItselfCollision(head, tail) ||
            (this.checkCollisionWithLayer(head) &&
                !this.options.noLayerCollision)
        );
    }

    generateFoodCoords() {
        const maxX = this.layer.canvas.width / this.layer.blockSize;
        const maxY = this.layer.canvas.height / this.layer.blockSize;

        return {
            x: _util__WEBPACK_IMPORTED_MODULE_1__["default"].randomMinMax(0, maxX),
            y: _util__WEBPACK_IMPORTED_MODULE_1__["default"].randomMinMax(0, maxY),
        };
    }
}


/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Util)
/* harmony export */ });
class Util {
    static type(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }

    static isArray(obj) {
        return Util.type(obj) === 'Array';
    }

    static isFunction(obj) {
        return Util.type(obj) === 'Function';
    }

    static randomMinMax(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer */ "./src/js/layer.js");
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ "./src/js/snake.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");




window.addEventListener('DOMContentLoaded', () => {
    try {
        const layer = new _layer__WEBPACK_IMPORTED_MODULE_0__["default"]('canvas', {
            showGrid: true,
            height: 300,
            width: 510,
            blockSize: 15,
            renderFullBlock: false,
        });
        const snake = new _snake__WEBPACK_IMPORTED_MODULE_1__["default"](layer, {
            foodColor: 'lightgreen',
            snakeColor: 'white',
            resetAfterEnd: true,
            noLayerCollision: true,
        });

        layer.init();
        snake.init();
    } catch (e) {
        console.error(e);
        alert(e.message);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWUsNkNBQUk7QUFDbkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqWmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQTtBQUNBOztBQUU1QjtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3NuYWtlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanNzbmFrZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanNzbmFrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanNzbmFrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9zcmMvanMvbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vanNzbmFrZS8uL3NyYy9qcy9wb2ludC5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vc3JjL2pzL3NuYWtlLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9zcmMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzc25ha2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanNzbmFrZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNzbmFrZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzc25ha2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc3NuYWtlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBjb2xvcjogI2NjYztcbn1cblxuY2FudmFzIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzY2NjY2Njtcbn1cblxuLmdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ2FtZS0td2l0aC1sYXllciB7XG4gIGJvcmRlci1jb2xvcjogaW5kaWFucmVkO1xufVxuLmdhbWVfX3RpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5nYW1lX190aXRsZSBzcGFuICsgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmdhbWVfX3Njb3JlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BOztFQUVJLFNBQUE7RUFDQSxVQUFBO0FBTEo7O0FBUUE7RUFDSSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBZGU7RUFlZixXQWRJO0FBU1I7O0FBUUE7RUFDSSx5QkFBQTtBQUxKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTEo7QUFPSTtFQUNJLHVCQUFBO0FBTFI7QUFRSTtFQUNJLHlCQUFBO0FBTlI7QUFRUTtFQUNJLGlCQUFBO0FBTlo7QUFVSTtFQUNJLGNBQUE7QUFSUlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgICAgICAgdGhpcy5zY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBibG9ja1NpemU6IDEwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgc2hvd0dyaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbmRlckZ1bGxCbG9jazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgJSB0aGlzLm9wdGlvbnMuYmxvY2tTaXplICE9PSAwIHx8XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggJSB0aGlzLm9wdGlvbnMuYmxvY2tTaXplICE9PSAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdUaGUgY2FudmFzIGhlaWdodCBhbmQgd2lkdGggc2hvdWxkIGJlIGRldmlkZWQgZW50aXJlbHkgYnkgYmxvY2tTaXplIHByb3BlcnR5J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjYW52YXMgQVBJJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluaXRMYXlvdXQoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93R3JpZCA9PT0gdHJ1ZSAmJiAhdGhpcy5vcHRpb25zLnJlbmRlckZ1bGxCbG9jaykge1xuICAgICAgICAgICAgdGhpcy5pbml0R3JpZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdExheW91dCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgfVxuXG4gICAgaW5pdEdyaWQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgaSA8IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgICAgICBpICs9IHRoaXMuYmxvY2tTaXplXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oaSArIHRoaXMuYmxvY2tTaXplLCAwKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGkgKyB0aGlzLmJsb2NrU2l6ZSwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBpIDwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgICAgICBpICs9IHRoaXMuYmxvY2tTaXplXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oMCwgdGhpcy5ibG9ja1NpemUgKyBpKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKFxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoICsgdGhpcy5ibG9ja1NpemUsXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja1NpemUgKyBpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjM2EzYTNhJztcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdHg7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9pbnQob2JqKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IG9iai5jb2xvcjtcbiAgICAgICAgY29uc3QgcmVjdCA9IHtcbiAgICAgICAgICAgIHg6IG9iai54ICogdGhpcy5ibG9ja1NpemUsXG4gICAgICAgICAgICB5OiBvYmoueSAqIHRoaXMuYmxvY2tTaXplLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuYmxvY2tTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmJsb2NrU2l6ZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmVuZGVyRnVsbEJsb2NrKSB7XG4gICAgICAgICAgICByZWN0LnggKz0gMTtcbiAgICAgICAgICAgIHJlY3QueSArPSAxO1xuICAgICAgICAgICAgcmVjdC53aWR0aCAtPSAyO1xuICAgICAgICAgICAgcmVjdC5oZWlnaHQgLT0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChyZWN0LngsIHJlY3QueSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNsZWFyUmVjdChvYmopIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHtcbiAgICAgICAgICAgIHg6IG9iai54ICogdGhpcy5ibG9ja1NpemUsXG4gICAgICAgICAgICB5OiBvYmoueSAqIHRoaXMuYmxvY2tTaXplLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuYmxvY2tTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmJsb2NrU2l6ZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmVuZGVyRnVsbEJsb2NrKSB7XG4gICAgICAgICAgICByZWN0LnggKz0gMTtcbiAgICAgICAgICAgIHJlY3QueSArPSAxO1xuICAgICAgICAgICAgcmVjdC53aWR0aCAtPSAyO1xuICAgICAgICAgICAgcmVjdC5oZWlnaHQgLT0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QocmVjdC54LCByZWN0LnksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZW5kZXJTY29yZShzY29yZSkge1xuICAgICAgICB0aGlzLnNjb3JlQ29udGFpbmVyLmlubmVySFRNTCA9IHNjb3JlO1xuICAgIH1cblxuICAgIGdldCBibG9ja1NpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYmxvY2tTaXplO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvciA9ICdibGFjaycpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIGdldENvb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY29uc3QgX2luaXRpYWxTcGVlZCA9IDEwMDAgLyAxMDtcbmxldCBfb2JqZWN0cyA9IFtdO1xuY29uc3QgaXNCYWNrRGlyZWN0aW9uID0gZnVuY3Rpb24gKHR5cGUsIGN1cnJlbnREaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoY3VycmVudERpcmVjdGlvbiA9PT0gJ2xlZnQnICYmIHR5cGUgPT09ICdyaWdodCcpIHx8XG4gICAgICAgIChjdXJyZW50RGlyZWN0aW9uID09PSAncmlnaHQnICYmIHR5cGUgPT09ICdsZWZ0JykgfHxcbiAgICAgICAgKGN1cnJlbnREaXJlY3Rpb24gPT09ICd1cCcgJiYgdHlwZSA9PT0gJ2Rvd24nKSB8fFxuICAgICAgICAoY3VycmVudERpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHR5cGUgPT09ICd1cCcpXG4gICAgKTtcbn07XG5jb25zdCBCVVRUT05TID0ge1xuICAgIFVQOiAzOCxcbiAgICBET1dOOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBSSUdIVDogMzksXG4gICAgUkVTRVQ6IDMyLFxufTtcbmNvbnN0IGRYID0gMTtcbmNvbnN0IGRZID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKGxheWVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCFsYXllciB8fCBsYXllciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnQgZ2V0IGNhbnZhcyBsYXllcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNwZWVkOiBfaW5pdGlhbFNwZWVkLFxuICAgICAgICAgICAgICAgIHNuYWtlQ29sb3I6ICcjYzNjM2MzJyxcbiAgICAgICAgICAgICAgICBmb29kQ29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgICAgIHN0YXJ0bGVuOiA1LFxuICAgICAgICAgICAgICAgIHJlc2V0QWZ0ZXJFbmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vTGF5ZXJDb2xsaXNpb246IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmludGVydmFsID0gJyc7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm9wdGlvbnMuc3BlZWQ7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRsZW4gPSB0aGlzLm9wdGlvbnMuc3RhcnRsZW47XG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5saW1pdENoYW5nZURpcmVjdGlvbiA9IDEwO1xuICAgICAgICB0aGlzLnN0ZXBZID0gMTtcbiAgICAgICAgdGhpcy5zdGVwWCA9IDE7XG4gICAgICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICAgICAgdGhpcy5mb29kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNldEFmdGVyRW5kID0gdGhpcy5vcHRpb25zLnJlc2V0QWZ0ZXJFbmQ7XG5cbiAgICAgICAgY29uc3QgY2hlY2tCdXR0b25zID0gKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBCVVRUT05TLlVQOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmUoJ3VwJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQlVUVE9OUy5ET1dOOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmUoJ2Rvd24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBCVVRUT05TLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSgnbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEJVVFRPTlMuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSgncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBCVVRUT05TLlJFU0VUOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGNvbW1hbmQgbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tCdXR0b25zLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub0xheWVyQ29sbGlzaW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5sYXllci5jYW52YXMuY2xhc3NMaXN0LmFkZCgnZ2FtZS0td2l0aC1sYXllcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTbmFrZSgpO1xuICAgICAgICB0aGlzLmxheWVyLnJlbmRlclNjb3JlKDApO1xuICAgICAgICB0aGlzLnNldFNwZWVkKHRoaXMuZ2V0U3BlZWQoKSk7XG4gICAgICAgIHRoaXMuYWRkRm9vZCgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX29iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAneW91IHNob3VsZCBhZGQgc29tZSBvYmplY3RzIGluIHNuYWtlIGJlZm9yZSBpbml0J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb29kID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICd5b3Ugc2hvdWxkIGFkZCBmb29kIG9iamVjdCBpbiBzbmFrZSBiZWZvcmUgaW5pdCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBVdGlsLmlzRnVuY3Rpb24odGhpcy5tb3ZlW3RoaXMuZGlyZWN0aW9uXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneW91IHNob3VsZCBkZWZpbmUgZGlyZWN0aW9uIGJlZm9yZSBpbml0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQncyBnb1xuICAgICAgICAvLyByZW5kZXIgZm9vZFxuICAgICAgICB0aGlzLnJlbmRlckZvb2QoKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLnN0b3BlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGVwKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCB0aGlzLmdldFNwZWVkKCkpO1xuICAgIH1cblxuICAgIHN0ZXAoKSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBpZiAoIXRoaXMuc3RvcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zdG9wZWQgPSB0cnVlO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICBpZiAoVXRpbC5pc0Z1bmN0aW9uKHRoaXNbJ3JpZ2h0J10pKSB7XG4gICAgICAgICAgICB0aGlzWydyaWdodCddKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgaXMgb3ZlcicpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgaWYgKCF0aGlzLnJlc2V0QWZ0ZXJFbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyU2NyKCk7XG4gICAgICAgIF9vYmplY3RzID0gW107XG4gICAgICAgIHRoaXMuc3BlZWQgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2QgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuXG4gICAgICAgIHRoaXMuYWRkRm9vZCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzZXRTcGVlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zcGVlZCAhPSBudWxsID8gdmFsdWUgOiB0aGlzLm9wdGlvbnMuc3BlZWQ7XG4gICAgfVxuXG4gICAgZ2V0U3BlZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkID09IG51bGwgPyB0aGlzLm9wdGlvbnMuc3BlZWQgOiB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIGNyZWF0ZVNuYWtlKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhcnRsZW47IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGQobmV3IFBvaW50KGksIDEsIHRoaXMub3B0aW9ucy5zbmFrZUNvbG9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNTcGVlZCgpIHtcbiAgICAgICAgbGV0IHNwZWVkID0gdGhpcy5nZXRTcGVlZCgpO1xuICAgICAgICBpZiAodGhpcy5sZW4oKSAlIDQgPT09IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgICAgICBpZiAoc3BlZWQgPD0gdGhpcy5vcHRpb25zLnNwZWVkICYmIHNwZWVkID4gNTApIHtcbiAgICAgICAgICAgICAgICBzcGVlZCAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3BlZWQoc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTY3IoKSB7XG4gICAgICAgIGZvciAodmFyIHBvaW50IG9mIF9vYmplY3RzKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLmNsZWFyUmVjdChwb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllci5jbGVhclJlY3QodGhpcy5mb29kKTtcbiAgICB9XG5cbiAgICBnZXRIZWFkKCkge1xuICAgICAgICByZXR1cm4gX29iamVjdHNbMF07XG4gICAgfVxuXG4gICAgZ2V0VGFpbCgpIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBfb2JqZWN0cy5zbGljZSgpO1xuICAgICAgICAvLyBpcyBpdCBnb29kIGlkZWEgdXNlIGxlbiBvZiBfb2JqZWN0cyBmb3IgY2xvbmU/XG4gICAgICAgIGNsb25lLnNwbGljZSgwLCAxKTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5sZW4oKTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbmRlclBvaW50KF9vYmplY3RzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxlbigpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IHRoaXMubGVuKCkgKyAxICYmIGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuY2xlYXJSZWN0KF9vYmplY3RzW2luZGV4XSk7XG4gICAgICAgICAgICBfb2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKG9iaikge1xuICAgICAgICBpZiAoVXRpbC5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIF9vYmplY3RzID0gWy4uLl9vYmplY3RzLCAuLi5vYmpdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX29iamVjdHMudW5zaGlmdChvYmopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWF0Rm9vZCgpIHtcbiAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgICB0aGlzLmxheWVyLnJlbmRlclNjb3JlKHRoaXMuc2NvcmUpO1xuXG4gICAgICAgIHRoaXMuYWRkRm9vZCgpO1xuICAgICAgICB0aGlzLnJlbmRlckZvb2QoKTtcbiAgICB9XG5cbiAgICBjaGVja0Zvb2QoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmdldEhlYWQoKS54ID09PSB0aGlzLmZvb2QueCAmJiB0aGlzLmdldEhlYWQoKS55ID09PSB0aGlzLmZvb2QueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZEZvb2QoKSB7XG4gICAgICAgIGNvbnN0IGZvb2RDb29yZHMgPSB0aGlzLmdlbmVyYXRlRm9vZENvb3JkcygpO1xuICAgICAgICBjb25zdCBmb29kSW5TbmFrZSA9IF9vYmplY3RzLnNvbWUoXG4gICAgICAgICAgICAodmFsLCBrZXkpID0+IHZhbC54ID09PSBmb29kQ29vcmRzLnggJiYgdmFsLnkgPT09IGZvb2RDb29yZHMueVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChmb29kSW5TbmFrZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Zvb2QgaW4gc25ha2UhJyk7XG4gICAgICAgICAgICB0aGlzLmFkZEZvb2QoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9vZCA9IG5ldyBQb2ludChcbiAgICAgICAgICAgIGZvb2RDb29yZHMueCxcbiAgICAgICAgICAgIGZvb2RDb29yZHMueSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb29kQ29sb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGb29kKCkge1xuICAgICAgICB0aGlzLmxheWVyLnJlbmRlclBvaW50KHRoaXMuZm9vZCk7XG4gICAgfVxuXG4gICAgdXAoKSB7XG4gICAgICAgIHRoaXMuc3RlcFkgPSAtZFk7XG4gICAgICAgIHRoaXMuc3RlcFggPSAwO1xuICAgIH1cblxuICAgIGRvd24oKSB7XG4gICAgICAgIHRoaXMuc3RlcFkgPSBkWTtcbiAgICAgICAgdGhpcy5zdGVwWCA9IDA7XG4gICAgfVxuXG4gICAgbGVmdCgpIHtcbiAgICAgICAgdGhpcy5zdGVwWSA9IDA7XG4gICAgICAgIHRoaXMuc3RlcFggPSAtZFg7XG4gICAgfVxuXG4gICAgcmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3RlcFkgPSAwO1xuICAgICAgICB0aGlzLnN0ZXBYID0gZFg7XG4gICAgfVxuXG4gICAgbW92ZSh0eXBlKSB7XG4gICAgICAgIGxldCBzYW1lRGlyZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IG5ldyBkaXJlY3Rpb24gaWYgZXhpc3RcbiAgICAgICAgLy8gY2hlY2sgc2FtZSBkaXJlY3QgYW5kIGJhY2sgZGlyZWN0aW9uXG4gICAgICAgIGlmICh0eXBlICE9IG51bGwgJiYgdGhpc1t0eXBlXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzYW1lRGlyZWN0ID0gdHlwZSA9PT0gdGhpcy5kaXJlY3Rpb247XG4gICAgICAgICAgICBpZiAoc2FtZURpcmVjdCB8fCBpc0JhY2tEaXJlY3Rpb24odHlwZSwgdGhpcy5kaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzYW1lRGlyZWN0ICYmIHR5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdGhpcy5jaGVja0RpcmVjdGlvblRpbWVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hhbmdlIGR4IGFuZCBkeVxuICAgICAgICBpZiAoVXRpbC5pc0Z1bmN0aW9uKHRoaXNbdGhpcy5kaXJlY3Rpb25dKSAmJiAhc2FtZURpcmVjdCkge1xuICAgICAgICAgICAgdGhpc1t0aGlzLmRpcmVjdGlvbl0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8gYWRkIG5ldyBoZWFkXG4gICAgICAgIGNvbnN0IG5ld0hlYWQgPSBuZXcgUG9pbnQoXG4gICAgICAgICAgICB0aGlzLmdldEhlYWQoKS54ICsgdGhpcy5zdGVwWCxcbiAgICAgICAgICAgIHRoaXMuZ2V0SGVhZCgpLnkgKyB0aGlzLnN0ZXBZLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNuYWtlQ29sb3JcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aExheWVyKG5ld0hlYWQpICYmXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubm9MYXllckNvbGxpc2lvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsQmxvY2tTaXplID1cbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmxheWVyLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxCbG9ja1NpemUgPVxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIuY2FudmFzLndpZHRoIC8gdGhpcy5sYXllci5ibG9ja1NpemU7XG5cbiAgICAgICAgICAgIG5ld0hlYWQueCA9XG4gICAgICAgICAgICAgICAgbmV3SGVhZC54IDwgMFxuICAgICAgICAgICAgICAgICAgICA/IGhvcml6b250YWxCbG9ja1NpemUgLSAtbmV3SGVhZC54XG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobmV3SGVhZC54ICUgaG9yaXpvbnRhbEJsb2NrU2l6ZSk7XG5cbiAgICAgICAgICAgIG5ld0hlYWQueSA9XG4gICAgICAgICAgICAgICAgbmV3SGVhZC55IDwgMFxuICAgICAgICAgICAgICAgICAgICA/IHZlcnRpY2FsQmxvY2tTaXplIC0gLW5ld0hlYWQueVxuICAgICAgICAgICAgICAgICAgICA6IE1hdGguYWJzKG5ld0hlYWQueSAlIHZlcnRpY2FsQmxvY2tTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrRm9vZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmVhdEZvb2QoKTtcbiAgICAgICAgICAgIHRoaXMuaW5jU3BlZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMubGVuKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGQobmV3SGVhZCk7XG4gICAgfVxuXG4gICAgY2hlY2tEaXJlY3Rpb25UaW1lcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGlyZWN0aW9uIDwgdGhpcy5saW1pdENoYW5nZURpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24rKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICfQntGB0YLQsNC70L7RgdGMINC/0L7Qv9GL0YLQvtC6OiAnLFxuICAgICAgICAgICAgICAgIHRoaXMubGltaXRDaGFuZ2VEaXJlY3Rpb24gLSB0aGlzLmNoYW5nZURpcmVjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSXRzZWxmQ29sbGlzaW9uKGhlYWQsIHRhaWwpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFV0aWwuaXNBcnJheSh0YWlsKSAmJlxuICAgICAgICAgICAgdGFpbC5zb21lKChpdGVtKSA9PiBoZWFkLnggPT09IGl0ZW0ueCAmJiBoZWFkLnkgPT09IGl0ZW0ueSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGhMYXllcihoZWFkKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMubGF5ZXIuY2FudmFzO1xuICAgICAgICBjb25zdCBibG9ja1NpemUgPSB0aGlzLmxheWVyLmJsb2NrU2l6ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaGVhZC54ICogYmxvY2tTaXplICsgYmxvY2tTaXplID4gY2FudmFzLndpZHRoIHx8XG4gICAgICAgICAgICBoZWFkLnkgKiBibG9ja1NpemUgKyBibG9ja1NpemUgPiBjYW52YXMuaGVpZ2h0IHx8XG4gICAgICAgICAgICBoZWFkLnggPCAwIHx8XG4gICAgICAgICAgICBoZWFkLnkgPCAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLmdldEhlYWQoKTtcbiAgICAgICAgY29uc3QgdGFpbCA9IHRoaXMuZ2V0VGFpbCgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmNoZWNrSXRzZWxmQ29sbGlzaW9uKGhlYWQsIHRhaWwpIHx8XG4gICAgICAgICAgICAodGhpcy5jaGVja0NvbGxpc2lvbldpdGhMYXllcihoZWFkKSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLm9wdGlvbnMubm9MYXllckNvbGxpc2lvbilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUZvb2RDb29yZHMoKSB7XG4gICAgICAgIGNvbnN0IG1heFggPSB0aGlzLmxheWVyLmNhbnZhcy53aWR0aCAvIHRoaXMubGF5ZXIuYmxvY2tTaXplO1xuICAgICAgICBjb25zdCBtYXhZID0gdGhpcy5sYXllci5jYW52YXMuaGVpZ2h0IC8gdGhpcy5sYXllci5ibG9ja1NpemU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IFV0aWwucmFuZG9tTWluTWF4KDAsIG1heFgpLFxuICAgICAgICAgICAgeTogVXRpbC5yYW5kb21NaW5NYXgoMCwgbWF4WSksXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG4gICAgc3RhdGljIHR5cGUob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQXJyYXkob2JqKSB7XG4gICAgICAgIHJldHVybiBVdGlsLnR5cGUob2JqKSA9PT0gJ0FycmF5JztcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNGdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIFV0aWwudHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21NaW5NYXgobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTGF5ZXIgZnJvbSAnLi9sYXllcic7XG5pbXBvcnQgU25ha2UgZnJvbSAnLi9zbmFrZSc7XG5pbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IExheWVyKCdjYW52YXMnLCB7XG4gICAgICAgICAgICBzaG93R3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgICAgICAgd2lkdGg6IDUxMCxcbiAgICAgICAgICAgIGJsb2NrU2l6ZTogMTUsXG4gICAgICAgICAgICByZW5kZXJGdWxsQmxvY2s6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc25ha2UgPSBuZXcgU25ha2UobGF5ZXIsIHtcbiAgICAgICAgICAgIGZvb2RDb2xvcjogJ2xpZ2h0Z3JlZW4nLFxuICAgICAgICAgICAgc25ha2VDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIHJlc2V0QWZ0ZXJFbmQ6IHRydWUsXG4gICAgICAgICAgICBub0xheWVyQ29sbGlzaW9uOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBsYXllci5pbml0KCk7XG4gICAgICAgIHNuYWtlLmluaXQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=