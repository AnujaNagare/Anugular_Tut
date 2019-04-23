"use strict";
exports.__esModule = true;
// Sec2 : Module
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + '\nY: ' + this._y);
    };
    return Point;
}());
exports.Point = Point;
