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
                { avatar: "assets/images/eye.svg", description: "Мы делаем иллюстрации на все случаи жизни от журнальных и текстильных до витринных и фасадных." },
                { avatar: "assets/images/hand.svg", description: "Мы делаем художественные объекты для интерьеров, выставок и фестивалей." },
                { avatar: "assets/images/heart.svg", description: "Мы занимаемся художественным оформлением пространств от шоурумов до парков." }
            ];
        }
        return AboutCtrl;
    }());
    AboutCtrl.$inject = [
        "$scope", "$interval", "$timeout", "$routeParams"
    ];
    Snowstorm.AboutCtrl = AboutCtrl;
})(Snowstorm || (Snowstorm = {}));
