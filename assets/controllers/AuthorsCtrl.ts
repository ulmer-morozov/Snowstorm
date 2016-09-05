module Snowstorm {
    "use strict";

    export class AuthorsCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout",
        ];

        constructor(
            private $scope: IAuthorsCtrlScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService
        ) {
            this.setDefaultAuthors();
        }


        private setDefaultAuthors = (): void => {
            this.$scope.authors = DataRepository.authors;
        }

    }
}
