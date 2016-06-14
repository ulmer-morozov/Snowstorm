var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AppCtrl = (function () {
        function AppCtrl($scope, $window, $location, $timeout) {
            this.$scope = $scope;
            this.$window = $window;
            this.$location = $location;
            this.$timeout = $timeout;
        }
        AppCtrl.$inject = [
            "$scope", "$window", "$location", "$timeout"
        ];
        return AppCtrl;
    }());
    Snowstorm.AppCtrl = AppCtrl;
})(Snowstorm || (Snowstorm = {}));
