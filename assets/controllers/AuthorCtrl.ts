module Snowstorm {
    "use strict";

    export class AuthorCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout", "$routeParams", "preloader"
        ];

        private selectWork = (index: number): void => {
            this.$scope.selectedWorkIndex = index;
        }

        constructor(
            private $scope: IAuthorCtrlScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService,
            private $routeParams: angular.route.IRouteParamsService,
            private preloader: any
        ) {
            this.$scope.author = DataRepository.authors.filter(x => x.id == $routeParams['authorId'])[0];
            this.$scope.selectWork = this.selectWork;
            this.$scope.converter = ImagePreview.convertWorkToImage;

            let imagePaths = [this.$scope.author.mascotUrl];
            angular.forEach(this.$scope.author.works, (work: IWork) => {
                imagePaths.push(work.imageUrl);
            });

            this.$scope.pageIsLoading = true;

            var pageLoadComplete = () => {
                this.$scope.pageIsLoading = false;
            }

            this.preloader.preloadImages(imagePaths)
                .then(function() {
                    pageLoadComplete();
                },
                function() {
                    pageLoadComplete();
                });
        }

    }
}
