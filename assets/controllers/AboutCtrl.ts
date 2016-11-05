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
                { avatar: "assets/images/eye.svg", description: "Мы делаем иллюстрации на все случаи жизни от журнальных и текстильных до витринных и фасадных." },
                { avatar: "assets/images/hand.svg", description: "Мы делаем художественные объекты для интерьеров, выставок и фестивалей." },
                { avatar: "assets/images/heart.svg", description: "Мы занимаемся художественным оформлением пространств от шоурумов до парков." }
            ];
        }

    }
}
