module Snowstorm {
    "use strict";

    export class AppCtrl {

        //DI
        static $inject = [
            "$scope", "$window", "$location", "$timeout"
        ];

        constructor(
            private $scope: IAppCtrlScope,
            private $window: ng.IWindowService,
            private $location: ng.ILocationService,
            private $timeout: ng.ITimeoutService
        ) {
            //code

        }

    }
}
