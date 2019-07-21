class Util {
    static type(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }

    static isArray(obj) {
        return Util.type(obj) === 'Array';
    }

    static isFunction(obj) {
        return Util.type(obj) === 'Function';
    }

    static randomMinMax(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}