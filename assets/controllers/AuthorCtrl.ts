module Snowstorm {
    "use strict";

    export class AuthorCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];

        constructor(
            private $scope: IAuthorCtrlScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService,
            private $routeParams: angular.route.IRouteParamsService
        ) {
            this.$scope.author = DataRepository.authors.filter(x => x.id == $routeParams['authorId'])[0];
        }

        private setDefaultAuthors = (): void => {
            // this.$scope.authors = DataRepository.authors;
        }

    }
}
