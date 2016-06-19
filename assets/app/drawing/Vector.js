var Snowstorm;
(function (Snowstorm) {
    var Vector = (function () {
        function Vector(xc, yc) {
            var _this = this;
            this.xc = xc;
            this.yc = yc;
            this.add = function (other) {
                var gv = new Vector(0, 0);
                gv.xc = _this.xc + other.xc;
                gv.yc = _this.yc + other.yc;
                return gv;
            };
            this.diff = function (other) {
                var gv = new Vector(0, 0);
                gv.xc = _this.xc - other.xc;
                gv.yc = _this.yc - other.yc;
                return gv;
            };
            this.multi = function (s) {
                var gv = new Vector(0, 0);
                gv.xc = s * _this.xc;
                gv.yc = s * _this.yc;
                return gv;
            };
            this.dot = function (other) {
                return _this.xc * other.xc + _this.yc * other.yc;
            };
        }
        return Vector;
    }());
    Snowstorm.Vector = Vector;
})(Snowstorm || (Snowstorm = {}));
