var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var IllustratedNewsCtrl = (function () {
        function IllustratedNewsCtrl($scope, $interval, $timeout, $routeParams, preloader) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.preloader = preloader;
            this.selectPost = function (index) {
                _this.$scope.currentPostIndex = index;
            };
            this.setDefaultNews = function () {
                _this.$scope.posts = Snowstorm.DataRepository.news;
                _this.$scope.mainPost = _this.$scope.posts[0];
                _this.$scope.converter = Snowstorm.ImagePreview.convertNewsPostToImage;
                _this.$scope.selectPost = _this.selectPost;
                _this.$scope.pageIsLoading = true;
                var imagePaths = [];
                angular.forEach(_this.$scope.posts, function (post) {
                    imagePaths.push(post.cover);
                });
                var pageLoadComplete = function () {
                    _this.$scope.pageIsLoading = false;
                };
                _this.preloader.preloadImages(imagePaths)
                    .then(function () {
                    pageLoadComplete();
                }, function () {
                    pageLoadComplete();
                });
            };
            this.setDefaultNews();
        }
        return IllustratedNewsCtrl;
    }());
    IllustratedNewsCtrl.$inject = [
        "$scope", "$interval", "$timeout", "$routeParams", "preloader"
    ];
    Snowstorm.IllustratedNewsCtrl = IllustratedNewsCtrl;
})(Snowstorm || (Snowstorm = {}));
