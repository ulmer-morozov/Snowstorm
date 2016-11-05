var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var IllustratedNewsCtrl = (function () {
        function IllustratedNewsCtrl($scope, $interval, $timeout, $routeParams) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.selectPost = function (index) {
                _this.$scope.currentPostIndex = index;
            };
            this.setDefaultNews = function () {
                _this.$scope.posts = Snowstorm.DataRepository.news;
                _this.$scope.mainPost = _this.$scope.posts[0];
                _this.$scope.converter = Snowstorm.ImagePreview.convertNewsPostToImage;
                _this.$scope.selectPost = _this.selectPost;
            };
            this.setDefaultNews();
        }
        return IllustratedNewsCtrl;
    }());
    IllustratedNewsCtrl.$inject = [
        "$scope", "$interval", "$timeout", "$routeParams"
    ];
    Snowstorm.IllustratedNewsCtrl = IllustratedNewsCtrl;
})(Snowstorm || (Snowstorm = {}));
