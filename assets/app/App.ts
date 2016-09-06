
module Snowstorm {
    "use strict";
    angular
        .module("App", ["ngAnimate", "ngRoute"])

        //директивы
        .directive("draggable", Draggable.factory())

        // сервисы
        .service("$guid", GuidService)

        //контроллеры
        .controller("AboutCtrl", AboutCtrl)
        .controller("GameCtrl", GameCtrl)
        .controller("AuthorCtrl", AuthorCtrl)
        .controller("AuthorsCtrl", AuthorsCtrl)
        .controller("IllustratedNewsCtrl", IllustratedNewsCtrl)

        //сервисы
        // .service("videoRepository", VideoRepository)

        //Настройки
        .config(["$locationProvider", "$routeProvider", ($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) => {
            $locationProvider.html5Mode(false);

            //configure route
            $routeProvider
                .when("/Game", {
                    templateUrl: "assets/templates/game.html",
                    controller: "GameCtrl"
                })
                .when("/About", {
                    templateUrl: "assets/templates/about.html",
                    controller: "AboutCtrl"
                })
                .when("/Authors", {
                    templateUrl: "assets/templates/authors.html",
                    controller: "AuthorsCtrl"
                })
                .when("/Author/:authorId", {
                    templateUrl: "assets/templates/author.html",
                    controller: "AuthorCtrl"
                })
                .when("/IllustratedNews", {
                    templateUrl: "assets/templates/illustratedNews.html",
                    controller: "IllustratedNewsCtrl"
                })
                .otherwise("/Authors");
        }]);

}
