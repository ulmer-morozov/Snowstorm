var Snowstorm;
(function (Snowstorm) {
    var Ball = (function () {
        function Ball(r, cx, cy, weight) {
            var _this = this;
            this.dx = function (that) {
                return _this.cx - that.cx;
            };
            this.dy = function (that) {
                return _this.cy - that.cy;
            };
            this.d = function (that) {
                return Math.sqrt(_this.dx(that) * _this.dx(that) + _this.dy(that) * _this.dy(that));
            };
            this.move = function () {
                _this.cx += _this.s2d(_this.v.xc);
                _this.cy += _this.s2d(_this.v.yc);
            };
            this.isOverlapping = function (that) {
                var d = _this.d(that);
                if (_this === that)
                    return (false);
                return d <= (_this.r + that.r);
            };
            this.processCollision = function (that) {
                var Vab = _this.v.diff(that.v);
                var n = _this.collisionN(_this, that);
                var Ma = _this.weight;
                var Mb = that.weight;
                var f;
                var f_numerator;
                var f_denominator;
                var epsilon = 1;
                f_numerator = -(1 + epsilon) * Vab.dot(n);
                f_denominator = n.dot(n) * (1 / Ma + 1 / Mb);
                f = f_numerator / f_denominator;
                _this.v = _this.v.add(n.multi(f / Ma));
                that.v = that.v.diff(n.multi(f / Mb));
                while (_this.isOverlapping(that)) {
                    _this.move();
                    that.move();
                }
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
            this.v = new Snowstorm.Vector(0, 0);
            this.weight = weight;
        }
        Ball.prototype.s2d = function (s) {
            return (s / 1000) * 10;
        };
        return Ball;
    }());
    Snowstorm.Ball = Ball;
})(Snowstorm || (Snowstorm = {}));
