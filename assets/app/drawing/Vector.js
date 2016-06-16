var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Vector = (function () {
        function Vector(x, y) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
            this.dot = function (other) {
                var result = _this.x * other.x + _this.y * other.y;
                return result;
            };
            this.normalize = function () {
                var s = 1 / _this.length;
                _this.x *= s;
                _this.y *= s;
                return _this;
            };
            this.multiply = function (value) {
                var result = new Vector(_this.x * value, _this.y * value);
                return result;
            };
            this.tx = function (other) {
                _this.x += other.x;
                _this.y += other.y;
                return _this;
            };
            this.substract = function (other) {
                var result = new Vector(_this.x - other.x, _this.y - other.y);
                return result;
            };
        }
        Object.defineProperty(Vector.prototype, "length", {
            get: function () {
                var length = Math.sqrt(this.x * this.x + this.y * this.y);
                return length;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Vector.prototype, "isEmpty", {
            get: function () {
                var result = this.x == 0 && this.y == 0;
                return result;
            },
            enumerable: true,
            configurable: true
        });
        return Vector;
    }());
    Snowstorm.Vector = Vector;
})(Snowstorm || (Snowstorm = {}));
