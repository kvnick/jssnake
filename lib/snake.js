var Snake = (function() {

    var requestAnimationFrame =  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame;

    var Snake = function(layer) {

        if (!layer || layer == null) {
            console.error('Cant get canvas layer');
            return false;
        }

        var
            args = Array.prototype.slice.call(arguments),
            _concat = Array.prototype.concat,
            _speed = 200,
            _objects = [],
            randomMinMax = function(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            isBackDirection = function(type, currentDirection) {
                if (currentDirection === 'left' && type === 'right' ||currentDirection === 'right' && type === 'left' ||currentDirection === 'up' && type === 'down' ||
                    currentDirection === 'down' && type === 'up') {
                    return  true;
                }
                return false;
            },
            BUTTONS = {
                UP: 38,
                DOWN: 40,
                LEFT: 37,
                RIGHT: 39,
                RESET: 32,
            },
            dX = 1,
            dY = 1;

        return {
            interval: "",
            speed: null,
            setSpeed: function(value) {
                if (this.speed != null) {
                    this.speed = value;
                } else {
                    this.speed = _speed;
                }
            },
            getSpeed: function() {
                if (this.speed == null) {
                    return _speed;
                }
                return this.speed;
            },
            direction: 'right',
            score: 0,
            startlen: 5,
            changeDirection: 0,
            limitChangeDirection: 10,
            stepY: 15,
            stepX: 15,
            layer: layer,
            food: null,
            resetAfterEnd: true,

            init: function() {
                var self = this;

                self.createSnake();
                self.layer.renderScore(0);
                self.setSpeed(_speed);

                try {
                    if (_objects.length === 0) {
                        throw new Error('you should add some objects in snake before init');
                    }
                    if (self.food == null) {
                        throw new Error('you should add food object in snake before init');
                    }

                    if (self.direction == null && Util.isFunction(self.move[self.direction])) {
                        throw new Error('you should define direction before init');
                    }
                } catch (e) {
                    console.error(e);
                }

                var checkButtons = function(e) {
                    switch (e.keyCode) {
                        case BUTTONS.UP:
                            self.move('up');
                            break;
                        case BUTTONS.DOWN:
                            self.move('down');
                            break;
                        case BUTTONS.LEFT:
                            self.move('left');
                            break;
                        case BUTTONS.RIGHT:
                            self.move('right');
                            break;
                        case BUTTONS.RESET:
                            self.reset();
                            break;
                        default:
                            // console.log('i don\'t understand this command');
                            break;
                    }
                };

                document.addEventListener("keydown", checkButtons, false);

                // render food
                self.renderFood();
                // let's go
                self.start();
                // self.render();
                self.stoped = false;
            },

            start: function() {
                var self = this;

                self.render();

                self.interval = setInterval(function() {
                   self.step();
                }, self.getSpeed());
            },

            step: function() {
                var self = this;

                //  self.interval = setInterval(function() {
                //     self.move();
                //     if (!self.stoped) {
                //         self.update();
                //         self.render();
                //     }
                // } , self.getSpeed());


                // requestAnimationFrame(function() {
                //     self.step();
                // });
                self.move();
                if (!self.stoped) {
                    self.update();
                    requestAnimationFrame(function() {
                        self.render();
                    }, 1000 / 60);
                    // self.render();
                }
            },

            stop: function() {
                var self = this;

                self.stoped = true;
                // clearInterval(self.interval);
                clearInterval(self.interval);
                _objects = [];
                // reset direction
                if (Util.isFunction(self['right'])) {
                    self['right']();
                }
                console.log('Game is over');
            },

            reset: function() {
                var self = this;

                self.stop();
                if (!self.resetAfterEnd) {
                    return;
                }
                self.clearScr();
                self.speed = null;
                self.food = null;
                self.score = 0;
                self.direction = "right";

                self.addFood();
                self.init();
            },

            createSnake: function() {
                for (var i = this.startlen - 1; i >= 0; i--) {
                    this.add(new Point(i, 1));
                }
            },

            incSpeed: function() {
                var self = this,
                    speed = self.getSpeed();

                // speed up if len mod 2 eq 0
                console.log(self.len() % 2 === 0);
                if (self.len() % 2 === 0) {
                   clearInterval(self.interval);

                    if (speed <= _speed && speed > 50) {
                        speed -= 5;
                        self.setSpeed(speed);
                    }
                    self.start();
                }
                console.log(self.getSpeed());
            },

            clearScr: function() {
                var self = this,
                         context = self.layer.getContext();

                context.clearRect(0, 0, self.layer.canvas.width, self.layer.canvas.height);
            },

            getHead: function() {
                return _objects[0];
            },

            getTail: function() {
                var clone = [];
                clone = _objects.slice();
                // is it good idea use len of _objects for clone?
                clone.splice(0, 1);
                return clone;
            },

            update: function() {
                self = this;

                // add new item
                var point = new Point(
                    self.getHead().x + self.stepX,
                    self.getHead().y + self.stepY
                );
                // add new head
                _objects.unshift(point);
                // remove last element // or _objects
                self.remove(self.len());
            },

            render: function() {
                var self = this;

                for (var i = self.len(); i > 0; i-- ) {
                    this.layer.renderPoint(_objects[i]);
                }
            },

            len: function() {
                return _objects.length - 1;
            },

            remove: function(index) {
                if (index < this.len() + 1 && index != null) {
                    /*
                        array.splice(start, deleteCount[, item1 [, item2[, ...]]])

                        start
                            Индекс, по которому начинать изменять массив
                            (если больше длины массива - то реальный индекс будет установлен на длину масива)
                            (если отрицательный - то с конца)

                        deleteCount
                            Целое число, количество удаляемых элементов

                        возвращает удаленные элементы
                    */
                    this.layer.clearRect(_objects[index]);
                    _objects.splice(index, 1);
                }
            },

            add: function(obj) {
                var self = this;

                if (Util.isArray(obj)) {
                    _objects = _concat.call(_objects, obj);
                } else {
                    _objects.push(obj);
                }
            },

            eatFood: function() {
                var self = this;

                _objects.unshift(self.food);

                self.score++;
                self.layer.renderScore(self.score);

                self.food = null;
                self.addFood();
                self.renderFood();
            },

            checkFood: function() {
                var self = this;

                if (self.getHead().x == self.food.x && self.getHead().y == self.food.y ) {
                    return true;
                }
                return false;
            },

            addFood: function() {
                var self = this,
                        foodCoords = self.generateFoodCoords();

                var foodInSnake = _objects.some(function(val, key) {
                    if (val.x == foodCoords.x && val.y == foodCoords.y) {
                        return true;
                    }
                    return false;
                });

                console.log(foodInSnake);

                if (foodInSnake) {
                    self.addFood();
                    return false;
                }

                var food = new Point(foodCoords.x, foodCoords.y);
                self.food = food;
            },

            renderFood: function() {
                var self = this;

                self.layer.renderPoint(self.food);
            },

            up: function() {
                this.stepY = -dY;
                this.stepX = 0;
            },

            down: function() {
                this.stepY = dY;
                this.stepX = 0;
            },

            left: function() {
                this.stepY = 0;
                this.stepX = -dX;
            },

            right: function() {
                this.stepY = 0;
                this.stepX = dX;
            },

            move: function(type) {
                var
                    self = this,
                    sameDirect = false;

                // check collision
                if (self.checkCollision()) {
                    self.reset();
                    return false;
                }

                // set new direction if exist
                if (type != null && self[type]!= null) {
                    sameDirect = (type === self.direction) ? true : false;
                    // check same direct and back direction
                    if (sameDirect || isBackDirection(type, self.direction)) {
                        return;
                    }
                    self.direction = type;
                }

                if (self.checkFood()) {
                    self.eatFood();
                    self.incSpeed();
                }

                if (!sameDirect && type != null) {
                    // self.checkDirectionTimes();
                }

                if (Util.isFunction(self[self.direction]) && !sameDirect) {
                    self[self.direction]();
                }

            },

            checkDirectionTimes: function() {
                var self = this;

                if (self.changeDirection < self.limitChangeDirection) {
                    self.changeDirection++;
                    console.log("Осталось попыток: ", self.limitChangeDirection - self.changeDirection);
                } else {
                    self.reset();
                }

            },

            checkItselfCollision: function(a, b) {
                if (a.x == b.x && a.y == b.y ) {
                    console.log('столкновение');
                      return true;
                }
                return false;
            },

            checkCollision: function() {
                // collision function for rect
                var self = this,
                    head = self.getHead(),
                    tail = self.getTail(),
                    canvas = self.layer.canvas;

                for (i = 0; i < tail.length; i++) {
                    if (0 !== i) {
                        if (self.checkItselfCollision(head, tail[i])) {
                            return true;
                        }
                    }
                }
                // check collision with layer
                if (head.x * head.width + head.width > canvas.width ||
                    head.y * head.height + head.height > canvas.height ||
                    head.x < 0 ||
                    head.y < 0) {
                    return true;
                }

                return false;
            },

            generateFoodCoords: function() {
                var minX = 0,
                    minY = 0,
                    maxX = this.layer.canvas.width / this.layer.blockSize,
                    maxY = this.layer.canvas.height / this.layer.blockSize;

                var food = {
                    x: randomMinMax(minX, maxX),
                    y: randomMinMax(minY, maxY),
                };

                return food;
            },
        };

    };

    return Snake;

})();