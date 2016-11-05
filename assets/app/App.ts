
module Snowstorm {
    "use strict";

    angular
        .module("App", ["ngAnimate", "ngRoute", "preloader"])

        //директивы
        .directive("draggable", Draggable.factory())
        .directive("imagePreview", ImagePreview.factory())
        .directive("shuffleElements", ShuffleElements.factory())
        .directive("circleIndicator", CircleIndicator.factory())

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

        .run(["$rootScope", "$timeout", function($rootScope: any, $timeout: ng.ITimeoutService) {
            $rootScope.routeIsLoading = true;

            $rootScope.$on('$routeChangeStart', function() {
                $rootScope.routeIsLoading = true;
            });

            $rootScope.$on('$routeChangeSuccess', function() {
                $timeout(function() {
                    $rootScope.routeIsLoading = false;
                }, 200);
            });
        }])
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
                .otherwise("/Game");
        }]);

}
