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
            this.$scope.converter = ImagePreview.convertWorkToImage;
            this.$scope.showPromo = (author: IAuthor, index: number): void => {
                this.$scope.authorWorks = author.works;
                this.$scope.currentWorkIndex = index;
            }
        }

    }
}
