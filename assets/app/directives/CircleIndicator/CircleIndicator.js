var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var CircleIndicator = (function () {
        function CircleIndicator($interval) {
            var _this = this;
            this.$interval = $interval;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "assets/app/directives/CircleIndicator/CircleIndicator.html";
            this.scope = {
                title: "@",
                activated: "=",
                afterComplete: "&",
                data: "="
            };
            this.link = function (scope, el, attrs) {
            };
            this.controller = ["$scope", function ($scope) {
                    $scope.$watch("activated", _this.processActive);
                    $scope.getProgressWidth = function () {
                        if ($scope.percentage == undefined)
                            return 0;
                        var amount = 120 * $scope.percentage / 100;
                        return amount;
                    };
                    $scope.getClipText = function () {
                        var amount = $scope.getProgressWidth();
                        var result = "rect(0px, " + amount + "px, 50px, 0px)";
                        return result;
                    };
                }];
            this.start = function ($scope) {
                console.log("start");
                $scope.percentage++;
                $scope.percentage = 0;
                var self = _this;
                $scope.timerPromise = _this.$interval(function () {
                    self.timeUpdate($scope);
                }, 30);
            };
            this.stop = function ($scope) {
                console.log("stop");
                _this.cancelTimer($scope);
            };
            this.timeUpdate = function ($scope) {
                $scope.percentage += 3;
                if ($scope.percentage > 100) {
                    $scope.percentage = 100;
                    _this.cancelTimer($scope);
                    var delegate = $scope.afterComplete;
                    if (delegate !== undefined) {
                        delegate()($scope.data);
                    }
                }
                console.log("percentage " + $scope.percentage);
            };
            this.cancelTimer = function ($scope) {
                _this.$interval.cancel($scope.timerPromise);
            };
            this.processActive = function (newActiveValue, oldActiveValue, $scope) {
                if (newActiveValue == oldActiveValue) {
                    return;
                }
                if (newActiveValue) {
                    _this.start($scope);
                    return;
                }
                _this.stop($scope);
            };
        }
        CircleIndicator.factory = function () {
            var directive = function ($interval) { return new CircleIndicator($interval); };
            directive.$inject = ["$interval"];
            return directive;
        };
        return CircleIndicator;
    }());
    Snowstorm.CircleIndicator = CircleIndicator;
})(Snowstorm || (Snowstorm = {}));
