module Snowstorm {
    "use strict";
    angular
        .module("App", [])

        //директивы
        // .directive("vimeoVideo", VimeoVideoDirective.factory())

        //сервисы
        // .service("videoRepository", VideoRepository)

        //контроллеры
        .controller("AppCtrl", AppCtrl)

        //сервисы
        // .service("videoRepository", VideoRepository)

        //Настройки
        .config(["$locationProvider", ($locationProvider: ng.ILocationProvider) => {
            $locationProvider.html5Mode(false);
        }]);

}
