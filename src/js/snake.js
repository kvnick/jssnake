const Snake = (() => {
  const _initialSpeed = 1000 / 10
  let _objects = []
  const isBackDirection = function (type, currentDirection) {
    return currentDirection === 'left' && type === 'right' ||
      currentDirection === 'right' && type === 'left' ||
      currentDirection === 'up' && type === 'down' ||
      currentDirection === 'down' && type === 'up'
  }
  const BUTTONS = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    RESET: 32
  }
  const dX = 1
  const dY = 1

  class Snake {
    constructor (layer, options = {}) {
      if (!layer || layer == null) {
        throw new Error('Cant get canvas layer')
      }

      this.options = Object.assign({}, {
        speed: _initialSpeed,
        snakeColor: '#c3c3c3',
        foodColor: 'red',
        startlen: 5,
        resetAfterEnd: false,
        noLayerCollision: false
      }, options)

      this.interval = ''
      this.speed = this.options.speed
      this.direction = 'right'
      this.score = 0
      this.startlen = this.options.startlen
      this.changeDirection = 0
      this.limitChangeDirection = 10
      this.stepY = 1
      this.stepX = 1
      this.layer = layer
      this.food = null
      this.resetAfterEnd = this.options.resetAfterEnd

      const checkButtons = (e) => {
        switch (e.keyCode) {
          case BUTTONS.UP: this.move('up'); break
          case BUTTONS.DOWN: this.move('down'); break
          case BUTTONS.LEFT: this.move('left'); break
          case BUTTONS.RIGHT: this.move('right'); break
          case BUTTONS.RESET: this.reset(); break
          default: console.log('This command not found!'); break
        }
      }

      document.addEventListener('keydown', checkButtons, false)
    }

    init () {
      if (this.options.noLayerCollision === false) {
        this.layer.canvas.classList.add('game--with-layer')
      }

      this.createSnake()
      this.layer.renderScore(0)
      this.setSpeed(this.getSpeed())
      this.addFood()

      try {
        if (_objects.length === 0) {
          throw new Error(
            'you should add some objects in snake before init'
          )
        }
        if (this.food == null) {
          throw new Error(
            'you should add food object in snake before init'
          )
        }
        if (this.direction == null && Util.isFunction(this.move[this.direction])) {
          throw new Error(
            'you should define direction before init'
          )
        }
      } catch (e) {
        console.error(e)
      }

      // let's go
      // render food
      this.renderFood()
      this.start()
      this.stoped = false
    }

    start () {
      this.render()
      this.interval = setInterval(() => {
        this.step()
        this.render()
      }, this.getSpeed())
    }

    step () {
      this.move()
      if (!this.stoped) {
        this.update()
      }
    }

    stop () {
      this.stoped = true
      clearInterval(this.interval)
      if (Util.isFunction(this['right'])) {
        this['right']()
      }
      console.log('Game is over')
    }

    reset () {
      this.stop()
      if (!this.resetAfterEnd) {
        return
      }
      this.clearScr()
      _objects = []
      this.speed = null
      this.food = null
      this.score = 0
      this.direction = 'right'

      this.addFood()
      this.init()
    }

    setSpeed (value) {
      this.speed = this.speed != null ? value : this.options.speed
    }

    getSpeed () {
      return this.speed == null ? this.options.speed : this.speed
    }

    createSnake () {
      for (var i = 0; i < this.startlen; i++) {
        this.add(new Point(i, 1, this.options.snakeColor))
      }
    }

    incSpeed () {
      let speed = this.getSpeed()
      if (this.len() % 4 === 0) {
        clearInterval(this.interval)
        if (speed <= this.options.speed && speed > 50) {
          speed -= 5
          this.setSpeed(speed)
        }
        this.start()
      }
    }

    clearScr () {
      for (var point of _objects) {
        this.layer.clearRect(point)
      }
      this.layer.clearRect(this.food)
    }

    getHead () {
      return _objects[0]
    }

    getTail () {
      const clone = _objects.slice()
      // is it good idea use len of _objects for clone?
      clone.splice(0, 1)
      return clone
    }

    render () {
      for (var i = 0; i <= this.len(); i++) {
        this.layer.renderPoint(_objects[i])
      }
    }

    len () {
      return _objects.length - 1
    }

    remove (index) {
      if (index < this.len() + 1 && index != null) {
        this.layer.clearRect(_objects[index])
        _objects.splice(index, 1)
      }
    }

    add (obj) {
      if (Util.isArray(obj)) {
        _objects = [..._objects, ...obj]
      } else {
        _objects.unshift(obj)
      }
    }

    eatFood () {
      this.score++
      this.layer.renderScore(this.score)

      this.addFood()
      this.renderFood()
    }

    checkFood () {
      return this.getHead().x === this.food.x &&
                this.getHead().y === this.food.y
    }

    addFood () {
      const foodCoords = this.generateFoodCoords()
      const foodInSnake = _objects.some((val, key) =>
        val.x === foodCoords.x && val.y === foodCoords.y
      )

      if (foodInSnake) {
        console.log('Food in snake!')
        this.addFood()
        return false
      }

      this.food = new Point(
        foodCoords.x,
        foodCoords.y,
        this.options.foodColor
      )
    }

    renderFood () {
      this.layer.renderPoint(this.food)
    }

    up () {
      this.stepY = -dY
      this.stepX = 0
    }

    down () {
      this.stepY = dY
      this.stepX = 0
    }

    left () {
      this.stepY = 0
      this.stepX = -dX
    }

    right () {
      this.stepY = 0
      this.stepX = dX
    }

    move (type) {
      let sameDirect = false

      if (this.checkCollision()) {
        this.reset()
        return
      }

      // set new direction if exist
      // check same direct and back direction
      if (type != null && this[type] != null) {
        sameDirect = (type === this.direction)
        if (sameDirect || isBackDirection(type, this.direction)) {
          return
        }
        this.direction = type
      }

      if (!sameDirect && type != null) {
        // this.checkDirectionTimes();
      }
      // change dx and dy
      if (Util.isFunction(this[this.direction]) && !sameDirect) {
        this[this.direction]()
      }
    }

    update () {
      // add new head
      const newHead = new Point(
        this.getHead().x + this.stepX,
        this.getHead().y + this.stepY,
        this.options.snakeColor
      )

      if (this.checkCollisionWithLayer(newHead) && this.options.noLayerCollision) {
        const verticalBlockSize = this.layer.canvas.height / this.layer.blockSize
        const horizontalBlockSize = this.layer.canvas.width / this.layer.blockSize

        newHead.x = newHead.x < 0
          ? horizontalBlockSize - (-newHead.x)
          : Math.abs(newHead.x % horizontalBlockSize)

        newHead.y = newHead.y < 0
          ? verticalBlockSize - (-newHead.y)
          : Math.abs(newHead.y % verticalBlockSize)
      }

      if (this.checkFood()) {
        this.eatFood()
        this.incSpeed()
      } else {
        this.remove(this.len())
      }

      this.add(newHead)
    }

    checkDirectionTimes () {
      if (this.changeDirection < this.limitChangeDirection) {
        this.changeDirection++
        console.log('Осталось попыток: ', this.limitChangeDirection - this.changeDirection)
      } else {
        this.reset()
      }
    }

    checkItselfCollision (head, tail) {
      return Util.isArray(tail) &&
                tail.some(item => head.x === item.x && head.y === item.y)
    }

    checkCollisionWithLayer (head) {
      const canvas = this.layer.canvas
      const blockSize = this.layer.blockSize

      return head.x * blockSize + blockSize > canvas.width ||
                head.y * blockSize + blockSize > canvas.height ||
                head.x < 0 ||
                head.y < 0
    }

    checkCollision () {
      const head = this.getHead(); const tail = this.getTail()

      return this.checkItselfCollision(head, tail) ||
                (this.checkCollisionWithLayer(head) && !this.options.noLayerCollision)
    }

    generateFoodCoords () {
      const maxX = this.layer.canvas.width / this.layer.blockSize
      const maxY = this.layer.canvas.height / this.layer.blockSize

      return {
        x: Util.randomMinMax(0, maxX),
        y: Util.randomMinMax(0, maxY)
      }
    }
  }

  return Snake
})()
