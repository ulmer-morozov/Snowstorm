var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Collision = (function () {
        function Collision() {
            var _this = this;
            this.isEmpty = function () {
                if (!_this.direction.isEmpty)
                    return false;
                return true;
            };
        }
        Collision.CreateEpmty = function () {
            return new Collision();
        };
        return Collision;
    }());
    Snowstorm.Collision = Collision;
})(Snowstorm || (Snowstorm = {}));
