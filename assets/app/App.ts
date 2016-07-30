module Snowstorm {
    "use strict";
    angular
        .module("App", ["ngAnimate"])

        //директивы
        .directive("draggable", Draggable.factory())

        // сервисы
        .service("$guid", GuidService)

        //контроллеры
        .controller("AppCtrl", AppCtrl)

        //сервисы
        // .service("videoRepository", VideoRepository)

        //Настройки
        .config(["$locationProvider", ($locationProvider: ng.ILocationProvider) => {
            $locationProvider.html5Mode(false);
        }]);

}
