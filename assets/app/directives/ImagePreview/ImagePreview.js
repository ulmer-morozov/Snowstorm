var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var ImagePreview = (function () {
        function ImagePreview($guid) {
            var _this = this;
            this.$guid = $guid;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "assets/app/directives/ImagePreview/ImagePreview.html";
            this.scope = {
                currentIndex: "=",
                source: "=",
                converter: "&"
            };
            this.prev = function () {
                _this.$scope.currentIndex--;
            };
            this.next = function () {
                _this.$scope.currentIndex++;
            };
            this.close = function () {
                _this.$scope.currentImage = undefined;
            };
            this.currentIndexChangeHandler = function (newIndex, oldIndex, $scope) {
                if (!angular.isArray($scope.source)
                    ||
                        !angular.isNumber(newIndex)
                    ||
                        newIndex < 0
                    ||
                        newIndex >= $scope.source.length
                    ||
                        !angular.isFunction($scope.converter)) {
                    $scope.currentImage = undefined;
                    return;
                }
                var imgSource = $scope.source[newIndex];
                $scope.currentImage = $scope.converter()(imgSource);
            };
            this.link = function (scope, el, attrs) {
            };
            this.controller = ["$scope", function ($scope) {
                    _this.$scope = $scope;
                    _this.$scope.close = _this.close;
                    _this.$scope.next = _this.next;
                    _this.$scope.prev = _this.prev;
                    $scope.$watch("currentIndex", _this.currentIndexChangeHandler);
                }];
        }
        ImagePreview.factory = function () {
            var directive = function (guid) { return new ImagePreview(guid); };
            directive.$inject = ["$guid"];
            return directive;
        };
        ImagePreview.convertNewsPostToImage = function (post) {
            var image = {
                id: post.id,
                title: post.title,
                imageUrl: post.cover,
                description: undefined
            };
            return image;
        };
        ImagePreview.convertWorkToImage = function (work) {
            var image = {
                id: work.id,
                title: work.title,
                imageUrl: work.imageUrl,
                description: work.description
            };
            return image;
        };
        return ImagePreview;
    }());
    Snowstorm.ImagePreview = ImagePreview;
})(Snowstorm || (Snowstorm = {}));
