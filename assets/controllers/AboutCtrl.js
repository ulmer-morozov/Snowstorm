var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AboutCtrl = (function () {
        function AboutCtrl($scope, $interval, $timeout, $routeParams) {
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.$scope.employees = [
                { avatar: "assets/images/employees/avatar1.jpg", description: "Картинки" },
                { avatar: "assets/images/employees/avatar2.png", description: "Пространства" },
                { avatar: "assets/images/employees/avatar3.png", description: "Объекты" }
            ];
        }
        return AboutCtrl;
    }());
    AboutCtrl.$inject = [
        "$scope", "$interval", "$timeout", "$routeParams"
    ];
    Snowstorm.AboutCtrl = AboutCtrl;
})(Snowstorm || (Snowstorm = {}));
