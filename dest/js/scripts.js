"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "type",
    value: function type(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1);
    }
  }, {
    key: "isArray",
    value: function isArray(obj) {
      return Util.type(obj) === 'Array';
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return Util.type(obj) === 'Function';
    }
  }, {
    key: "randomMinMax",
    value: function randomMinMax(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }]);

  return Util;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Layer =
/*#__PURE__*/
function () {
  function Layer(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Layer);

    this.canvas = document.getElementById(canvas);
    this.scoreContainer = document.getElementById('score');
    this.options = Object.assign({}, {
      blockSize: 10,
      height: 300,
      width: 300,
      showGrid: false,
      renderFullBlock: false
    }, options);

    if (this.options.height % this.options.blockSize !== 0 || this.options.width % this.options.blockSize !== 0) {
      throw new Error('The canvas height and width should be devided entirely by blockSize property');
    }

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d');
    } else {
      throw new Error('Browser does not support canvas API');
    }
  }

  _createClass(Layer, [{
    key: "init",
    value: function init() {
      this.initLayout();

      if (this.options.showGrid === true && !this.options.renderFullBlock) {
        this.initGrid();
      }
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      this.canvas.height = this.options.height;
      this.canvas.width = this.options.width;
    }
  }, {
    key: "initGrid",
    value: function initGrid() {
      var context = this.getContext();
      context.beginPath();

      for (var i = 0; i < this.canvas.width - this.blockSize; i += this.blockSize) {
        context.moveTo(i + this.blockSize, 0);
        context.lineTo(i + this.blockSize, this.canvas.height);
      }

      for (var _i = 0; _i < this.canvas.height - this.blockSize; _i += this.blockSize) {
        context.moveTo(0, this.blockSize + _i);
        context.lineTo(this.canvas.width + this.blockSize, this.blockSize + _i);
      }

      context.strokeStyle = '#3a3a3a';
      context.stroke();
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "renderPoint",
    value: function renderPoint(obj) {
      this.ctx.fillStyle = obj.color;
      var rect = {
        x: obj.x * this.blockSize,
        y: obj.y * this.blockSize,
        width: this.blockSize,
        height: this.blockSize
      };

      if (!this.options.renderFullBlock) {
        rect.x += 1;
        rect.y += 1;
        rect.width -= 2;
        rect.height -= 2;
      }

      this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
  }, {
    key: "clearRect",
    value: function clearRect(obj) {
      var rect = {
        x: obj.x * this.blockSize,
        y: obj.y * this.blockSize,
        width: this.blockSize,
        height: this.blockSize
      };

      if (!this.options.renderFullBlock) {
        rect.x += 1;
        rect.y += 1;
        rect.width -= 2;
        rect.height -= 2;
      }

      this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    }
  }, {
    key: "renderScore",
    value: function renderScore(score) {
      this.scoreContainer.innerHTML = score;
    }
  }, {
    key: "blockSize",
    get: function get() {
      return this.options.blockSize;
    }
  }]);

  return Layer;
}();
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snake = function () {
  var _initialSpeed = 1000 / 10;

  var _objects = [];

  var isBackDirection = function isBackDirection(type, currentDirection) {
    return currentDirection === 'left' && type === 'right' || currentDirection === 'right' && type === 'left' || currentDirection === 'up' && type === 'down' || currentDirection === 'down' && type === 'up';
  };

  var BUTTONS = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    RESET: 32
  };
  var dX = 1;
  var dY = 1;

  var Snake =
  /*#__PURE__*/
  function () {
    function Snake(layer) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Snake);

      if (!layer || layer == null) {
        throw new Error('Cant get canvas layer');
      }

      this.options = Object.assign({}, {
        speed: _initialSpeed,
        snakeColor: '#c3c3c3',
        foodColor: 'red',
        startlen: 5,
        resetAfterEnd: false,
        noLayerCollision: false
      }, options);
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

      var checkButtons = function checkButtons(e) {
        switch (e.keyCode) {
          case BUTTONS.UP:
            _this.move('up');

            break;

          case BUTTONS.DOWN:
            _this.move('down');

            break;

          case BUTTONS.LEFT:
            _this.move('left');

            break;

          case BUTTONS.RIGHT:
            _this.move('right');

            break;

          case BUTTONS.RESET:
            _this.reset();

            break;

          default:
            console.log('This command not found!');
            break;
        }
      };

      document.addEventListener('keydown', checkButtons, false);
    }

    _createClass(Snake, [{
      key: "init",
      value: function init() {
        if (this.options.noLayerCollision === false) {
          this.layer.canvas.classList.add('game--with-layer');
        }

        this.createSnake();
        this.layer.renderScore(0);
        this.setSpeed(this.getSpeed());
        this.addFood();

        try {
          if (_objects.length === 0) {
            throw new Error('you should add some objects in snake before init');
          }

          if (this.food == null) {
            throw new Error('you should add food object in snake before init');
          }

          if (this.direction == null && Util.isFunction(this.move[this.direction])) {
            throw new Error('you should define direction before init');
          }
        } catch (e) {
          console.error(e);
        } // let's go
        // render food


        this.renderFood();
        this.start();
        this.stoped = false;
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        this.render();
        this.interval = setInterval(function () {
          _this2.step();

          _this2.render();
        }, this.getSpeed());
      }
    }, {
      key: "step",
      value: function step() {
        this.move();

        if (!this.stoped) {
          this.update();
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        this.stoped = true;
        clearInterval(this.interval);

        if (Util.isFunction(this['right'])) {
          this['right']();
        }

        console.log('Game is over');
      }
    }, {
      key: "reset",
      value: function reset() {
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
    }, {
      key: "setSpeed",
      value: function setSpeed(value) {
        this.speed = this.speed != null ? value : this.options.speed;
      }
    }, {
      key: "getSpeed",
      value: function getSpeed() {
        return this.speed == null ? this.options.speed : this.speed;
      }
    }, {
      key: "createSnake",
      value: function createSnake() {
        for (var i = 0; i < this.startlen; i++) {
          this.add(new Point(i, 1, this.options.snakeColor));
        }
      }
    }, {
      key: "incSpeed",
      value: function incSpeed() {
        var speed = this.getSpeed();

        if (this.len() % 4 === 0) {
          clearInterval(this.interval);

          if (speed <= this.options.speed && speed > 50) {
            speed -= 5;
            this.setSpeed(speed);
          }

          this.start();
        }
      }
    }, {
      key: "clearScr",
      value: function clearScr() {
        for (var _i = 0, _objects2 = _objects; _i < _objects2.length; _i++) {
          var point = _objects2[_i];
          this.layer.clearRect(point);
        }

        this.layer.clearRect(this.food);
      }
    }, {
      key: "getHead",
      value: function getHead() {
        return _objects[0];
      }
    }, {
      key: "getTail",
      value: function getTail() {
        var clone = _objects.slice(); // is it good idea use len of _objects for clone?


        clone.splice(0, 1);
        return clone;
      }
    }, {
      key: "render",
      value: function render() {
        for (var i = 0; i <= this.len(); i++) {
          this.layer.renderPoint(_objects[i]);
        }
      }
    }, {
      key: "len",
      value: function len() {
        return _objects.length - 1;
      }
    }, {
      key: "remove",
      value: function remove(index) {
        if (index < this.len() + 1 && index != null) {
          this.layer.clearRect(_objects[index]);

          _objects.splice(index, 1);
        }
      }
    }, {
      key: "add",
      value: function add(obj) {
        if (Util.isArray(obj)) {
          _objects = [].concat(_toConsumableArray(_objects), _toConsumableArray(obj));
        } else {
          _objects.unshift(obj);
        }
      }
    }, {
      key: "eatFood",
      value: function eatFood() {
        this.score++;
        this.layer.renderScore(this.score);
        this.addFood();
        this.renderFood();
      }
    }, {
      key: "checkFood",
      value: function checkFood() {
        return this.getHead().x === this.food.x && this.getHead().y === this.food.y;
      }
    }, {
      key: "addFood",
      value: function addFood() {
        var foodCoords = this.generateFoodCoords();

        var foodInSnake = _objects.some(function (val, key) {
          return val.x === foodCoords.x && val.y === foodCoords.y;
        });

        if (foodInSnake) {
          console.log('Food in snake!');
          this.addFood();
          return false;
        }

        this.food = new Point(foodCoords.x, foodCoords.y, this.options.foodColor);
      }
    }, {
      key: "renderFood",
      value: function renderFood() {
        this.layer.renderPoint(this.food);
      }
    }, {
      key: "up",
      value: function up() {
        this.stepY = -dY;
        this.stepX = 0;
      }
    }, {
      key: "down",
      value: function down() {
        this.stepY = dY;
        this.stepX = 0;
      }
    }, {
      key: "left",
      value: function left() {
        this.stepY = 0;
        this.stepX = -dX;
      }
    }, {
      key: "right",
      value: function right() {
        this.stepY = 0;
        this.stepX = dX;
      }
    }, {
      key: "move",
      value: function move(type) {
        var sameDirect = false;

        if (this.checkCollision()) {
          this.reset();
          return;
        } // set new direction if exist
        // check same direct and back direction


        if (type != null && this[type] != null) {
          sameDirect = type === this.direction;

          if (sameDirect || isBackDirection(type, this.direction)) {
            return;
          }

          this.direction = type;
        }

        if (!sameDirect && type != null) {} // this.checkDirectionTimes();
        // change dx and dy


        if (Util.isFunction(this[this.direction]) && !sameDirect) {
          this[this.direction]();
        }
      }
    }, {
      key: "update",
      value: function update() {
        // add new head
        var newHead = new Point(this.getHead().x + this.stepX, this.getHead().y + this.stepY, this.options.snakeColor);

        if (this.checkCollisionWithLayer(newHead) && this.options.noLayerCollision) {
          var verticalBlockSize = this.layer.canvas.height / this.layer.blockSize;
          var horizontalBlockSize = this.layer.canvas.width / this.layer.blockSize;
          newHead.x = newHead.x < 0 ? horizontalBlockSize - -newHead.x : Math.abs(newHead.x % horizontalBlockSize);
          newHead.y = newHead.y < 0 ? verticalBlockSize - -newHead.y : Math.abs(newHead.y % verticalBlockSize);
        }

        if (this.checkFood()) {
          this.eatFood();
          this.incSpeed();
        } else {
          this.remove(this.len());
        }

        this.add(newHead);
      }
    }, {
      key: "checkDirectionTimes",
      value: function checkDirectionTimes() {
        if (this.changeDirection < this.limitChangeDirection) {
          this.changeDirection++;
          console.log('Осталось попыток: ', this.limitChangeDirection - this.changeDirection);
        } else {
          this.reset();
        }
      }
    }, {
      key: "checkItselfCollision",
      value: function checkItselfCollision(head, tail) {
        return Util.isArray(tail) && tail.some(function (item) {
          return head.x === item.x && head.y === item.y;
        });
      }
    }, {
      key: "checkCollisionWithLayer",
      value: function checkCollisionWithLayer(head) {
        var canvas = this.layer.canvas;
        var blockSize = this.layer.blockSize;
        return head.x * blockSize + blockSize > canvas.width || head.y * blockSize + blockSize > canvas.height || head.x < 0 || head.y < 0;
      }
    }, {
      key: "checkCollision",
      value: function checkCollision() {
        var head = this.getHead();
        var tail = this.getTail();
        return this.checkItselfCollision(head, tail) || this.checkCollisionWithLayer(head) && !this.options.noLayerCollision;
      }
    }, {
      key: "generateFoodCoords",
      value: function generateFoodCoords() {
        var maxX = this.layer.canvas.width / this.layer.blockSize;
        var maxY = this.layer.canvas.height / this.layer.blockSize;
        return {
          x: Util.randomMinMax(0, maxX),
          y: Util.randomMinMax(0, maxY)
        };
      }
    }]);

    return Snake;
  }();

  return Snake;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'black';

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
    this.color = color;
  }

  _createClass(Point, [{
    key: "getCoords",
    value: function getCoords() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }]);

  return Point;
}();
"use strict";

window.addEventListener('DOMContentLoaded', function () {
  try {
    var modelReady = function modelReady() {
      classifier.classify(function (error, result) {
        if (error) {
          console.log(error);
          return;
        }

        var commands = ['left', 'down', 'up', 'right'];
        var command = result[0].label;

        if (commands.includes(command)) {
          snake.move(command);
        }
      });
    };

    var layer = new Layer('canvas', {
      showGrid: true,
      height: 300,
      width: 510,
      blockSize: 15,
      renderFullBlock: false
    });
    var snake = new Snake(layer, {
      foodColor: 'lightgreen',
      snakeColor: 'white',
      resetAfterEnd: true,
      noLayerCollision: true
    });
    layer.init();
    snake.init(); // sound controller

    var classifierOptions = {
      probabilityThreshold: 0.9
    };
    var classifier = ml5.soundClassifier('SpeechCommands18w', classifierOptions, modelReady);
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
});