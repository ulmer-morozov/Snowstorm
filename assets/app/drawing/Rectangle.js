var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Rectangle = (function () {
        function Rectangle(size, position) {
            var _this = this;
            this.size = size;
            this.position = position;
            this.findCollision = function (other) {
                var minX = _this.size.width / 2 + other.size.width / 2;
                var minY = _this.size.height / 2 + other.size.height / 2;
                var deltaX = Math.abs(_this.position.x - other.position.x);
                var deltaY = Math.abs(_this.position.y - other.position.y);
                var xGap = deltaX - minX;
                var yGap = deltaY - minY;
                var collisiionFinded = xGap < 0 && yGap < 0;
                return collisiionFinded;
            };
        }
        Object.defineProperty(Rectangle.prototype, "top", {
            get: function () {
                var value = this.position.y + this.size.height / 2;
                return value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottom", {
            get: function () {
                var value = this.position.y - this.size.height / 2;
                return value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "left", {
            get: function () {
                var value = this.position.x - this.size.width / 2;
                return value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "right", {
            get: function () {
                var value = this.position.x + this.size.width / 2;
                return value;
            },
            enumerable: true,
            configurable: true
        });
        return Rectangle;
    }());
    Snowstorm.Rectangle = Rectangle;
})(Snowstorm || (Snowstorm = {}));
