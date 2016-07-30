var Snowstorm;
(function (Snowstorm) {
    var Colider = (function () {
        function Colider(r, cx, cy, weight, isEnabled) {
            var _this = this;
            if (isEnabled === void 0) { isEnabled = true; }
            this.dx = function (that) {
                return _this.cx - that.cx;
            };
            this.dy = function (that) {
                return _this.cy - that.cy;
            };
            this.d = function (that) {
                return Math.sqrt(_this.dx(that) * _this.dx(that) + _this.dy(that) * _this.dy(that));
            };
            this.isOverlapping = function (that) {
                var d = _this.d(that);
                if (_this === that)
                    return (false);
                return d <= (_this.r + that.r);
            };
            this.collisionN = function (ballA, ballB) {
                var gv = new Snowstorm.Vector(0, 0);
                var delta_y = ballB.dy(ballA);
                var delta_x = ballB.dx(ballA);
                var theta = Math.atan2(delta_y, delta_x);
                gv.xc = Math.cos(theta);
                gv.yc = Math.sin(theta);
                return gv;
            };
            this.r = r;
            this.cx = cx;
            this.cy = cy;
            this.weight = weight;
            this.isEnabled = isEnabled;
        }
        Colider.prototype.s2d = function (s) {
            return (s / 1000) * 10;
        };
        return Colider;
    }());
    Snowstorm.Colider = Colider;
})(Snowstorm || (Snowstorm = {}));
