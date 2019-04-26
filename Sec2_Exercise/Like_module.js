"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sec2 : Module
var Like_module = /** @class */ (function () {
    function Like_module(_c, _s) {
        this._c = _c;
        this._s = _s;
    }
    Object.defineProperty(Like_module.prototype, "likesCount", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like_module.prototype, "buttonSelected", {
        get: function () {
            return this._s;
        },
        enumerable: true,
        configurable: true
    });
    Like_module.prototype.clickb = function () {
        // if(this._s){
        //     this._c--;
        //     this._s = false
        // }//if
        // else{
        //     this._c++;
        //     this._s = true
        // }//else
        // console.log('Count: ' + (this._c) + " State: "+ this._s);
        this._c += (this._c) ? -1 : +1;
        this._s = !this._s;
    };
    return Like_module;
}());
exports.Like_module = Like_module;
