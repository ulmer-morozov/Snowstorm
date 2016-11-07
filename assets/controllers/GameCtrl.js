var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var GameCtrl = (function () {
        function GameCtrl($scope, $window, $interval, $timeout, $location, preloader) {
            var _this = this;
            this.$scope = $scope;
            this.$window = $window;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$location = $location;
            this.preloader = preloader;
            this.goToAuthor = function (mascot) {
                _this.$location.url("/Author/" + mascot.artist.id);
            };
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
                var result = true;
                for (var i = 0; i < balls.length; i++) {
                    var ballA = balls[i];
                    var positioningSuccess = _this.positionBallRandomlyInArena(ballA);
                    if (positioningSuccess)
                        continue;
                    result = false;
                    break;
                }
                return result;
            };
            this.positionBallRandomlyInArena = function (ball) {
                var balls = _this.$scope.balls;
                var obstacles = _this.$scope.obstacles;
                var lights = _this.$scope.lights;
                var maxAttemptsCount = 2002;
                var allObjects = balls.concat(obstacles).concat(lights);
                var overlap, point;
                var success = false;
                for (var attempt = 0; attempt < maxAttemptsCount; attempt++) {
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
                    if (overlap)
                        continue;
                    success = true;
                    break;
                }
                return success;
            };
            this.requestNewFrame = function () {
                _this.$scope.requestAnimationFrameID = _this.$window.requestAnimationFrame(_this.doAnim);
            };
            this.initWindow = function () {
                _this.createBallElements();
                _this.createWall();
                var successPositioning = _this.positionBallsInArena();
                if (!successPositioning || _this.screenWidth < 768) {
                    debugger;
                    _this.$location.url("/Authors");
                    return;
                }
                _this.$scope.startInteraction = _this.startInteraction;
                _this.$scope.stopInteraction = _this.stopInteraction;
                _this.$scope.stopDrag = _this.stopDrag;
                _this.$scope.startDrag = _this.startDrag;
                _this.$scope.ballMouseUp = _this.ballMouseUp;
                _this.$scope.ballMouseMove = _this.ballMouseMove;
                _this.$scope.getMascotImg = _this.getMascotImg;
                _this.$scope.goToAuthor = _this.goToAuthor;
                var imagePaths = [];
                angular.forEach(_this.$scope.balls, function (mascot) {
                    var imagePath = "assets/images/mascots/" + mascot.artist.mascotName + "_120x120.png";
                    imagePaths.push(imagePath);
                });
                _this.$scope.pageIsLoading = true;
                var pageLoadComplete = function () {
                    _this.$timeout(function () {
                        _this.$scope.pageIsLoading = false;
                        _this.requestNewFrame();
                    }, 1);
                };
                _this.preloader.preloadImages(imagePaths)
                    .then(function () {
                    pageLoadComplete();
                }, function () {
                    pageLoadComplete();
                });
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
                var footerHeight = 74;
                var leftBorder = new Snowstorm.Wall(borderRadius, -borderRadius + borderThikness - newOriginx, _this.screenWidth / 2 - newOriginx, borderWeght);
                var rightBorder = new Snowstorm.Wall(borderRadius, _this.screenWidth + borderRadius - borderThikness - newOriginx, _this.screenWidth / 2 - newOriginx, borderWeght);
                var topBorder = new Snowstorm.Wall(borderRadius, _this.screenWidth / 2 - newOriginx, -borderRadius + borderThikness - newOriginx, borderWeght);
                var bottomBorder = new Snowstorm.Wall(borderRadius, _this.screenWidth / 2 - newOriginx, _this.screenHeight + borderRadius - borderThikness - newOriginx - footerHeight, borderWeght);
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
            this.startInteraction = function (mascot) {
                mascot.activated = true;
            };
            this.stopInteraction = function (mascot) {
                mascot.activated = false;
                if (mascot.isDragged || _this.isSelected(mascot))
                    return;
                mascot.movingEnabled = true;
            };
            this.stopDrag = function (ball) {
                ball.isDragged = false;
                ball.activated = false;
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
            this.startDrag = function (mascot) {
                mascot.activated = false;
                mascot.isDragged = true;
                _this.$scope.currentBall = mascot;
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
            var ballWeight = 1;
            var artists = [
                new Snowstorm.Artist(1, "Евгения", "Баринова", "balet", 90),
                new Snowstorm.Artist(2, "Хадия", "Улумбекова", "pigeon", 60),
                new Snowstorm.Artist(3, "Любовь", "Березина", "pinkbird", 60),
                new Snowstorm.Artist(4, "Арина", "Шабанова", "heart", 60),
                new Snowstorm.Artist(5, "Тимур", "Зима", "livingBall", 60),
                new Snowstorm.Artist(6, "Алексей", "Сухов", "rat", 60),
                new Snowstorm.Artist(7, "Александра", "Киселёва", "house", 60),
                new Snowstorm.Artist(8, "Ольга", "Чикина", "horse", 60),
                new Snowstorm.Artist(9, "Екатерина", "Дорохина", "pizza", 60),
                new Snowstorm.Artist(10, "Екатерина", "Воронина", "fox", 60),
                new Snowstorm.Artist(11, "Никита", "Кибирев", "nik", 60),
                new Snowstorm.Artist(12, "Сергей", "Гудков", "cat", 60),
                new Snowstorm.Artist(13, "Нилюфер", "Закирова", "flower", 60),
            ];
            for (var i = 0; i < artists.length; i++) {
                var artist = artists[i];
                var maccot = new Snowstorm.Mascot(artist, artist.radius, 0, 0, ballWeight);
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
        return GameCtrl;
    }());
    GameCtrl.$inject = [
        "$scope", "$window", "$interval", "$timeout", "$location", "preloader"
    ];
    Snowstorm.GameCtrl = GameCtrl;
})(Snowstorm || (Snowstorm = {}));
