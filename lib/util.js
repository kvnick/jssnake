;(function(global) {
    var Util = Util || {};

    Util.type = function(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    };

    Util.isArray = function(obj) {
        return Util.type.call(this, obj) == 'Array';
    };

    Util.isFunction = function(obj) {
        return Util.type.call(this, obj) == 'Function';
    };

    global.Util = Util;

}(this));