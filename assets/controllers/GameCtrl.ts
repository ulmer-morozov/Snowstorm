module Snowstorm {
    "use strict";

    export class GameCtrl {

        //DI
        static $inject = [
            "$scope", "$window", "$interval", "$timeout", "$location"
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
            private $location: ng.ILocationService
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
            const radius = 60; //this.getRandomBallRadius(); // The radius of the ball.
            const ballWeight = 1;


            var artists = [
                new Artist(1, "Евгения", "Баринова", "balet"),
                new Artist(2, "Хадия", "...", "pigeon"),
                new Artist(3, "Березина", "...", "pinkbird"),

                new Artist(4, "Арина", "Шабанова", "heart"),
                new Artist(5, "Тимур", "Зима", "livingBall"),
                new Artist(6, "Алексей", "Сухов", "rat"),

                new Artist(7, "Саша", "Киселёва", "house"),
                new Artist(8, "Ольга", "Чикина", "horse"),
                new Artist(9, "Катя", "Дорохина", "pizza"),

                new Artist(10, "Воронина", "...", "fox")
            ];

            for (let i = 0; i < artists.length; i++) {
                let artist = artists[i];

                const maccot = new Mascot(artist, radius, 0, 0, ballWeight);
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

        positionBallsInArena = (): void => {
            const balls = this.$scope.balls;

            for (let i = 0; i < balls.length; i++) {
                const ballA = balls[i];
                this.positionBallRandomlyInArena(ballA);
            }
        }

        positionBallRandomlyInArena = (ball: Ball): void => {
            const balls: Colider[] = this.$scope.balls;
            const obstacles: Colider[] = this.$scope.obstacles;
            const lights: Colider[] = this.$scope.lights;

            let allObjects = balls.concat(obstacles).concat(lights);

            let overlap, point;
            do {
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
            }
            while (overlap)


        }

        requestNewFrame = (): void => {
            this.$scope.requestAnimationFrameID = this.$window.requestAnimationFrame(this.doAnim);
        }

        initWindow = (): void => {
            this.createBallElements(); // Create all ball elements and add custom properties to these elements as well.
            this.createWall();
            // this.createLightSpot();

            this.positionBallsInArena(); // Position the balls in the circular arena such that none of them overlap.

            this.$scope.startInteraction = this.startInteraction;
            this.$scope.stopInteraction = this.stopInteraction;
            this.$scope.stopDrag = this.stopDrag;

            this.$scope.startDrag = this.startDrag;


            this.$scope.ballMouseUp = this.ballMouseUp;
            this.$scope.ballMouseMove = this.ballMouseMove;

            this.$scope.getMascotImg = this.getMascotImg;
            this.$scope.goToAuthor = this.goToAuthor;

            this.requestNewFrame();
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

            const leftBorder = new Wall(borderRadius, -borderRadius + borderThikness - newOriginx, this.screenWidth / 2 - newOriginx, borderWeght);
            const rightBorder = new Wall(borderRadius, this.screenWidth + borderRadius - borderThikness - newOriginx, this.screenWidth / 2 - newOriginx, borderWeght);
            const topBorder = new Wall(borderRadius, this.screenWidth / 2 - newOriginx, -borderRadius + borderThikness - newOriginx, borderWeght);
            const bottomBorder = new Wall(borderRadius, this.screenWidth / 2 - newOriginx, this.screenHeight + borderRadius - borderThikness - newOriginx, borderWeght);

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

        stopDrag = (ball: Ball): void => {
            ball.isDragged = false;

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


                // angular.element(".ball.selected").animate({
                //     top: 100,
                //     left: 100
                // });

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
            this.mouseSpeedCounter = this.mouseSpeedCounter % 3;
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
