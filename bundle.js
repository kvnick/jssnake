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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss"],"names":[],"mappings":"AAMA;;EAEI,SAAA;EACA,UAAA;AALJ;;AAQA;EACI,kCAAA;EACA,aAAA;EACA,YAAA;EACA,gBAde;EAef,WAdI;AASR;;AAQA;EACI,yBAAA;AALJ;;AAQA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;AALJ;AAOI;EACI,uBAAA;AALR;AAQI;EACI,yBAAA;AANR;AAQQ;EACI,iBAAA;AANZ;AAUI;EACI,cAAA;AARR","sourcesContent":["@use 'sass:color';\n\n$background-color: #222;\n$color: #ccc;\n$darken: color.adjust($color, $lightness: -40%);\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'PT Sans', sans-serif;\n    height: 100vh;\n    width: 100vw;\n    background: $background-color;\n    color: $color;\n}\n\ncanvas {\n    border: 3px solid $darken;\n}\n\n.game {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    height: 100%;\n\n    &--with-layer {\n        border-color: indianred;\n    }\n\n    &__title {\n        text-transform: lowercase;\n\n        span + span {\n            margin-left: 10px;\n        }\n    }\n\n    &__score {\n        color: #ffffff;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0SGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q0QjtBQUNGOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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cy9zdHlsZS5zY3NzIiwid2VicGFjazovL2pzc25ha2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanNzbmFrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanNzbmFrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9zcmMvanMvbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vanNzbmFrZS8uL3NyYy9qcy9wb2ludC5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vc3JjL2pzL3NuYWtlLmpzIiwid2VicGFjazovL2pzc25ha2UvLi9zcmMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly9qc3NuYWtlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL2pzc25ha2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNzbmFrZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qc3NuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc3NuYWtlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNzbmFrZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzc25ha2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzc25ha2UvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG5jYW52YXMge1xuICBib3JkZXI6IDNweCBzb2xpZCAjNjY2NjY2O1xufVxuXG4uZ2FtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5nYW1lLS13aXRoLWxheWVyIHtcbiAgYm9yZGVyLWNvbG9yOiBpbmRpYW5yZWQ7XG59XG4uZ2FtZV9fdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLmdhbWVfX3RpdGxlIHNwYW4gKyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZ2FtZV9fc2NvcmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7O0VBRUksU0FBQTtFQUNBLFVBQUE7QUFMSjs7QUFRQTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFkZTtFQWVmLFdBZEk7QUFTUjs7QUFRQTtFQUNJLHlCQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMSjtBQU9JO0VBQ0ksdUJBQUE7QUFMUjtBQVFJO0VBQ0kseUJBQUE7QUFOUjtBQVFRO0VBQ0ksaUJBQUE7QUFOWjtBQVVJO0VBQ0ksY0FBQTtBQVJSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ3Nhc3M6Y29sb3InO1xcblxcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiRjb2xvcjogI2NjYztcXG4kZGFya2VuOiBjb2xvci5hZGp1c3QoJGNvbG9yLCAkbGlnaHRuZXNzOiAtNDAlKTtcXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkZGFya2VuO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgJi0td2l0aC1sYXllciB7XFxuICAgICAgICBib3JkZXItY29sb3I6IGluZGlhbnJlZDtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcblxcbiAgICAgICAgc3BhbiArIHNwYW4ge1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3Njb3JlIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICAgICAgICB0aGlzLnNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICBzaG93R3JpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVuZGVyRnVsbEJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCAlIHRoaXMub3B0aW9ucy5ibG9ja1NpemUgIT09IDAgfHxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAlIHRoaXMub3B0aW9ucy5ibG9ja1NpemUgIT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1RoZSBjYW52YXMgaGVpZ2h0IGFuZCB3aWR0aCBzaG91bGQgYmUgZGV2aWRlZCBlbnRpcmVseSBieSBibG9ja1NpemUgcHJvcGVydHknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNhbnZhcyBBUEknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdExheW91dCgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dHcmlkID09PSB0cnVlICYmICF0aGlzLm9wdGlvbnMucmVuZGVyRnVsbEJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0TGF5b3V0KCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICB9XG5cbiAgICBpbml0R3JpZCgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBpIDwgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgIGkgKz0gdGhpcy5ibG9ja1NpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhpICsgdGhpcy5ibG9ja1NpemUsIDApO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oaSArIHRoaXMuYmxvY2tTaXplLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGkgPCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgIGkgKz0gdGhpcy5ibG9ja1NpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygwLCB0aGlzLmJsb2NrU2l6ZSArIGkpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggKyB0aGlzLmJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrU2l6ZSArIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMzYTNhM2EnO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eDtcbiAgICB9XG5cbiAgICByZW5kZXJQb2ludChvYmopIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gb2JqLmNvbG9yO1xuICAgICAgICBjb25zdCByZWN0ID0ge1xuICAgICAgICAgICAgeDogb2JqLnggKiB0aGlzLmJsb2NrU2l6ZSxcbiAgICAgICAgICAgIHk6IG9iai55ICogdGhpcy5ibG9ja1NpemUsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5ibG9ja1NpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuYmxvY2tTaXplLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZW5kZXJGdWxsQmxvY2spIHtcbiAgICAgICAgICAgIHJlY3QueCArPSAxO1xuICAgICAgICAgICAgcmVjdC55ICs9IDE7XG4gICAgICAgICAgICByZWN0LndpZHRoIC09IDI7XG4gICAgICAgICAgICByZWN0LmhlaWdodCAtPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHJlY3QueCwgcmVjdC55LCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgfVxuXG4gICAgY2xlYXJSZWN0KG9iaikge1xuICAgICAgICBjb25zdCByZWN0ID0ge1xuICAgICAgICAgICAgeDogb2JqLnggKiB0aGlzLmJsb2NrU2l6ZSxcbiAgICAgICAgICAgIHk6IG9iai55ICogdGhpcy5ibG9ja1NpemUsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5ibG9ja1NpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuYmxvY2tTaXplLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZW5kZXJGdWxsQmxvY2spIHtcbiAgICAgICAgICAgIHJlY3QueCArPSAxO1xuICAgICAgICAgICAgcmVjdC55ICs9IDE7XG4gICAgICAgICAgICByZWN0LndpZHRoIC09IDI7XG4gICAgICAgICAgICByZWN0LmhlaWdodCAtPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdChyZWN0LngsIHJlY3QueSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIH1cblxuICAgIHJlbmRlclNjb3JlKHNjb3JlKSB7XG4gICAgICAgIHRoaXMuc2NvcmVDb250YWluZXIuaW5uZXJIVE1MID0gc2NvcmU7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5ibG9ja1NpemU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yID0gJ2JsYWNrJykge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRzKCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICAgIH1cblxuICAgIGdldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBfaW5pdGlhbFNwZWVkID0gMTAwMCAvIDEwO1xubGV0IF9vYmplY3RzID0gW107XG5jb25zdCBpc0JhY2tEaXJlY3Rpb24gPSBmdW5jdGlvbiAodHlwZSwgY3VycmVudERpcmVjdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICAgIChjdXJyZW50RGlyZWN0aW9uID09PSAnbGVmdCcgJiYgdHlwZSA9PT0gJ3JpZ2h0JykgfHxcbiAgICAgICAgKGN1cnJlbnREaXJlY3Rpb24gPT09ICdyaWdodCcgJiYgdHlwZSA9PT0gJ2xlZnQnKSB8fFxuICAgICAgICAoY3VycmVudERpcmVjdGlvbiA9PT0gJ3VwJyAmJiB0eXBlID09PSAnZG93bicpIHx8XG4gICAgICAgIChjdXJyZW50RGlyZWN0aW9uID09PSAnZG93bicgJiYgdHlwZSA9PT0gJ3VwJylcbiAgICApO1xufTtcbmNvbnN0IEJVVFRPTlMgPSB7XG4gICAgVVA6IDM4LFxuICAgIERPV046IDQwLFxuICAgIExFRlQ6IDM3LFxuICAgIFJJR0hUOiAzOSxcbiAgICBSRVNFVDogMzIsXG59O1xuY29uc3QgZFggPSAxO1xuY29uc3QgZFkgPSAxO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSB7XG4gICAgY29uc3RydWN0b3IobGF5ZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoIWxheWVyIHx8IGxheWVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FudCBnZXQgY2FudmFzIGxheWVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3BlZWQ6IF9pbml0aWFsU3BlZWQsXG4gICAgICAgICAgICAgICAgc25ha2VDb2xvcjogJyNjM2MzYzMnLFxuICAgICAgICAgICAgICAgIGZvb2RDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgc3RhcnRsZW46IDUsXG4gICAgICAgICAgICAgICAgcmVzZXRBZnRlckVuZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbm9MYXllckNvbGxpc2lvbjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAnJztcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMub3B0aW9ucy5zcGVlZDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zdGFydGxlbiA9IHRoaXMub3B0aW9ucy5zdGFydGxlbjtcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmxpbWl0Q2hhbmdlRGlyZWN0aW9uID0gMTA7XG4gICAgICAgIHRoaXMuc3RlcFkgPSAxO1xuICAgICAgICB0aGlzLnN0ZXBYID0gMTtcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgICAgICB0aGlzLmZvb2QgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc2V0QWZ0ZXJFbmQgPSB0aGlzLm9wdGlvbnMucmVzZXRBZnRlckVuZDtcblxuICAgICAgICBjb25zdCBjaGVja0J1dHRvbnMgPSAoZSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEJVVFRPTlMuVVA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSgndXAnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBCVVRUT05TLkRPV046XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSgnZG93bicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEJVVFRPTlMuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQlVUVE9OUy5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKCdyaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEJVVFRPTlMuUkVTRVQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgY29tbWFuZCBub3QgZm91bmQhJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0J1dHRvbnMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vTGF5ZXJDb2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLmNhbnZhcy5jbGFzc0xpc3QuYWRkKCdnYW1lLS13aXRoLWxheWVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZVNuYWtlKCk7XG4gICAgICAgIHRoaXMubGF5ZXIucmVuZGVyU2NvcmUoMCk7XG4gICAgICAgIHRoaXMuc2V0U3BlZWQodGhpcy5nZXRTcGVlZCgpKTtcbiAgICAgICAgdGhpcy5hZGRGb29kKCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfb2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICd5b3Ugc2hvdWxkIGFkZCBzb21lIG9iamVjdHMgaW4gc25ha2UgYmVmb3JlIGluaXQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvb2QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ3lvdSBzaG91bGQgYWRkIGZvb2Qgb2JqZWN0IGluIHNuYWtlIGJlZm9yZSBpbml0J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIFV0aWwuaXNGdW5jdGlvbih0aGlzLm1vdmVbdGhpcy5kaXJlY3Rpb25dKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3Ugc2hvdWxkIGRlZmluZSBkaXJlY3Rpb24gYmVmb3JlIGluaXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCdzIGdvXG4gICAgICAgIC8vIHJlbmRlciBmb29kXG4gICAgICAgIHRoaXMucmVuZGVyRm9vZCgpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc3RvcGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuZ2V0U3BlZWQoKSk7XG4gICAgfVxuXG4gICAgc3RlcCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIGlmICghdGhpcy5zdG9wZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnN0b3BlZCA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIGlmIChVdGlsLmlzRnVuY3Rpb24odGhpc1sncmlnaHQnXSkpIHtcbiAgICAgICAgICAgIHRoaXNbJ3JpZ2h0J10oKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBpcyBvdmVyJyk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBpZiAoIXRoaXMucmVzZXRBZnRlckVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJTY3IoKTtcbiAgICAgICAgX29iamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XG5cbiAgICAgICAgdGhpcy5hZGRGb29kKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHNldFNwZWVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkICE9IG51bGwgPyB2YWx1ZSA6IHRoaXMub3B0aW9ucy5zcGVlZDtcbiAgICB9XG5cbiAgICBnZXRTcGVlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQgPT0gbnVsbCA/IHRoaXMub3B0aW9ucy5zcGVlZCA6IHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgY3JlYXRlU25ha2UoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGFydGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChuZXcgUG9pbnQoaSwgMSwgdGhpcy5vcHRpb25zLnNuYWtlQ29sb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY1NwZWVkKCkge1xuICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLmdldFNwZWVkKCk7XG4gICAgICAgIGlmICh0aGlzLmxlbigpICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgICAgIGlmIChzcGVlZCA8PSB0aGlzLm9wdGlvbnMuc3BlZWQgJiYgc3BlZWQgPiA1MCkge1xuICAgICAgICAgICAgICAgIHNwZWVkIC09IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTcGVlZChzcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNjcigpIHtcbiAgICAgICAgZm9yICh2YXIgcG9pbnQgb2YgX29iamVjdHMpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuY2xlYXJSZWN0KHBvaW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyLmNsZWFyUmVjdCh0aGlzLmZvb2QpO1xuICAgIH1cblxuICAgIGdldEhlYWQoKSB7XG4gICAgICAgIHJldHVybiBfb2JqZWN0c1swXTtcbiAgICB9XG5cbiAgICBnZXRUYWlsKCkge1xuICAgICAgICBjb25zdCBjbG9uZSA9IF9vYmplY3RzLnNsaWNlKCk7XG4gICAgICAgIC8vIGlzIGl0IGdvb2QgaWRlYSB1c2UgbGVuIG9mIF9vYmplY3RzIGZvciBjbG9uZT9cbiAgICAgICAgY2xvbmUuc3BsaWNlKDAsIDEpO1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLmxlbigpOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVuZGVyUG9pbnQoX29iamVjdHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGVuKCkge1xuICAgICAgICByZXR1cm4gX29iamVjdHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICByZW1vdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5sZW4oKSArIDEgJiYgaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sYXllci5jbGVhclJlY3QoX29iamVjdHNbaW5kZXhdKTtcbiAgICAgICAgICAgIF9vYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQob2JqKSB7XG4gICAgICAgIGlmIChVdGlsLmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgX29iamVjdHMgPSBbLi4uX29iamVjdHMsIC4uLm9ial07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfb2JqZWN0cy51bnNoaWZ0KG9iaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlYXRGb29kKCkge1xuICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICAgIHRoaXMubGF5ZXIucmVuZGVyU2NvcmUodGhpcy5zY29yZSk7XG5cbiAgICAgICAgdGhpcy5hZGRGb29kKCk7XG4gICAgICAgIHRoaXMucmVuZGVyRm9vZCgpO1xuICAgIH1cblxuICAgIGNoZWNrRm9vZCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuZ2V0SGVhZCgpLnggPT09IHRoaXMuZm9vZC54ICYmIHRoaXMuZ2V0SGVhZCgpLnkgPT09IHRoaXMuZm9vZC55XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkRm9vZCgpIHtcbiAgICAgICAgY29uc3QgZm9vZENvb3JkcyA9IHRoaXMuZ2VuZXJhdGVGb29kQ29vcmRzKCk7XG4gICAgICAgIGNvbnN0IGZvb2RJblNuYWtlID0gX29iamVjdHMuc29tZShcbiAgICAgICAgICAgICh2YWwsIGtleSkgPT4gdmFsLnggPT09IGZvb2RDb29yZHMueCAmJiB2YWwueSA9PT0gZm9vZENvb3Jkcy55XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGZvb2RJblNuYWtlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRm9vZCBpbiBzbmFrZSEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRm9vZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb29kID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgZm9vZENvb3Jkcy54LFxuICAgICAgICAgICAgZm9vZENvb3Jkcy55LFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvb2RDb2xvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZvb2QoKSB7XG4gICAgICAgIHRoaXMubGF5ZXIucmVuZGVyUG9pbnQodGhpcy5mb29kKTtcbiAgICB9XG5cbiAgICB1cCgpIHtcbiAgICAgICAgdGhpcy5zdGVwWSA9IC1kWTtcbiAgICAgICAgdGhpcy5zdGVwWCA9IDA7XG4gICAgfVxuXG4gICAgZG93bigpIHtcbiAgICAgICAgdGhpcy5zdGVwWSA9IGRZO1xuICAgICAgICB0aGlzLnN0ZXBYID0gMDtcbiAgICB9XG5cbiAgICBsZWZ0KCkge1xuICAgICAgICB0aGlzLnN0ZXBZID0gMDtcbiAgICAgICAgdGhpcy5zdGVwWCA9IC1kWDtcbiAgICB9XG5cbiAgICByaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdGVwWSA9IDA7XG4gICAgICAgIHRoaXMuc3RlcFggPSBkWDtcbiAgICB9XG5cbiAgICBtb3ZlKHR5cGUpIHtcbiAgICAgICAgbGV0IHNhbWVEaXJlY3QgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxpc2lvbigpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgbmV3IGRpcmVjdGlvbiBpZiBleGlzdFxuICAgICAgICAvLyBjaGVjayBzYW1lIGRpcmVjdCBhbmQgYmFjayBkaXJlY3Rpb25cbiAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCAmJiB0aGlzW3R5cGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNhbWVEaXJlY3QgPSB0eXBlID09PSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmIChzYW1lRGlyZWN0IHx8IGlzQmFja0RpcmVjdGlvbih0eXBlLCB0aGlzLmRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNhbWVEaXJlY3QgJiYgdHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmNoZWNrRGlyZWN0aW9uVGltZXMoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGFuZ2UgZHggYW5kIGR5XG4gICAgICAgIGlmIChVdGlsLmlzRnVuY3Rpb24odGhpc1t0aGlzLmRpcmVjdGlvbl0pICYmICFzYW1lRGlyZWN0KSB7XG4gICAgICAgICAgICB0aGlzW3RoaXMuZGlyZWN0aW9uXSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyBhZGQgbmV3IGhlYWRcbiAgICAgICAgY29uc3QgbmV3SGVhZCA9IG5ldyBQb2ludChcbiAgICAgICAgICAgIHRoaXMuZ2V0SGVhZCgpLnggKyB0aGlzLnN0ZXBYLFxuICAgICAgICAgICAgdGhpcy5nZXRIZWFkKCkueSArIHRoaXMuc3RlcFksXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc25ha2VDb2xvclxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoTGF5ZXIobmV3SGVhZCkgJiZcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ub0xheWVyQ29sbGlzaW9uXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxCbG9ja1NpemUgPVxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIuY2FudmFzLmhlaWdodCAvIHRoaXMubGF5ZXIuYmxvY2tTaXplO1xuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbEJsb2NrU2l6ZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllci5jYW52YXMud2lkdGggLyB0aGlzLmxheWVyLmJsb2NrU2l6ZTtcblxuICAgICAgICAgICAgbmV3SGVhZC54ID1cbiAgICAgICAgICAgICAgICBuZXdIZWFkLnggPCAwXG4gICAgICAgICAgICAgICAgICAgID8gaG9yaXpvbnRhbEJsb2NrU2l6ZSAtIC1uZXdIZWFkLnhcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLmFicyhuZXdIZWFkLnggJSBob3Jpem9udGFsQmxvY2tTaXplKTtcblxuICAgICAgICAgICAgbmV3SGVhZC55ID1cbiAgICAgICAgICAgICAgICBuZXdIZWFkLnkgPCAwXG4gICAgICAgICAgICAgICAgICAgID8gdmVydGljYWxCbG9ja1NpemUgLSAtbmV3SGVhZC55XG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobmV3SGVhZC55ICUgdmVydGljYWxCbG9ja1NpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGb29kKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWF0Rm9vZCgpO1xuICAgICAgICAgICAgdGhpcy5pbmNTcGVlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5sZW4oKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZChuZXdIZWFkKTtcbiAgICB9XG5cbiAgICBjaGVja0RpcmVjdGlvblRpbWVzKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VEaXJlY3Rpb24gPCB0aGlzLmxpbWl0Q2hhbmdlRGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbisrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ9Ce0YHRgtCw0LvQvtGB0Ywg0L/QvtC/0YvRgtC+0Lo6ICcsXG4gICAgICAgICAgICAgICAgdGhpcy5saW1pdENoYW5nZURpcmVjdGlvbiAtIHRoaXMuY2hhbmdlRGlyZWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJdHNlbGZDb2xsaXNpb24oaGVhZCwgdGFpbCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgVXRpbC5pc0FycmF5KHRhaWwpICYmXG4gICAgICAgICAgICB0YWlsLnNvbWUoKGl0ZW0pID0+IGhlYWQueCA9PT0gaXRlbS54ICYmIGhlYWQueSA9PT0gaXRlbS55KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aExheWVyKGhlYWQpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5sYXllci5jYW52YXM7XG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMubGF5ZXIuYmxvY2tTaXplO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBoZWFkLnggKiBibG9ja1NpemUgKyBibG9ja1NpemUgPiBjYW52YXMud2lkdGggfHxcbiAgICAgICAgICAgIGhlYWQueSAqIGJsb2NrU2l6ZSArIGJsb2NrU2l6ZSA+IGNhbnZhcy5oZWlnaHQgfHxcbiAgICAgICAgICAgIGhlYWQueCA8IDAgfHxcbiAgICAgICAgICAgIGhlYWQueSA8IDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHRoaXMuZ2V0SGVhZCgpO1xuICAgICAgICBjb25zdCB0YWlsID0gdGhpcy5nZXRUYWlsKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJdHNlbGZDb2xsaXNpb24oaGVhZCwgdGFpbCkgfHxcbiAgICAgICAgICAgICh0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aExheWVyKGhlYWQpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMub3B0aW9ucy5ub0xheWVyQ29sbGlzaW9uKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRm9vZENvb3JkcygpIHtcbiAgICAgICAgY29uc3QgbWF4WCA9IHRoaXMubGF5ZXIuY2FudmFzLndpZHRoIC8gdGhpcy5sYXllci5ibG9ja1NpemU7XG4gICAgICAgIGNvbnN0IG1heFkgPSB0aGlzLmxheWVyLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmxheWVyLmJsb2NrU2l6ZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogVXRpbC5yYW5kb21NaW5NYXgoMCwgbWF4WCksXG4gICAgICAgICAgICB5OiBVdGlsLnJhbmRvbU1pbk1heCgwLCBtYXhZKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgdHlwZShvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBcnJheShvYmopIHtcbiAgICAgICAgcmV0dXJuIFV0aWwudHlwZShvYmopID09PSAnQXJyYXknO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gVXRpbC50eXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbU1pbk1heChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IExheWVyIGZyb20gJy4vbGF5ZXInO1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vc25ha2UnO1xuaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBMYXllcignY2FudmFzJywge1xuICAgICAgICAgICAgc2hvd0dyaWQ6IHRydWUsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIHdpZHRoOiA1MTAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDE1LFxuICAgICAgICAgICAgcmVuZGVyRnVsbEJsb2NrOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNuYWtlID0gbmV3IFNuYWtlKGxheWVyLCB7XG4gICAgICAgICAgICBmb29kQ29sb3I6ICdsaWdodGdyZWVuJyxcbiAgICAgICAgICAgIHNuYWtlQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICByZXNldEFmdGVyRW5kOiB0cnVlLFxuICAgICAgICAgICAgbm9MYXllckNvbGxpc2lvbjogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGF5ZXIuaW5pdCgpO1xuICAgICAgICBzbmFrZS5pbml0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9