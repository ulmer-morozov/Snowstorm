var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AuthorCtrl = (function () {
        function AuthorCtrl($scope, $interval, $timeout, $routeParams) {
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.setDefaultAuthors = function () {
            };
            this.$scope.author = Snowstorm.DataRepository.authors.filter(function (x) { return x.id == $routeParams['authorId']; })[0];
        }
        AuthorCtrl.$inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];
        return AuthorCtrl;
    }());
    Snowstorm.AuthorCtrl = AuthorCtrl;
})(Snowstorm || (Snowstorm = {}));
