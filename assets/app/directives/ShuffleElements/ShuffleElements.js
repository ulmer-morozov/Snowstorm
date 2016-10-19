var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var ShuffleElements = (function () {
        function ShuffleElements($timeout) {
            var _this = this;
            this.$timeout = $timeout;
            this.restrict = "A";
            this.replace = false;
            this.scope = {};
            this.link = function (scope, el, attrs) {
                _this.$timeout(function () {
                    var childrens = el.children();
                    var shuffledChildrens = _this.shuffle(childrens);
                    el.replaceWith(shuffledChildrens);
                });
            };
            this.controller = ["$scope", function ($scope) {
                }];
            this.shuffle = function (array) {
                var currentIndex = array.length - 1;
                var mainObjectPosition = 0;
                while (0 !== currentIndex) {
                    var randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    var temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                    if (randomIndex == mainObjectPosition) {
                        mainObjectPosition = currentIndex;
                    }
                    else if (currentIndex == mainObjectPosition) {
                        mainObjectPosition = randomIndex;
                    }
                }
                ShuffleElements.mainDivPositions.push(mainObjectPosition);
                return array;
            };
        }
        ShuffleElements.factory = function () {
            var directive = function ($timeout) { return new ShuffleElements($timeout); };
            directive.$inject = ["$timeout"];
            return directive;
        };
        return ShuffleElements;
    }());
    ShuffleElements.mainDivPositions = [];
    Snowstorm.ShuffleElements = ShuffleElements;
})(Snowstorm || (Snowstorm = {}));
