var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var SpeedTuple = (function () {
        function SpeedTuple(v1, v2) {
            if (v1 === void 0) { v1 = 0; }
            if (v2 === void 0) { v2 = 0; }
            this.v1 = v1;
            this.v2 = v2;
        }
        return SpeedTuple;
    }());
    Snowstorm.SpeedTuple = SpeedTuple;
})(Snowstorm || (Snowstorm = {}));
