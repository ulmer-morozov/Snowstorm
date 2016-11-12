module Snowstorm {
    "use strict";

    export class AboutCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];

        constructor(
            private $scope: IAboutCtrlScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService,
            private $routeParams: angular.route.IRouteParamsService
        ) {
            this.$scope.employees = [
                { avatar: "assets/images/eye.svg", title: "Иллюстрации", description: "на все случаи жизни от журнальных и текстильных до витринных и фасадных" },
                { avatar: "assets/images/hand.svg", title: "Художественные объекты", description: "для интерьеров, выставок и фестивалей." },
                { avatar: "assets/images/heart.svg", title: "Оформление пространств", description: "от шоурумов до парков." }
            ];
        }

    }
}
