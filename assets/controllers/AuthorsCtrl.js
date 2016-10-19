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
                _this.$scope.converter = Snowstorm.ImagePreview.convertWorkToImage;
                _this.$scope.showPromo = function (author, index) {
                    _this.$scope.authorWorks = author.works;
                    _this.$scope.currentWorkIndex = index;
                };
            };
            this.setDefaultAuthors();
        }
        return AuthorsCtrl;
    }());
    AuthorsCtrl.$inject = [
        "$scope", "$location", "$timeout",
    ];
    Snowstorm.AuthorsCtrl = AuthorsCtrl;
})(Snowstorm || (Snowstorm = {}));
