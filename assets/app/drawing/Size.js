var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Size = (function () {
        function Size(width, height) {
            this.width = width;
            this.height = height;
        }
        return Size;
    }());
    Snowstorm.Size = Size;
})(Snowstorm || (Snowstorm = {}));
