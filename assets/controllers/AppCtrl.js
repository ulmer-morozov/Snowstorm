var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AppCtrl = (function () {
        function AppCtrl($scope, $window, $interval, $timeout) {
            var _this = this;
            this.$scope = $scope;
            this.$window = $window;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.createWall = function () {
                var screenWidth = _this.$window.innerWidth;
                var screenHeight = _this.$window.innerHeight;
                var screenCenterX = screenWidth / 2;
                var screenCenterY = screenHeight / 2;
                var wStep = screenHeight / 100;
                var maxWidth = screenWidth / 3;
                var borderWeght = 10000000000;
                var coliders = _this.$scope.coliders = [];
                var stripeHeight = 20;
                var currentWidth = 0;
                var currentPosition = stripeHeight / 2;
                var borderThikness = 10;
                var leftBorder = new Snowstorm.Colider(borderThikness, screenHeight, 0, screenCenterY, borderWeght);
                var rightBorder = new Snowstorm.Colider(borderThikness, screenHeight, screenWidth, screenCenterY, borderWeght);
                var topBorder = new Snowstorm.Colider(screenWidth, borderThikness, screenCenterX, 0, borderWeght);
                var bottomBorder = new Snowstorm.Colider(screenWidth, borderThikness, screenCenterX, screenHeight, borderWeght);
                coliders.push(leftBorder);
                coliders.push(rightBorder);
                coliders.push(topBorder);
                coliders.push(bottomBorder);
            };
            this.createMascots = function () {
                var bodyWidth = 50;
                var bodyHeight = 50;
                _this.$scope.mascots = [];
                for (var i = 0; i < 1; i++) {
                    var mascot = new Snowstorm.Colider(bodyWidth, bodyHeight, 50, 2 * bodyHeight * i + 50);
                    _this.$scope.mascots.push(mascot);
                    mascot.punch(2, 2);
                }
            };
            this.enterFrame = function () {
                var mascots = _this.$scope.mascots;
                var coliders = _this.$scope.coliders;
                for (var i = 0; i < mascots.length; i++) {
                    var mascot = mascots[i];
                    mascot.enterFrame();
                    for (var i_1 = 0; i_1 < coliders.length; i_1++) {
                        var colider = coliders[i_1];
                        mascot.interact(colider);
                        colider.enterFrame();
                    }
                    for (var j = 0; j < mascots.length; j++) {
                        var otherMascot = mascots[j];
                        if (otherMascot === mascot)
                            continue;
                        mascot.interact(otherMascot);
                    }
                }
                console.log("enterFrame");
            };
            this.startAnimation = function () {
                _this.$interval(_this.enterFrame, 30, 300);
            };
            this.init();
        }
        AppCtrl.prototype.init = function () {
            this.createWall();
            this.createMascots();
            this.startAnimation();
        };
        AppCtrl.$inject = [
            "$scope", "$window", "$interval", "$timeout"
        ];
        return AppCtrl;
    }());
    Snowstorm.AppCtrl = AppCtrl;
})(Snowstorm || (Snowstorm = {}));
