module Snowstorm {
    "use strict";

    export class AuthorsCtrl {

        //DI
        static $inject = [
            "$scope", "$location", "$timeout",
        ];

        constructor(
            private $scope: IAuthorsCtrlScope,
            private $location: angular.ILocationService,
            private $timeout: angular.ITimeoutService
        ) {
            this.setDefaultAuthors();
        }


        private setDefaultAuthors = (): void => {
            this.$scope.authors = DataRepository.authors;
            this.$scope.gotoAuthor = (author: IAuthor): void => {
                this.$location.url(`/Author/${author.id}`);
            }
        }

    }
}
