var Layer = (function() {
    var _objects = [];

    var Layer = function(canvas) {
        this.canvas = document.getElementById(canvas);
        this.scoreContainer = document.getElementById('score');
        this.blockSize = 10;

        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d');
        } else {
            alert('Browser does not support canvas API');
            return false;
        }

        return this;
    };

    Layer.prototype.init = function() {
        this.initLayout();
        //if container is absolute
        this.initAbs();
        // this.initGrid();
    };

    Layer.prototype.initGrid = function() {
        var context = this.getContext();

        for (var i = 0; i < this.canvas.width; i += this.blockSize) {
            context.moveTo(i + this.blockSize, this.blockSize);
            context.lineTo(i + this.blockSize, this.canvasWidth + this.blockSize);
            // for(var j = 0; j < this.canvas.height; j++) {
            //      for (var x = 0; x <= bw; x += 40) {

            //     }


            //     for (var x = 0; x <= bh; x += 40) {
            //         context.moveTo(p, 0.5 + x + p);
            //         context.lineTo(bw + p, 0.5 + x + p);
            //     }
            // }
        }

        context.strokeStyle = "black";
        context.stroke();
    };

    Layer.prototype.initLayout = function() {
        this.canvas.height = 100;
        this.canvas.width = 100;
        this.center = {x: this.canvas.width / 2, y: this.canvas.height};
    };

    Layer.prototype.initAbs = function() {
        this.canvas.style.marginLeft = - (this.canvas.width / 2) + 'px';
        this.canvas.style.marginTop = - (this.canvas.height / 2) + 'px';
    };

    Layer.prototype.getContext = function() {
        return this.ctx;
    };

    Layer.prototype.renderPoint = function(obj) {

       this.ctx.fillRect(
            obj.x * obj.width,
            obj.y * obj.height,
            obj.width,
            obj.height
        );
    };

    Layer.prototype.clearRect = function(obj) {
        this.ctx.clearRect(
            obj.x * obj.width,
            obj.y * obj.height,
            obj.width,
            obj.height
        );
    };

    Layer.prototype.renderScore = function(score) {
        this.scoreContainer.innerHTML = score;
    };

    return Layer;

})();
