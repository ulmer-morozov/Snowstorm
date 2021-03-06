﻿module Snowstorm {
    "use strict";

    export class GameCtrl {

        //DI
        static $inject = [
            "$scope", "$window", "$interval", "$timeout", "$location", "preloader"
        ];

        private mouseTrack: Vector;
        private lastMousePos: Vector;
        private mouseSpeedCounter: number;

        private screenWidth: number;
        private screenHeight: number;

        private screenCenterX: number;
        private screenCenterY: number;

        constructor(
            private $scope: IGameCtrlScope,
            private $window: ng.IWindowService,
            private $interval: ng.IIntervalService,
            private $timeout: ng.ITimeoutService,
            private $location: ng.ILocationService,
            private preloader: any
        ) {
            // трекинг мыши
            this.mouseSpeedCounter = 0;
            this.mouseTrack = new Vector(0, 0);
            this.lastMousePos = new Vector(0, 0);
            //размер экрана
            this.screenWidth = this.$window.innerWidth;
            this.screenHeight = this.$window.innerHeight;
            //центр экрана
            this.screenCenterX = this.screenWidth / 2;
            this.screenCenterY = this.screenHeight / 2;

            //AppCtrl start
            $scope.balls = [];
            $scope.obstacles = [];
            $scope.lights = [];
            $scope.mouseSpeed = new Vector(0, 0);
            this.initWindow();
        }

        goToAuthor = (mascot: Mascot): void => {
            this.$location.url(`/Author/${mascot.artist.id}`);
        }


        getRandomSpeed = (): number => {
            return Random.getRandomReal(-200, 200);
        }

        getRandomBallPosition = (ball: Ball): Point => {

            let haveCollision = false;
            let p: Point;
            let allObjects: Colider[] = [];

            allObjects.concat(this.$scope.balls);
            allObjects.concat(this.$scope.obstacles);
            allObjects.concat(this.$scope.lights);

            const screenWidth = this.$window.innerWidth;
            const screenHeight = this.$window.innerHeight;
            do {
                let newX = Random.getRandomInteger(100, screenWidth - ball.r);
                let newY = Random.getRandomInteger(100, screenHeight - ball.r);
                p = new Point(newX, newY); // Create a point object of the form p.x and p.y

                let haveCollision = false;

                for (let i = 0; i < allObjects.length; i++) {
                    let existingObject = allObjects[i];
                    if (existingObject.isOverlapping(ball)) {
                        haveCollision = true;
                        break;
                    }
                }
            }
            while (haveCollision)


            return p; // Returns a point object (as in point.x and point.y).
        }

        /* This function will be invoked by the browser until the animation is cancelled. */
        doAnim = (): void => {

            var balls = this.$scope.balls;

            for (let i = 0; i < balls.length; i++) {
                const ball = balls[i];
                ball.move();

                this.processBallCollisions(ball);
                this.processObstaclesCollisions(ball);

            }

            // Preserves the correct "this" pointer.
            this.$scope.requestAnimationFrameID = this.$window.requestAnimationFrame(() => { this.doAnim() });
            this.$scope.$apply();

            this.mouseSpeedCounter++;
            this.updateMouseSpeed();
        }

        processBallCollisions(ball: Ball) {
            const balls = this.$scope.balls;
            for (let i = 0; i < balls.length; i++) {
                const currentBall = balls[i];

                if (currentBall === ball)
                    continue; // Don't bother to see if the ball has collided with itself - a waste of processing time.

                if (ball.isOverlapping(balls[i]))
                    ball.processCollision(balls[i]); // These two balls have collided, change their velocity vectors appropriately.
            }
        }

        processObstaclesCollisions(ball: Ball) {
            const obstacles = this.$scope.obstacles;

            for (let i = 0; i < obstacles.length; i++) {
                const currentObstacle = obstacles[i];

                if (ball.isOverlapping(currentObstacle)) {
                    ball.processCollision(currentObstacle); // These two balls have collided, change their velocity vectors appropriately.
                    // достаточно отработки одного столкновения
                    return;
                }

            }

            if (ball.isDragged || this.isSelected(ball))
                return;

            // те мячи, что не передвигаются мышью должны сталкиваться со светом
            const lights = this.$scope.lights;

            for (let i = 0; i < lights.length; i++) {
                const currentLight = lights[i];

                if (ball.isOverlapping(currentLight)) {
                    ball.processCollision(currentLight);
                    return;
                }

            }
        }

        createBallElements(): void {
            const ballWeight = 1;


            var artists = [
                new Artist(1, "Евгения", "Баринова", "balet", 90),
                new Artist(2, "Хадия", "Улумбекова", "pigeon", 60),
                new Artist(3, "Любовь", "Березина", "pinkbird", 60),

                new Artist(4, "Арина", "Шабанова", "heart", 60),
                new Artist(5, "Тимур", "Зима", "livingBall", 60),
                new Artist(6, "Алексей", "Сухов", "rat", 60),

                new Artist(7, "Александра", "Киселёва", "house", 60),
                new Artist(8, "Ольга", "Чикина", "horse", 60),
                new Artist(9, "Екатерина", "Дорохина", "pizza", 60),

                new Artist(10, "Катерина", "Воронина", "fox", 60),
                new Artist(11, "Никита", "Кибирев", "nik", 60),
                new Artist(12, "Сергей", "Гудков", "cat", 60),
                new Artist(13, "Нилюфер", "Закирова", "flower", 60),
            ];

            for (let i = 0; i < artists.length; i++) {
                let artist = artists[i];

                const maccot = new Mascot(artist, artist.radius, 0, 0, ballWeight);
                const newPosition = this.getRandomBallPosition(maccot); // For this function, the radius of a ball is needed to make sure that the ball is contained within the arena.

                maccot.cx = newPosition.x;
                maccot.cy = newPosition.y;

                const vx = this.getRandomSpeed();
                const vy = this.getRandomSpeed();

                maccot.v = new Vector(vx, vy); // Give the ball element a custom velocity vector object (whose x- and y-component are randomly chosen).
                maccot.color = Random.getRandomColor();

                this.$scope.balls.push(maccot);
            }
        }

        positionBallsInArena = (): boolean => {
            const balls = this.$scope.balls;
            let result = true;
            for (let i = 0; i < balls.length; i++) {
                const ballA = balls[i];
                var positioningSuccess = this.positionBallRandomlyInArena(ballA);
                if (positioningSuccess)
                    continue;

                result = false;
                break;
            }
            return result;
        }

        positionBallRandomlyInArena = (ball: Ball): boolean => {
            const balls: Colider[] = this.$scope.balls;
            const obstacles: Colider[] = this.$scope.obstacles;
            const lights: Colider[] = this.$scope.lights;
            const maxAttemptsCount = 2002;

            let allObjects = balls.concat(obstacles).concat(lights);
            let overlap, point;

            let success = false;

            for (let attempt = 0; attempt < maxAttemptsCount; attempt++) {
                overlap = false;

                point = this.getRandomBallPosition(ball); // Returns an object representing a 2D point.
                ball.cx = point.x;
                ball.cy = point.y;

                for (let j = 0; j < allObjects.length; j++) {
                    let otherObject = allObjects[j];
                    if (ball === otherObject)
                        continue; // Breaks the current loop and continues with the next j value.

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
        }

        requestNewFrame = (): void => {
            this.$scope.requestAnimationFrameID = this.$window.requestAnimationFrame(this.doAnim);
        }

        initWindow = (): void => {
            this.createBallElements();
            this.createWall();
            let successPositioning = this.positionBallsInArena();
            if (!successPositioning || this.screenWidth < 768) {
                //переходим на другую страницу, размер экрана не подхожит
                this.$location.url(`/Authors`);
                return;
            }

            this.$scope.startInteraction = this.startInteraction;
            this.$scope.stopInteraction = this.stopInteraction;

            this.$scope.stopDrag = this.stopDrag;
            this.$scope.startDrag = this.startDrag;

            this.$scope.ballMouseUp = this.ballMouseUp;
            this.$scope.ballMouseMove = this.ballMouseMove;

            this.$scope.getMascotImg = this.getMascotImg;
            this.$scope.goToAuthor = this.goToAuthor;

            let imagePaths = [];
            angular.forEach(this.$scope.balls, (mascot: Mascot) => {
                let imagePath = `assets/images/mascots/${mascot.artist.mascotName}_120x120.png`;
                imagePaths.push(imagePath);
            });

            this.$scope.pageIsLoading = true;

            var pageLoadComplete = () => {
                this.$timeout(() => {
                    this.$scope.pageIsLoading = false;
                    this.requestNewFrame();
                }, 1);
            }

            this.preloader.preloadImages(imagePaths)
                .then(function() {
                    pageLoadComplete();
                },
                function() {
                    pageLoadComplete();
                });
        }

        createLightSpot = (): void => {
            const wStep = this.screenHeight / 100;
            const maxWidth = this.screenWidth / 3;
            const maxHeight = this.screenHeight / 2;

            const lightWeight = Number.MAX_VALUE;
            const step = 60;
            const lightSpotSize = 300;
            const coliderRadius = lightSpotSize / 5;
            const maxPositionX = this.screenCenterX + lightSpotSize / 2 - coliderRadius;

            let currentPositionX = this.screenCenterX - lightSpotSize / 2 + coliderRadius;
            let lights: LightSpot[] = [];

            while (currentPositionX <= maxPositionX) {
                const lightSpot = new LightSpot(coliderRadius, currentPositionX, this.screenCenterY, lightWeight);
                lights.push(lightSpot);

                currentPositionX += step;
            }

            const centralSpot = new LightSpot(1.2 * coliderRadius, this.screenCenterX, this.screenCenterY, lightWeight);
            lights.push(centralSpot);

            this.$scope.lights = lights;
        }

        createWall = (): void => {
            const newOriginx = 0;
            const borderWeght = Number.MAX_VALUE;

            let obstacles = this.$scope.obstacles;

            const borderThikness = 0;
            const borderRadius = 100000;
            const footerHeight = 67;

            const leftBorder = new Wall(borderRadius, -borderRadius + borderThikness - newOriginx, this.screenWidth / 2 - newOriginx, borderWeght);
            const rightBorder = new Wall(borderRadius, this.screenWidth + borderRadius - borderThikness - newOriginx, this.screenWidth / 2 - newOriginx, borderWeght);
            const topBorder = new Wall(borderRadius, this.screenWidth / 2 - newOriginx, -borderRadius + borderThikness - newOriginx, borderWeght);
            const bottomBorder = new Wall(borderRadius, this.screenWidth / 2 - newOriginx, this.screenHeight + borderRadius - borderThikness - newOriginx - footerHeight, borderWeght);

            obstacles.push(leftBorder);
            obstacles.push(rightBorder);
            obstacles.push(topBorder);
            obstacles.push(bottomBorder);
        }

        ballPlacedInTheLight = (ball: Ball): boolean => {
            const lights = this.$scope.lights;
            for (let i = 0; i < lights.length; i++) {
                let light = lights[i];
                if (ball.isOverlapping(light))
                    return true;
            }
            return false;
        }

        isSelected = (ball: Ball): boolean => {
            let result = this.$scope.selectedBall == ball;
            return result;
        }

        startInteraction = (mascot: Mascot): void => {
            mascot.activated = true;
            // ball.movingEnabled = false;
        }

        stopInteraction = (mascot: Mascot): void => {
            mascot.activated = false;
            if (mascot.isDragged || this.isSelected(mascot))
                return;

            mascot.movingEnabled = true;
        }

        stopDrag = (ball: Mascot): void => {
            ball.isDragged = false;
            ball.activated = false;

            if (this.ballPlacedInTheLight(ball)) {
                let oldSelectedBall = this.$scope.selectedBall;
                let oldSelectedBallExist = oldSelectedBall != undefined && oldSelectedBall != ball;

                if (oldSelectedBallExist) {
                    this.positionBallRandomlyInArena(oldSelectedBall);
                    oldSelectedBall.movingEnabled = true;
                }

                this.$scope.selectedBall = ball;
                ball.movingEnabled = false;

                // перенесем на центр экрана мяч

                this.$timeout(() => {
                    ball.cx = this.screenCenterX;
                    ball.cy = this.screenCenterY;
                }, 50)

            } else {
                ball.v = this.$scope.mouseSpeed;
                ball.isEnabled = true;
                ball.movingEnabled = true;

                if (this.isSelected(ball)) {
                    //больше не выбранный мяч
                    this.$scope.selectedBall = undefined;
                }
            }

        }

        startDrag = (mascot: Mascot): void => {
            mascot.activated = false;
            mascot.isDragged = true;

            this.$scope.currentBall = mascot;
        }

        ballMouseUp = (ball: Ball): void => {
            ball.isDragged = false;
            ball.movingEnabled = false;
        }

        updateMouseSpeed = (): void => {
            this.mouseSpeedCounter = this.mouseSpeedCounter % 5;
            if (this.mouseSpeedCounter != 0)
                return;

            let newSpeed = this.mouseTrack.multi(30).mathRound();

            const maxSpeed = 2000;
            if (newSpeed.getLength() > maxSpeed) {
                newSpeed = newSpeed.normalize().multi(maxSpeed);
            }

            this.$scope.mouseSpeed = newSpeed;

            this.mouseTrack = new Vector(0, 0);
            this.$scope.$apply();
        }

        ballMouseMove = (event: MouseEvent): void => {
            let ball = this.$scope.currentBall;
            let mousePos = new Vector(event.pageX, event.pageY);

            if (ball == undefined || !ball.isDragged)
                return;

            ball.cx = mousePos.xc;
            ball.cy = mousePos.yc;

            let diffPos = mousePos.diff(this.lastMousePos);

            this.lastMousePos = mousePos;
            this.mouseTrack = this.mouseTrack.add(diffPos);
        }

        getMascotImg = (mascot: Mascot): string => {
            const imgUrl = `../images/mascots/${mascot.artist.mascotName}.png`;
            return imgUrl;
        }
    }
}
