var Snowstorm;
(function (Snowstorm) {
    "use strict";
    angular
        .module("App", ["ngAnimate", "ngRoute"])
        .directive("draggable", Snowstorm.Draggable.factory())
        .service("$guid", Snowstorm.GuidService)
        .controller("AboutCtrl", Snowstorm.AboutCtrl)
        .controller("GameCtrl", Snowstorm.GameCtrl)
        .controller("AuthorCtrl", Snowstorm.AuthorCtrl)
        .controller("AuthorsCtrl", Snowstorm.AuthorsCtrl)
        .config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(false);
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
                .otherwise("/Authors");
        }]);
})(Snowstorm || (Snowstorm = {}));
