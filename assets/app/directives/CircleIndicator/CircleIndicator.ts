module Snowstorm {
    "use strict";

    export class CircleIndicator implements ng.IDirective {
        restrict = "E";
        replace = true;
        templateUrl = "assets/app/directives/CircleIndicator/CircleIndicator.html";

        scope = {
            title: "@",
            activated: "=",
            afterComplete: "&",
            data: "="
        }

        constructor(private $interval: ng.IIntervalService) {
        }

        static factory(): ng.IDirectiveFactory {
            const directive = ($interval: ng.IIntervalService) => new CircleIndicator($interval);
            directive.$inject = ["$interval"];
            return directive;
        }

        link = (scope: ICircleIndicatorScope, el: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        }

        controller = ["$scope", ($scope: ICircleIndicatorScope) => {
            $scope.$watch("activated", this.processActive);

            $scope.getProgressWidth = (): number => {
                if ($scope.percentage == undefined)
                    return 0;
                let amount = 120 * $scope.percentage / 100;
                return amount;
            }

            $scope.getClipText = (): string => {
                let amount = $scope.getProgressWidth();
                let result = `rect(0px, ${amount}px, 50px, 0px)`;
                return result;
            }
        }];

        private start = ($scope: ICircleIndicatorScope): void => {
            console.log("start");
            $scope.percentage++;
            $scope.percentage = 0;
            var self = this;
            $scope.timerPromise = this.$interval(function() {
                self.timeUpdate($scope);
            }, 30);
        }

        private stop = ($scope: ICircleIndicatorScope): void => {
            console.log("stop");
            this.cancelTimer($scope);
        }

        private timeUpdate = ($scope: ICircleIndicatorScope): void => {
            $scope.percentage += 1.5;
            if ($scope.percentage > 100) {
                $scope.percentage = 100;
                this.cancelTimer($scope);
                let delegate = $scope.afterComplete;

                if (delegate !== undefined) {
                    delegate()($scope.data);
                }

            }

            console.log("percentage " + $scope.percentage);
        }

        private cancelTimer = ($scope: ICircleIndicatorScope): void => {
            this.$interval.cancel($scope.timerPromise);
        }

        private processActive = (newActiveValue: boolean, oldActiveValue: boolean, $scope: ICircleIndicatorScope): void => {

            if (newActiveValue == oldActiveValue) {
                return;
            }

            if (newActiveValue) {
                this.start($scope);
                return;
            }

            this.stop($scope);
        }

    }
}
