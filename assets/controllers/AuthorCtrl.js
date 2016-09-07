var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AuthorCtrl = (function () {
        function AuthorCtrl($scope, $interval, $timeout, $routeParams) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.selectWork = function (index) {
                _this.$scope.selectedWorkIndex = index;
            };
            this.$scope.author = Snowstorm.DataRepository.authors.filter(function (x) { return x.id == $routeParams['authorId']; })[0];
            this.$scope.selectWork = this.selectWork;
            this.$scope.converter = Snowstorm.ImagePreview.convertWorkToImage;
        }
        AuthorCtrl.$inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];
        return AuthorCtrl;
    }());
    Snowstorm.AuthorCtrl = AuthorCtrl;
})(Snowstorm || (Snowstorm = {}));
