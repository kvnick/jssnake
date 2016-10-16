var init = function () {
    var layer, snake;

    layer = new Layer('canvas');
    layer.init();

    snake = new Snake(layer);
    snake.init();
};

window.onload = init;
