var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AuthorsCtrl = (function () {
        function AuthorsCtrl($scope, $interval, $timeout) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.setDefaultAuthors = function () {
                _this.$scope.authors = Snowstorm.DataRepository.authors;
            };
            this.setDefaultAuthors();
        }
        AuthorsCtrl.$inject = [
            "$scope", "$interval", "$timeout",
        ];
        return AuthorsCtrl;
    }());
    Snowstorm.AuthorsCtrl = AuthorsCtrl;
})(Snowstorm || (Snowstorm = {}));
