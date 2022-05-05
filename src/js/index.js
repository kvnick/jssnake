import Layer from './layer';
import Snake from './snake';
import ml5 from 'ml5';
import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    try {
        const layer = new Layer('canvas', {
            showGrid: true,
            height: 300,
            width: 510,
            blockSize: 15,
            renderFullBlock: false,
        });
        const snake = new Snake(layer, {
            foodColor: 'lightgreen',
            snakeColor: 'white',
            resetAfterEnd: true,
            noLayerCollision: true,
        });

        layer.init();
        snake.init();

        // sound controller
        const classifierOptions = {
            probabilityThreshold: 0.9,
        };

        const classifier = ml5.soundClassifier(
            'SpeechCommands18w',
            classifierOptions,
            modelReady
        );

        function modelReady() {
            classifier.classify((error, result) => {
                if (error) {
                    console.log(error);
                    return;
                }

                const commands = ['left', 'down', 'up', 'right'];
                const command = result[0].label;
                if (commands.includes(command)) {
                    snake.move(command);
                }
            });
        }
    } catch (e) {
        console.error(e);
        alert(e.message);
    }
});
