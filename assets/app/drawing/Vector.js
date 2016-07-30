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
            this.mathRound = function () {
                var result = new Vector(Math.round(_this.xc), Math.round(_this.yc));
                return result;
            };
            this.getLength = function () {
                var length = Math.sqrt(Math.pow(_this.xc, 2) + Math.pow(_this.yc, 2));
                return length;
            };
            this.normalize = function () {
                var length = _this.getLength();
                if (length == 0)
                    return new Vector(0, 0);
                var result = _this.multi(1 / length);
                return result;
            };
            this.isEmpty = function () {
                var length = _this.getLength();
                return length == 0;
            };
        }
        return Vector;
    }());
    Snowstorm.Vector = Vector;
})(Snowstorm || (Snowstorm = {}));
