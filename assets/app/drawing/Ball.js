var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Snowstorm;
(function (Snowstorm) {
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball(r, cx, cy, weight, isEnabled, movingEnabled) {
            if (isEnabled === void 0) { isEnabled = true; }
            if (movingEnabled === void 0) { movingEnabled = true; }
            var _this = _super.call(this, r, cx, cy, weight, isEnabled) || this;
            _this.move = function () {
                if (!_this.movingEnabled)
                    return;
                _this.cx += _this.s2d(_this.v.xc);
                _this.cy += _this.s2d(_this.v.yc);
                var speed = _this.v.getLength();
                if (speed > 100) {
                    _this.v = _this.v.multi(0.99);
                }
            };
            _this.processCollision = function (that) {
                if (!_this.isEnabled || _this.isDragged || !that.isEnabled)
                    return;
                var otherObjectIsWall = that instanceof Snowstorm.Wall;
                var otherObjectIsBall = that instanceof Ball;
                var otherBall = that;
                var isDragCollision = otherObjectIsBall && otherBall.isDragged;
                if (isDragCollision)
                    return;
                var otherObjectSpeed = new Snowstorm.Vector(0, 0);
                if (otherObjectIsBall)
                    otherObjectSpeed = otherBall.v;
                var Vab = _this.v.diff(otherObjectSpeed);
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
                if (otherObjectIsBall)
                    otherBall.v = otherObjectSpeed.diff(n.multi(f / Mb));
                var distanceBeforeOverlaping = _this.d(that);
                var i = 1;
                var reverseActivated = false;
                while (_this.isOverlapping(that)) {
                    i++;
                    if (i > 500) {
                        debugger;
                        break;
                    }
                    _this.move();
                    if (otherObjectIsBall)
                        otherBall.move();
                    var distanceAfterSteps = _this.d(that);
                    if (distanceAfterSteps < distanceBeforeOverlaping && !reverseActivated) {
                        reverseActivated = true;
                        _this.v = _this.v.multi(-1);
                        if (_this.v.getLength() < 10)
                            _this.v = _this.v.normalize().multi(10);
                    }
                }
            };
            _this.v = new Snowstorm.Vector(0, 0);
            _this.isEnabled = isEnabled;
            _this.isDragged = false;
            _this.movingEnabled = movingEnabled;
            return _this;
        }
        return Ball;
    }(Snowstorm.Colider));
    Snowstorm.Ball = Ball;
})(Snowstorm || (Snowstorm = {}));
