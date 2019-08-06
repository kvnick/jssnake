class Layer {
  constructor (canvas, options = {}) {
    this.canvas = document.getElementById(canvas)
    this.scoreContainer = document.getElementById('score')

    this.options = Object.assign({}, {
      blockSize: 10,
      height: 300,
      width: 300,
      showGrid: false,
      renderFullBlock: false
    }, options)

    if (this.options.height % this.options.blockSize !== 0 ||
            this.options.width % this.options.blockSize !== 0) {
      throw new Error(
        'The canvas height and width should be devided entirely by blockSize property'
      )
    }

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')
    } else {
      throw new Error('Browser does not support canvas API')
    }
  }

  init () {
    this.initLayout()
    if (this.options.showGrid === true && !this.options.renderFullBlock) {
      this.initGrid()
    }
  }

  initLayout () {
    this.canvas.height = this.options.height
    this.canvas.width = this.options.width
  }

  initGrid () {
    const context = this.getContext()
    context.beginPath()

    for (let i = 0; i < this.canvas.width - this.blockSize; i += this.blockSize) {
      context.moveTo(i + this.blockSize, 0)
      context.lineTo(i + this.blockSize, this.canvas.height)
    }

    for (let i = 0; i < this.canvas.height - this.blockSize; i += this.blockSize) {
      context.moveTo(0, this.blockSize + i)
      context.lineTo(this.canvas.width + this.blockSize, this.blockSize + i)
    }

    context.strokeStyle = '#3a3a3a'
    context.stroke()
  }

  getContext () {
    return this.ctx
  }

  renderPoint (obj) {
    this.ctx.fillStyle = obj.color
    const rect = {
      x: obj.x * this.blockSize,
      y: obj.y * this.blockSize,
      width: this.blockSize,
      height: this.blockSize
    }
    if (!this.options.renderFullBlock) {
      rect.x += 1
      rect.y += 1
      rect.width -= 2
      rect.height -= 2
    }
    this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
  }

  clearRect (obj) {
    const rect = {
      x: obj.x * this.blockSize,
      y: obj.y * this.blockSize,
      width: this.blockSize,
      height: this.blockSize
    }
    if (!this.options.renderFullBlock) {
      rect.x += 1
      rect.y += 1
      rect.width -= 2
      rect.height -= 2
    }
    this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height)
  }

  renderScore (score) {
    this.scoreContainer.innerHTML = score
  }

  get blockSize () {
    return this.options.blockSize
  }
}
