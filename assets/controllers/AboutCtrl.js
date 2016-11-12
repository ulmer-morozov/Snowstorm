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
                { avatar: "assets/images/eye.svg", title: "Иллюстрации", description: "на все случаи жизни от журнальных и текстильных до витринных и фасадных" },
                { avatar: "assets/images/hand.svg", title: "Художественные объекты", description: "для интерьеров, выставок и фестивалей." },
                { avatar: "assets/images/heart.svg", title: "Оформление пространств", description: "от шоурумов до парков." }
            ];
        }
        return AboutCtrl;
    }());
    AboutCtrl.$inject = [
        "$scope", "$interval", "$timeout", "$routeParams"
    ];
    Snowstorm.AboutCtrl = AboutCtrl;
})(Snowstorm || (Snowstorm = {}));
