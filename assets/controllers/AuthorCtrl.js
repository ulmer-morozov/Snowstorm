var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AuthorCtrl = (function () {
        function AuthorCtrl($scope, $interval, $timeout, $routeParams, preloader) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.preloader = preloader;
            this.selectWork = function (index) {
                _this.$scope.selectedWorkIndex = index;
            };
            this.$scope.author = Snowstorm.DataRepository.authors.filter(function (x) { return x.id == $routeParams['authorId']; })[0];
            this.$scope.selectWork = this.selectWork;
            this.$scope.converter = Snowstorm.ImagePreview.convertWorkToImage;
            var imagePaths = [];
            angular.forEach(this.$scope.author.works, function (work) {
                imagePaths.push(work.imageUrl);
            });
            this.$scope.pageIsLoading = true;
            var pageLoadComplete = function () {
                _this.$scope.pageIsLoading = false;
            };
            this.preloader.preloadImages(imagePaths)
                .then(function () {
                pageLoadComplete();
            }, function () {
                pageLoadComplete();
            });
        }
        return AuthorCtrl;
    }());
    AuthorCtrl.$inject = [
        "$scope", "$interval", "$timeout", "$routeParams", "preloader"
    ];
    Snowstorm.AuthorCtrl = AuthorCtrl;
})(Snowstorm || (Snowstorm = {}));
