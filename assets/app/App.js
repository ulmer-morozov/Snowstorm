var Snowstorm;
(function (Snowstorm) {
    "use strict";
    angular
        .module("App", [])
        .controller("AppCtrl", Snowstorm.AppCtrl)
        .config(["$locationProvider", function ($locationProvider) {
            $locationProvider.html5Mode(false);
        }]);
})(Snowstorm || (Snowstorm = {}));
