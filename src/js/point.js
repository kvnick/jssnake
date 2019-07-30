// todo: make a config with default settings
const width = 10
const height = 10

class Point {
  constructor (x, y, color = 'black') {
    this.x = x
    this.y = y
    this.color = color
  }

  getCoords () {
    return { x: this.x, y: this.y }
  }

  getColor () {
    return this.color
  }
}
