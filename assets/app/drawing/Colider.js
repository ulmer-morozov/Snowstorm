var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Colider = (function () {
        function Colider(width, height, x, y, weight) {
            var _this = this;
            if (weight === void 0) { weight = 1; }
            this.interact = function (other) {
                var collisiionFinded = _this.box.findCollision(other.box);
                var currentCollisionIndex = _this.currentCollisions.indexOf(other);
                var isOldCollision = currentCollisionIndex != -1;
                if (!collisiionFinded) {
                    if (isOldCollision) {
                        _this.currentCollisions.splice(currentCollisionIndex, 1);
                        console.log("collision ended");
                    }
                    return;
                }
                if (isOldCollision)
                    return;
                var thisP = _this.box.position;
                var otherP = other.box.position;
                var dn = new Snowstorm.Vector(thisP.x - otherP.x, thisP.y - otherP.y);
                dn = dn.normalize();
                var sm = _this.weight + other.weight;
                var dt = new Snowstorm.Vector(dn.y, -dn.x);
                var cr = 1;
                var v1 = dn.multiply(_this.speed.dot(dn)).length;
                var v2 = dn.multiply(other.speed.dot(dn)).length;
                _this.speed = dt.multiply(_this.speed.dot(dt));
                _this.speed = _this.speed.add(dn.multiply((cr * other.weight * (v2 - v1) + _this.weight * v1 + other.weight * v2) / sm));
                other.speed = dt.multiply(other.speed.dot(dt));
                other.speed = other.speed.add(dn.multiply((cr * _this.weight * (v1 - v2) + other.weight * v2 + _this.weight * v1) / sm));
                _this.currentCollisions.push(other);
                console.log("collisiion Finded");
            };
            var size = new Snowstorm.Size(width, height);
            var position = new Snowstorm.Point(x, y);
            this.currentCollisions = [];
            this.weight = weight;
            this.box = new Snowstorm.Rectangle(size, position);
            this.speed = new Snowstorm.Vector();
        }
        Colider.prototype.punch = function (vx, vy) {
            this.speed = new Snowstorm.Vector(vx, vy);
        };
        Colider.prototype.enterFrame = function () {
            this.box.position.x += this.speed.x;
            this.box.position.y += this.speed.y;
        };
        Colider.calculateSpeed = function (speed, m1, m2) {
            var v10 = speed.v1;
            var v20 = speed.v2;
            var sign = (-speed.v1 + speed.v2) / Math.abs(speed.v1 - speed.v2);
            var v1 = 2 * sign * m2 * v20 + (m1 - m2) * v10 / (m1 + m2);
            var v2 = 2 * m1 * v10 + sign * (m2 - m1) * v20 / (m1 + m2);
            var resultSpeed = new Snowstorm.SpeedTuple(v1, 0);
            return resultSpeed;
        };
        return Colider;
    }());
    Snowstorm.Colider = Colider;
})(Snowstorm || (Snowstorm = {}));
