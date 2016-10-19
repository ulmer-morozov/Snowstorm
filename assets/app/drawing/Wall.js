var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Snowstorm;
(function (Snowstorm) {
    var Wall = (function (_super) {
        __extends(Wall, _super);
        function Wall(r, cx, cy, weight) {
            return _super.call(this, r, cx, cy, weight) || this;
        }
        return Wall;
    }(Snowstorm.Colider));
    Snowstorm.Wall = Wall;
})(Snowstorm || (Snowstorm = {}));
