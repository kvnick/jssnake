window.onload = function() {

  var layer = new Layer(
    'canvas' // id selector
  );

  layer.init();

  var snake = new Snake(layer);
  snake.setSpeed(1000);
  snake.startlen = 5;
  snake.addFood();
  snake.init();
};