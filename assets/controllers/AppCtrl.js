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
            this.svgSupported = function () {
                return true;
            };
            this.getRandomSpeed = function () {
                return Snowstorm.Random.getRandomReal(-200, 200);
            };
            this.getRandomBallPosition = function (ball) {
                var haveCollision = false;
                var p;
                var allObjects = _this.$scope.balls.concat(_this.$scope.obstacles);
                var screenWidth = _this.$window.innerWidth;
                var screenHeight = _this.$window.innerHeight;
                do {
                    var newX = Snowstorm.Random.getRandomInteger(100, screenWidth - ball.r);
                    var newY = Snowstorm.Random.getRandomInteger(100, screenHeight - ball.r);
                    p = new Snowstorm.Point(newX, newY);
                    var haveCollision_1 = false;
                    for (var i = 0; i < allObjects.length; i++) {
                        var existingObject = allObjects[i];
                        if (existingObject.isOverlapping(ball)) {
                            haveCollision_1 = true;
                            break;
                        }
                    }
                } while (haveCollision);
                return p;
            };
            this.doAnim = function () {
                var balls = _this.$scope.balls;
                for (var i = 0; i < balls.length; i++) {
                    var ball = balls[i];
                    ball.move();
                    _this.processBallCollisions(ball);
                    _this.processObstaclesCollisions(ball);
                }
                _this.$scope.requestAnimationFrameID = _this.$window.requestAnimationFrame(function () { _this.doAnim(); });
                _this.$scope.$apply();
            };
            this.positionBallsInArena = function () {
                var overlap;
                var balls = _this.$scope.balls;
                var length = balls.length;
                do {
                    overlap = false;
                    for (var i = 0; (i < length) && !overlap; i++) {
                        var ballA = balls[i];
                        for (var j = 0; (j < length) && !overlap; j++) {
                            if (i === j)
                                continue;
                            if (ballA.isOverlapping(balls[j])) {
                                var point = _this.getRandomBallPosition(ballA);
                                ballA.cx = point.x;
                                ballA.cy = point.y;
                                overlap = true;
                            }
                        }
                    }
                } while (overlap);
            };
            this.requestNewFrame = function () {
                _this.$scope.requestAnimationFrameID = _this.$window.requestAnimationFrame(_this.doAnim);
                ;
            };
            this.initialize = function () {
                _this.createBallElements();
                _this.positionBallsInArena();
            };
            this.initWindow = function () {
                if (!_this.svgSupported()) {
                    alert("Inline SVG in HTML5 is not supported. This document requires a browser that supports HTML5 and inline SVG.");
                    return;
                }
                _this.initialize();
                _this.createWall();
                _this.$scope.startInteraction = _this.startInteraction;
                _this.$scope.stopInteraction = _this.stopInteraction;
                _this.$scope.ballMouseDown = _this.ballMouseDown;
                _this.$scope.ballMouseUp = _this.ballMouseUp;
                _this.$scope.ballMouseMove = _this.ballMouseMove;
                _this.requestNewFrame();
            };
            this.createWall = function () {
                var screenWidth = _this.$window.innerWidth;
                var screenHeight = _this.$window.innerHeight;
                var screenCenterX = screenWidth / 2;
                var screenCenterY = screenHeight / 2;
                var wStep = screenHeight / 100;
                var maxWidth = screenWidth / 3;
                var maxHeight = screenHeight / 2;
                var borderWeght = Number.MAX_VALUE;
                var newOriginx = 0;
                var obstacles = _this.$scope.obstacles;
                var step = 60;
                var lightSpotSize = 300;
                var coliderRadius = lightSpotSize / 5;
                var maxPositionX = screenCenterX + lightSpotSize / 2 - coliderRadius;
                var currentPositionX = screenCenterX - lightSpotSize / 2 + coliderRadius;
                while (currentPositionX <= maxPositionX) {
                    var colider = new Snowstorm.Ball(coliderRadius, currentPositionX, screenCenterY, borderWeght);
                    obstacles.push(colider);
                    currentPositionX += step;
                }
                var borderThikness = 0;
                var borderRadius = 100000;
                var leftBorder = new Snowstorm.Ball(borderRadius, -borderRadius + borderThikness - newOriginx, screenWidth / 2 - newOriginx, borderWeght);
                var rightBorder = new Snowstorm.Ball(borderRadius, screenWidth + borderRadius - borderThikness - newOriginx, screenWidth / 2 - newOriginx, borderWeght);
                var topBorder = new Snowstorm.Ball(borderRadius, screenWidth / 2 - newOriginx, -borderRadius + borderThikness - newOriginx, borderWeght);
                var bottomBorder = new Snowstorm.Ball(borderRadius, screenWidth / 2 - newOriginx, screenHeight + borderRadius - borderThikness - newOriginx, borderWeght);
                obstacles.push(leftBorder);
                obstacles.push(rightBorder);
                obstacles.push(topBorder);
                obstacles.push(bottomBorder);
            };
            this.startInteraction = function (ball) {
                ball.isEnabled = false;
            };
            this.stopInteraction = function (ball) {
                ball.isEnabled = true;
            };
            this.ballMouseDown = function (ball) {
                ball.isDragged = true;
            };
            this.ballMouseUp = function (ball) {
                ball.isDragged = false;
                alert("ballMouseUp");
            };
            this.ballMouseMove = function (ball, event) {
                if (!ball.isDragged)
                    return;
            };
            $scope.balls = [];
            $scope.obstacles = [];
            this.initWindow();
        }
        AppCtrl.prototype.processBallCollisions = function (ball) {
            var balls = this.$scope.balls;
            for (var i = 0; i < balls.length; i++) {
                var currentBall = balls[i];
                if (currentBall === ball)
                    continue;
                if (ball.isOverlapping(balls[i]))
                    ball.processCollision(balls[i]);
            }
        };
        AppCtrl.prototype.processObstaclesCollisions = function (ball) {
            var obstacles = this.$scope.obstacles;
            for (var i = 0; i < obstacles.length; i++) {
                var currentObstacle = obstacles[i];
                if (ball.isOverlapping(currentObstacle))
                    ball.processCollision(currentObstacle);
            }
        };
        AppCtrl.prototype.createBallElements = function () {
            for (var i = 0; i < 5; i++) {
                var radius = 64;
                var ballWeight = 1;
                var ballElement = new Snowstorm.Ball(radius, 0, 0, ballWeight);
                var newPosition = this.getRandomBallPosition(ballElement);
                ballElement.cx = newPosition.x;
                ballElement.cy = newPosition.y;
                var vx = this.getRandomSpeed();
                var vy = this.getRandomSpeed();
                ballElement.v = new Snowstorm.Vector(vx, vy);
                ballElement.color = Snowstorm.Random.getRandomColor();
                this.$scope.balls.push(ballElement);
            }
        };
        AppCtrl.$inject = [
            "$scope", "$window", "$interval", "$timeout"
        ];
        return AppCtrl;
    }());
    Snowstorm.AppCtrl = AppCtrl;
})(Snowstorm || (Snowstorm = {}));
