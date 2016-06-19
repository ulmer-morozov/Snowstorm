var Snowstorm;
(function (Snowstorm) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    Snowstorm.Point = Point;
})(Snowstorm || (Snowstorm = {}));
