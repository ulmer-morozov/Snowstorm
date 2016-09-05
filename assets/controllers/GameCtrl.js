var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var GameCtrl = (function () {
        function GameCtrl($scope, $window, $interval, $timeout) {
            var _this = this;
            this.$scope = $scope;
            this.$window = $window;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.getRandomSpeed = function () {
                return Snowstorm.Random.getRandomReal(-200, 200);
            };
            this.getRandomBallPosition = function (ball) {
                var haveCollision = false;
                var p;
                var allObjects = [];
                allObjects.concat(_this.$scope.balls);
                allObjects.concat(_this.$scope.obstacles);
                allObjects.concat(_this.$scope.lights);
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
                _this.mouseSpeedCounter++;
                _this.updateMouseSpeed();
            };
            this.positionBallsInArena = function () {
                var balls = _this.$scope.balls;
                for (var i = 0; i < balls.length; i++) {
                    var ballA = balls[i];
                    _this.positionBallRandomlyInArena(ballA);
                }
            };
            this.positionBallRandomlyInArena = function (ball) {
                var balls = _this.$scope.balls;
                var obstacles = _this.$scope.obstacles;
                var lights = _this.$scope.lights;
                var allObjects = balls.concat(obstacles).concat(lights);
                var overlap, point;
                do {
                    overlap = false;
                    point = _this.getRandomBallPosition(ball);
                    ball.cx = point.x;
                    ball.cy = point.y;
                    for (var j = 0; j < allObjects.length; j++) {
                        var otherObject = allObjects[j];
                        if (ball === otherObject)
                            continue;
                        if (ball.isOverlapping(otherObject)) {
                            overlap = true;
                            break;
                        }
                    }
                } while (overlap);
            };
            this.requestNewFrame = function () {
                _this.$scope.requestAnimationFrameID = _this.$window.requestAnimationFrame(_this.doAnim);
            };
            this.initWindow = function () {
                _this.createBallElements();
                _this.createWall();
                _this.createLightSpot();
                _this.positionBallsInArena();
                _this.$scope.startInteraction = _this.startInteraction;
                _this.$scope.stopInteraction = _this.stopInteraction;
                _this.$scope.stopDrag = _this.stopDrag;
                _this.$scope.startDrag = _this.startDrag;
                _this.$scope.ballMouseUp = _this.ballMouseUp;
                _this.$scope.ballMouseMove = _this.ballMouseMove;
                _this.$scope.getMascotImg = _this.getMascotImg;
                _this.requestNewFrame();
            };
            this.createLightSpot = function () {
                var wStep = _this.screenHeight / 100;
                var maxWidth = _this.screenWidth / 3;
                var maxHeight = _this.screenHeight / 2;
                var lightWeight = Number.MAX_VALUE;
                var step = 60;
                var lightSpotSize = 300;
                var coliderRadius = lightSpotSize / 5;
                var maxPositionX = _this.screenCenterX + lightSpotSize / 2 - coliderRadius;
                var currentPositionX = _this.screenCenterX - lightSpotSize / 2 + coliderRadius;
                var lights = [];
                while (currentPositionX <= maxPositionX) {
                    var lightSpot = new Snowstorm.LightSpot(coliderRadius, currentPositionX, _this.screenCenterY, lightWeight);
                    lights.push(lightSpot);
                    currentPositionX += step;
                }
                var centralSpot = new Snowstorm.LightSpot(1.2 * coliderRadius, _this.screenCenterX, _this.screenCenterY, lightWeight);
                lights.push(centralSpot);
                _this.$scope.lights = lights;
            };
            this.createWall = function () {
                var newOriginx = 0;
                var borderWeght = Number.MAX_VALUE;
                var obstacles = _this.$scope.obstacles;
                var borderThikness = 0;
                var borderRadius = 100000;
                var leftBorder = new Snowstorm.Wall(borderRadius, -borderRadius + borderThikness - newOriginx, _this.screenWidth / 2 - newOriginx, borderWeght);
                var rightBorder = new Snowstorm.Wall(borderRadius, _this.screenWidth + borderRadius - borderThikness - newOriginx, _this.screenWidth / 2 - newOriginx, borderWeght);
                var topBorder = new Snowstorm.Wall(borderRadius, _this.screenWidth / 2 - newOriginx, -borderRadius + borderThikness - newOriginx, borderWeght);
                var bottomBorder = new Snowstorm.Wall(borderRadius, _this.screenWidth / 2 - newOriginx, _this.screenHeight + borderRadius - borderThikness - newOriginx, borderWeght);
                obstacles.push(leftBorder);
                obstacles.push(rightBorder);
                obstacles.push(topBorder);
                obstacles.push(bottomBorder);
            };
            this.ballPlacedInTheLight = function (ball) {
                var lights = _this.$scope.lights;
                for (var i = 0; i < lights.length; i++) {
                    var light = lights[i];
                    if (ball.isOverlapping(light))
                        return true;
                }
                return false;
            };
            this.isSelected = function (ball) {
                var result = _this.$scope.selectedBall == ball;
                return result;
            };
            this.startInteraction = function (ball) {
                ball.movingEnabled = false;
            };
            this.stopInteraction = function (ball) {
                if (ball.isDragged || _this.isSelected(ball))
                    return;
                ball.movingEnabled = true;
            };
            this.stopDrag = function (ball) {
                ball.isDragged = false;
                if (_this.ballPlacedInTheLight(ball)) {
                    var oldSelectedBall = _this.$scope.selectedBall;
                    var oldSelectedBallExist = oldSelectedBall != undefined && oldSelectedBall != ball;
                    if (oldSelectedBallExist) {
                        _this.positionBallRandomlyInArena(oldSelectedBall);
                        oldSelectedBall.movingEnabled = true;
                    }
                    _this.$scope.selectedBall = ball;
                    ball.movingEnabled = false;
                    _this.$timeout(function () {
                        ball.cx = _this.screenCenterX;
                        ball.cy = _this.screenCenterY;
                    }, 50);
                }
                else {
                    ball.v = _this.$scope.mouseSpeed;
                    ball.isEnabled = true;
                    ball.movingEnabled = true;
                    if (_this.isSelected(ball)) {
                        _this.$scope.selectedBall = undefined;
                    }
                }
            };
            this.startDrag = function (ball) {
                ball.isDragged = true;
                _this.$scope.currentBall = ball;
            };
            this.ballMouseUp = function (ball) {
                ball.isDragged = false;
                ball.movingEnabled = false;
            };
            this.updateMouseSpeed = function () {
                _this.mouseSpeedCounter = _this.mouseSpeedCounter % 3;
                if (_this.mouseSpeedCounter != 0)
                    return;
                var newSpeed = _this.mouseTrack.multi(30).mathRound();
                var maxSpeed = 2000;
                if (newSpeed.getLength() > maxSpeed) {
                    newSpeed = newSpeed.normalize().multi(maxSpeed);
                }
                _this.$scope.mouseSpeed = newSpeed;
                _this.mouseTrack = new Snowstorm.Vector(0, 0);
                _this.$scope.$apply();
            };
            this.ballMouseMove = function (event) {
                var ball = _this.$scope.currentBall;
                var mousePos = new Snowstorm.Vector(event.pageX, event.pageY);
                if (ball == undefined || !ball.isDragged)
                    return;
                ball.cx = mousePos.xc;
                ball.cy = mousePos.yc;
                var diffPos = mousePos.diff(_this.lastMousePos);
                _this.lastMousePos = mousePos;
                _this.mouseTrack = _this.mouseTrack.add(diffPos);
            };
            this.getMascotImg = function (mascot) {
                var imgUrl = "../images/mascots/" + mascot.artist.mascotName + ".png";
                return imgUrl;
            };
            this.mouseSpeedCounter = 0;
            this.mouseTrack = new Snowstorm.Vector(0, 0);
            this.lastMousePos = new Snowstorm.Vector(0, 0);
            this.screenWidth = this.$window.innerWidth;
            this.screenHeight = this.$window.innerHeight;
            this.screenCenterX = this.screenWidth / 2;
            this.screenCenterY = this.screenHeight / 2;
            $scope.balls = [];
            $scope.obstacles = [];
            $scope.lights = [];
            $scope.mouseSpeed = new Snowstorm.Vector(0, 0);
            this.initWindow();
        }
        GameCtrl.prototype.processBallCollisions = function (ball) {
            var balls = this.$scope.balls;
            for (var i = 0; i < balls.length; i++) {
                var currentBall = balls[i];
                if (currentBall === ball)
                    continue;
                if (ball.isOverlapping(balls[i]))
                    ball.processCollision(balls[i]);
            }
        };
        GameCtrl.prototype.processObstaclesCollisions = function (ball) {
            var obstacles = this.$scope.obstacles;
            for (var i = 0; i < obstacles.length; i++) {
                var currentObstacle = obstacles[i];
                if (ball.isOverlapping(currentObstacle)) {
                    ball.processCollision(currentObstacle);
                    return;
                }
            }
            if (ball.isDragged || this.isSelected(ball))
                return;
            var lights = this.$scope.lights;
            for (var i = 0; i < lights.length; i++) {
                var currentLight = lights[i];
                if (ball.isOverlapping(currentLight)) {
                    ball.processCollision(currentLight);
                    return;
                }
            }
        };
        GameCtrl.prototype.createBallElements = function () {
            var radius = 60;
            var ballWeight = 1;
            var artists = [
                new Snowstorm.Artist("Птиц", "Розовый", "pinkbird"),
                new Snowstorm.Artist("Марина", "Расплесецкая", "balet"),
                new Snowstorm.Artist("Пингвин", "Южноафриканский", "pigeon"),
                new Snowstorm.Artist("Jack", "Horse", "horse"),
                new Snowstorm.Artist("Шар", "Прост", "livingBall"),
                new Snowstorm.Artist("Домик", "Дымоходов", "house"),
            ];
            for (var i = 0; i < artists.length; i++) {
                var artist = artists[i];
                var maccot = new Snowstorm.Mascot(artist, radius, 0, 0, ballWeight);
                var newPosition = this.getRandomBallPosition(maccot);
                maccot.cx = newPosition.x;
                maccot.cy = newPosition.y;
                var vx = this.getRandomSpeed();
                var vy = this.getRandomSpeed();
                maccot.v = new Snowstorm.Vector(vx, vy);
                maccot.color = Snowstorm.Random.getRandomColor();
                this.$scope.balls.push(maccot);
            }
        };
        GameCtrl.$inject = [
            "$scope", "$window", "$interval", "$timeout"
        ];
        return GameCtrl;
    }());
    Snowstorm.GameCtrl = GameCtrl;
})(Snowstorm || (Snowstorm = {}));
