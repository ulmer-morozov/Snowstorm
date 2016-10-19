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
                { avatar: "assets/images/employees/avatar1.jpg", description: "Картинки" },
                { avatar: "assets/images/employees/avatar2.png", description: "Пространства" },
                { avatar: "assets/images/employees/avatar3.png", description: "Объекты" }
            ];
        }

    }
}
