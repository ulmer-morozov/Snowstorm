var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var GuidService = (function () {
        function GuidService() {
            this.empty = '00000000-0000-0000-0000-000000000000';
            this.new = function () {
                var result = GuidService.s8() + '-' + GuidService.s4() + '-' + GuidService.s4() + '-' +
                    GuidService.s4() + '-' + GuidService.s12();
                return result;
            };
        }
        return GuidService;
    }());
    GuidService.s4 = function () {
        var randNumber = Math.floor((1 + Math.random()) * 0x10000);
        var result = randNumber.toString(16).substring(1);
        return result;
    };
    GuidService.s8 = function () {
        var result = GuidService.s4() + GuidService.s4();
        return result;
    };
    GuidService.s12 = function () {
        var result = GuidService.s8() + GuidService.s4();
        return result;
    };
    Snowstorm.GuidService = GuidService;
})(Snowstorm || (Snowstorm = {}));
