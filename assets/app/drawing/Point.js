var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    Snowstorm.Point = Point;
})(Snowstorm || (Snowstorm = {}));
