var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var FloorObject = (function (_super) {
        __extends(FloorObject, _super);
        function FloorObject(radius, x, y) {
            if (radius === void 0) { radius = 10000000; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _super.call(this, 0, 0);
            this.m = 5.9722 * Math.pow(10, 24);
            this.r = radius;
            this.p = new Snowstorm.Vector(x, y);
            this.update = function () {
            };
        }
        return FloorObject;
    }(Snowstorm.BallObject));
    Snowstorm.FloorObject = FloorObject;
})(Snowstorm || (Snowstorm = {}));
