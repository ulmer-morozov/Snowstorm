module Snowstorm {
    "use strict";

    export class ImagePreview implements ng.IDirective {
        restrict = "E";
        replace = true;
        templateUrl = "assets/app/directives/ImagePreview/ImagePreview.html";

        scope = {
            currentIndex: "=",
            source: "=",
            converter: "&"
        }

        private $scope: IImagePreviewScope;

        constructor(private $guid: GuidService, private $window: ng.IWindowService) {
        }

        static factory(): ng.IDirectiveFactory {
            const directive = (guid: GuidService, $window: ng.IWindowService) => new ImagePreview(guid, $window);
            directive.$inject = ["$guid", "$window"];
            return directive;
        }

        static convertNewsPostToImage(post: INewsPost): IImage {
            const image: IImage = {
                id: post.id,
                title: post.title,
                imageUrl: post.cover,
                description: undefined
            };
            return image;
        }

        static convertWorkToImage(work: IWork): IImage {
            const image: IImage = {
                id: work.id,
                title: work.title,
                imageUrl: work.imageUrl,
                description: work.description
            };
            return image;
        }

        private prev = (): void => {
            this.$scope.currentIndex--;
        }

        private next = (): void => {
            this.$scope.currentIndex++;
        }

        private close = (): void => {
            this.$scope.currentImage = undefined;
            this.$scope.currentIndex = -1;
        }

        currentIndexChangeHandler = (newIndex: number, oldIndex: number, $scope: IImagePreviewScope): void => {
            if (
                !angular.isArray($scope.source)
                ||
                !angular.isNumber(newIndex)
                ||
                newIndex < 0
                ||
                newIndex >= $scope.source.length
                ||
                !angular.isFunction($scope.converter)
            ) {
                $scope.currentImage = undefined;
                return;
            }

            let imgSource = $scope.source[newIndex];
            let image = $scope.converter()(imgSource);

            // debugger;
            if (this.$window.innerWidth < 500) {
                this.$window.location.href = image.imageUrl;
            } else {
                $scope.currentImage = image;
            }
        }

        link = (scope: IImagePreviewScope, el: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        }

        controller = ["$scope", ($scope: IImagePreviewScope) => {
            this.$scope = $scope;
            this.$scope.close = this.close;
            this.$scope.next = this.next;
            this.$scope.prev = this.prev;

            $scope.$watch("currentIndex", this.currentIndexChangeHandler);
        }];
    }
}
