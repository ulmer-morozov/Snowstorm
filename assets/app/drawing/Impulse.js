var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Impulse = (function () {
        function Impulse(impX, impY) {
            if (impX === void 0) { impX = 0; }
            if (impY === void 0) { impY = 0; }
            this.impX = impX;
            this.impY = impY;
        }
        return Impulse;
    }());
    Snowstorm.Impulse = Impulse;
})(Snowstorm || (Snowstorm = {}));
