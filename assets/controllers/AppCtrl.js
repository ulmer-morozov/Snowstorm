var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AppCtrl2 = (function () {
        function AppCtrl2($scope, $window, $interval, $timeout) {
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
                var borderRadius = 10000;
                var leftBorder = new Snowstorm.Colider(borderRadius, -borderRadius + borderThikness, screenWidth / 2, borderWeght);
                var rightBorder = new Snowstorm.Colider(borderRadius, screenWidth + borderRadius - borderThikness, screenWidth / 2, borderWeght);
                var topBorder = new Snowstorm.Colider(borderRadius, screenWidth / 2, -borderRadius + borderThikness, borderWeght);
                var bottomBorder = new Snowstorm.Colider(borderRadius, screenWidth / 2, screenHeight + borderRadius - borderThikness, borderWeght);
                coliders.push(leftBorder);
                coliders.push(rightBorder);
                coliders.push(topBorder);
                coliders.push(bottomBorder);
            };
            this.createMascots = function () {
                var bodySize = 6;
                _this.$scope.mascots = [];
                for (var i = 0; i < 5; i++) {
                    var mascot = new Snowstorm.Colider(bodySize * i, 50, 2 * (bodySize + 30) * i + 50, i);
                    _this.$scope.mascots.push(mascot);
                    mascot.punch(3, Math.pow(-1, i) * 1);
                }
            };
            this.enterFrame = function () {
                var mascots = _this.$scope.mascots;
                var coliders = _this.$scope.coliders;
                for (var i = 0; i < mascots.length; i++) {
                    var mascot = mascots[i];
                    for (var j = i; j < mascots.length; j++) {
                        var otherMascot = mascots[j];
                        if (otherMascot === mascot)
                            continue;
                        var interactionFinded = mascot.interact(otherMascot);
                    }
                    for (var i_1 = 0; i_1 < coliders.length; i_1++) {
                        var colider = coliders[i_1];
                        mascot.interact(colider);
                    }
                }
                for (var i = 0; i < mascots.length; i++) {
                    var mascot = mascots[i];
                    mascot.enterFrame();
                }
                for (var i = 0; i < coliders.length; i++) {
                    var colider = coliders[i];
                    colider.enterFrame();
                }
                console.log("enterFrame");
            };
            this.startAnimation = function () {
                _this.$interval(_this.enterFrame, 30, 300);
            };
            this.init();
        }
        AppCtrl2.prototype.init = function () {
            this.createWall();
            this.createMascots();
            this.startAnimation();
        };
        AppCtrl2.$inject = [
            "$scope", "$window", "$interval", "$timeout"
        ];
        return AppCtrl2;
    }());
    Snowstorm.AppCtrl2 = AppCtrl2;
})(Snowstorm || (Snowstorm = {}));
