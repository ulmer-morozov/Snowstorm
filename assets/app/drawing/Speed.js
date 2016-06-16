var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Speed = (function (_super) {
        __extends(Speed, _super);
        function Speed(vx, vy) {
            if (vx === void 0) { vx = 0; }
            if (vy === void 0) { vy = 0; }
            _super.call(this, vx, vy);
        }
        return Speed;
    }(Snowstorm.Vector));
    Snowstorm.Speed = Speed;
})(Snowstorm || (Snowstorm = {}));
