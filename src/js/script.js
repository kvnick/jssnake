window.addEventListener('DOMContentLoaded', () => {
  try {
    const layer = new Layer('canvas', {
      showGrid: true,
      height: 300,
      width: 510,
      blockSize: 15,
      renderFullBlock: false
    })
    const snake = new Snake(layer, {
      foodColor: 'lightgreen',
      snakeColor: 'white',
      resetAfterEnd: true,
      noLayerCollision: true
    })

    layer.init()
    snake.init()
  } catch (e) {
    console.error(e)
    alert(e.message)
  }
})
