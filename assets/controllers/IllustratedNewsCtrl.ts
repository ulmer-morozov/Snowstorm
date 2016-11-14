module Snowstorm {
    "use strict";

    export class IllustratedNewsCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout", "$routeParams",  "preloader"
        ];

        constructor(
            private $scope: IIllustratedNewsScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService,
            private $routeParams: angular.route.IRouteParamsService,
            private preloader: any
        ) {
            this.setDefaultNews();
        }

        private selectPost = (index: number): void => {
            this.$scope.currentPostIndex = index;
        }

        public setDefaultNews = (): void => {
            this.$scope.posts = DataRepository.news;
            this.$scope.mainPost = this.$scope.posts[0];
            this.$scope.converter = ImagePreview.convertNewsPostToImage;
            this.$scope.selectPost = this.selectPost;

            this.$scope.pageIsLoading = true;

            let imagePaths = [];
            angular.forEach(this.$scope.posts, (post: INewsPost) => {
                imagePaths.push(post.cover);
            });

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
