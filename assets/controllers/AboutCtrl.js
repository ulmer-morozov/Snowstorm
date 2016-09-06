var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AboutCtrl = (function () {
        function AboutCtrl($scope, $interval, $timeout, $routeParams) {
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.$scope.employees = [
                { avatar: "assets/images/employees/avatar1.jpg", description: "Gray, shoulder-length hair is pulled back to reveal a furrowed, warm face." },
                { avatar: "assets/images/employees/avatar2.png", description: "White, layered hair is pulled back to reveal a chiseled, cheerful face. Squinting silver eyes, set sunken within their sockets." },
                { avatar: "assets/images/employees/avatar3.png", description: "There's something obscure about her, perhaps it's a feeling of shame or perhaps it's simply her tenderness." }
            ];
        }
        AboutCtrl.$inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];
        return AboutCtrl;
    }());
    Snowstorm.AboutCtrl = AboutCtrl;
})(Snowstorm || (Snowstorm = {}));
