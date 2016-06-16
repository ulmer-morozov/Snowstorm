var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var BallObject = (function () {
        function BallObject(vx, vy) {
            var _this = this;
            if (vx === void 0) { vx = 0; }
            if (vy === void 0) { vy = 0; }
            this.update = function () {
                _this.p.x += _this.v.x;
                _this.p.y += _this.v.y;
            };
            this.collide = function (obj) {
                var dt, mT, v1, v2, sm, dn = new Snowstorm.Vector(_this.p.x - obj.p.x, _this.p.y - obj.p.y), sr = _this.r + obj.r, dx = dn.length;
                var collisiionFinded = !(dx > sr);
                var currentCollisionIndex = _this.currentCollisions.indexOf(obj);
                var isOldCollision = currentCollisionIndex != -1;
                if (!collisiionFinded) {
                    if (isOldCollision) {
                        _this.currentCollisions.splice(currentCollisionIndex, 1);
                        console.log("collision ended");
                    }
                    return false;
                }
                if (isOldCollision)
                    return false;
                if (dx > sr) {
                    return false;
                }
                sm = _this.m + obj.m;
                dn.normalize();
                dt = new Snowstorm.Vector(dn.y, -dn.x);
                v1 = dn.multiply(_this.v.dot(dn)).length;
                v2 = dn.multiply(obj.v.dot(dn)).length;
                _this.v = dt.multiply(_this.v.dot(dt));
                _this.v.tx(dn.multiply((obj.m * (v2 - v1) + _this.m * v1 + obj.m * v2) / sm));
                obj.v = dt.multiply(obj.v.dot(dt));
                obj.v.tx(dn.multiply((_this.m * (v1 - v2) + obj.m * v2 + _this.m * v1) / sm));
                console.log("collision started");
                _this.currentCollisions.push(obj);
                return true;
            };
            this.v = new Snowstorm.Vector(vx, vy);
            this.m = 10;
            this.r = 70;
            this.p = new Snowstorm.Vector(0, 0);
            this.currentCollisions = [];
        }
        return BallObject;
    }());
    Snowstorm.BallObject = BallObject;
})(Snowstorm || (Snowstorm = {}));
