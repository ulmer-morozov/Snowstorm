module Snowstorm {
    "use strict";

    export class ShuffleElements implements ng.IDirective {
        restrict = "A";
        replace = false;

        scope = {
        }

        constructor(private $timeout: ng.ITimeoutService) {
        }

        static factory(): ng.IDirectiveFactory {
            const directive = ($timeout: ng.ITimeoutService) => new ShuffleElements($timeout);
            directive.$inject = ["$timeout"];
            return directive;
        }

        static mainDivPositions: number[] = [];

        link = (scope: IImagePreviewScope, el: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            this.$timeout(() => {
                var childrens = el.children();
                var shuffledChildrens = this.shuffle(childrens);
                el.replaceWith(shuffledChildrens);
            });
        }

        controller = ["$scope", ($scope: IImagePreviewScope) => {

        }];

        shuffle = (array: JQuery): JQuery => {
            //на один меньше, чтобы никогда не шафлился последний элемент
            //так как он иногда скрывается
            let currentIndex = array.length - 1;

            let mainObjectPosition = 0;

            while (0 !== currentIndex) {

                // Pick a remaining element...
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                let temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;

                if (randomIndex == mainObjectPosition) {
                    mainObjectPosition = currentIndex;
                } else if (currentIndex == mainObjectPosition) {
                    mainObjectPosition = randomIndex;
                }
            }

            ShuffleElements.mainDivPositions.push(mainObjectPosition);
            return array;
        }
    }
}
