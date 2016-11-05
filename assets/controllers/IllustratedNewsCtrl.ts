module Snowstorm {
    "use strict";

    export class IllustratedNewsCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];

        constructor(
            private $scope: IIllustratedNewsScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService,
            private $routeParams: angular.route.IRouteParamsService
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
        }

    }
}
