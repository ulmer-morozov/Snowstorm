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
                var maxWidth = screenWidth / 5;
                var maxHeight = screenHeight * 1 / 2;
                var borderWeght = 10000000000;
                var coliders = _this.$scope.coliders = [];
                var stripeHeight = 20;
                var currentWidth = 0;
                var currentPosition = -stripeHeight;
                while (currentPosition < maxHeight) {
                    var colider = new Snowstorm.FloorObject(currentWidth, screenCenterX, currentPosition);
                    coliders.push(colider);
                    currentPosition += stripeHeight;
                    currentWidth += wStep;
                }
                var borderThikness = 10;
                var borderRadius = 10000;
                var leftBorder = new Snowstorm.FloorObject(borderRadius, -borderRadius + borderThikness, screenWidth / 2);
                var rightBorder = new Snowstorm.FloorObject(borderRadius, screenWidth + borderRadius - borderThikness, screenWidth / 2);
                var topBorder = new Snowstorm.FloorObject(borderRadius, screenWidth / 2, -borderRadius + borderThikness);
                var bottomBorder = new Snowstorm.FloorObject(borderRadius, screenWidth / 2, screenHeight + borderRadius - borderThikness);
                coliders.push(leftBorder);
                coliders.push(rightBorder);
                coliders.push(topBorder);
                coliders.push(bottomBorder);
            };
            this.createMascots = function () {
                _this.$scope.mascots = [];
                var screenWidth = _this.$window.innerWidth;
                var screenHeight = _this.$window.innerHeight;
                var mascot;
                mascot = new Snowstorm.BallObject(1, 0);
                mascot.p.x = 100;
                mascot.p.y = 100;
                _this.$scope.mascots.push(mascot);
                mascot = new Snowstorm.BallObject(1, 0);
                mascot.p.x = 100;
                mascot.p.y = 300;
                _this.$scope.mascots.push(mascot);
                mascot = new Snowstorm.BallObject(1, -1);
                mascot.p.x = 90;
                mascot.p.y = 500;
                _this.$scope.mascots.push(mascot);
                mascot = new Snowstorm.BallObject(1, -1);
                mascot.p.x = screenWidth - 90;
                mascot.p.y = 100;
                _this.$scope.mascots.push(mascot);
                mascot = new Snowstorm.BallObject(-1, 1);
                mascot.p.x = screenWidth - 90;
                mascot.p.y = 300;
                _this.$scope.mascots.push(mascot);
                mascot = new Snowstorm.BallObject(-1, -1);
                mascot.p.x = screenWidth - 90;
                mascot.p.y = 500;
                _this.$scope.mascots.push(mascot);
                mascot = new Snowstorm.BallObject(-1, -1);
                mascot.p.x = screenWidth / 2;
                mascot.p.y = screenHeight - 100;
                _this.$scope.mascots.push(mascot);
            };
            this.enterFrame = function () {
                var mascots = _this.$scope.mascots;
                var coliders = _this.$scope.coliders;
                var objs = mascots.concat(coliders);
                for (var i = 0; i < mascots.length; i++) {
                    var obj = objs[i];
                    for (var j = i + 1; j < objs.length; j++) {
                        var collisionFinded = objs[j].collide(objs[i]);
                    }
                }
                for (var i = 0; i < mascots.length; i++) {
                    mascots[i].update();
                }
            };
            this.startAnimation = function () {
                _this.$interval(_this.enterFrame, 1000 / 60);
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
