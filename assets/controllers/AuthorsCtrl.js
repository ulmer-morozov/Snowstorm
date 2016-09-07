var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AuthorsCtrl = (function () {
        function AuthorsCtrl($scope, $location, $timeout) {
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            this.$timeout = $timeout;
            this.setDefaultAuthors = function () {
                _this.$scope.authors = Snowstorm.DataRepository.authors;
                _this.$scope.gotoAuthor = function (author) {
                    _this.$location.url("/Author/" + author.id);
                };
            };
            this.setDefaultAuthors();
        }
        AuthorsCtrl.$inject = [
            "$scope", "$location", "$timeout",
        ];
        return AuthorsCtrl;
    }());
    Snowstorm.AuthorsCtrl = AuthorsCtrl;
})(Snowstorm || (Snowstorm = {}));
