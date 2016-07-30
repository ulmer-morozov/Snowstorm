var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Snowstorm;
(function (Snowstorm) {
    var Mascot = (function (_super) {
        __extends(Mascot, _super);
        function Mascot(artist, r, cx, cy, weight, isEnabled, movingEnabled) {
            if (isEnabled === void 0) { isEnabled = true; }
            if (movingEnabled === void 0) { movingEnabled = true; }
            _super.call(this, r, cx, cy, weight, isEnabled, movingEnabled);
            this.artist = artist;
        }
        return Mascot;
    }(Snowstorm.Ball));
    Snowstorm.Mascot = Mascot;
})(Snowstorm || (Snowstorm = {}));
