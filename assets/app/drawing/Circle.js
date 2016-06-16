var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Circle = (function () {
        function Circle(radius, position) {
            var _this = this;
            this.radius = radius;
            this.position = position;
            this.findCollision = function (other) {
                var dx = other.position.x - _this.position.x;
                var dy = other.position.y - _this.position.y;
                var centerVector = new Snowstorm.Vector(dx, dy);
                var collisiionFinded = centerVector.length <= _this.radius + other.radius;
                return collisiionFinded;
            };
        }
        return Circle;
    }());
    Snowstorm.Circle = Circle;
})(Snowstorm || (Snowstorm = {}));
