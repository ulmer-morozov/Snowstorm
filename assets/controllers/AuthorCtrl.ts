module Snowstorm {
    "use strict";

    export class AuthorCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];

        private selectWork = (index: number): void => {
            this.$scope.selectedWorkIndex = index;
        }

        constructor(
            private $scope: IAuthorCtrlScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService,
            private $routeParams: angular.route.IRouteParamsService
        ) {
            this.$scope.author = DataRepository.authors.filter(x => x.id == $routeParams['authorId'])[0];
            this.$scope.selectWork = this.selectWork;
            this.$scope.converter = ImagePreview.convertWorkToImage;
        }

    }
}
