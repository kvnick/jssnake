var Point = (function () {
    'use strict';

    var color  = 'black';
    var width  = 10;
    var height = 10;

    function Point(x, y) {
        this.x      = x;
        this.y      = y;
        this.color  = color;
        this.width  = width;
        this.height = height;
        this.fill   = color;

        return this;
    }

    Point.prototype = {
        getCoords: function() {
            return { x: this.x, y: this.y };
        }
    };

    return Point;
}());
