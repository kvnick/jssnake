export default class Point {
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
