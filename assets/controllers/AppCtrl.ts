module Snowstorm {
    "use strict";

    export class AppCtrl {

        //DI
        static $inject = [
            "$scope", "$window", "$interval", "$timeout"
        ];

        constructor(
            private $scope: IAppCtrlScope,
            private $window: angular.IWindowService,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService
        ) {
            //AppCtrl start
            $scope.balls = [];
            $scope.obstacles = [];

            this.initWindow();
        }

        svgSupported = (): boolean => {
            return true;
        }


        getRandomSpeed = (): number => {
            return Random.getRandomReal(-200, 200);
        }

        getRandomBallPosition = (ball: Ball): Point => {

            let haveCollision = false;
            let p: Point;
            let allObjects = this.$scope.balls.concat(this.$scope.obstacles);
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

                if (ball.isOverlapping(currentObstacle))
                    ball.processCollision(currentObstacle); // These two balls have collided, change their velocity vectors appropriately.
            }
        }

        createBallElements(): void {
            for (let i = 0; i < 5; i++) {

                const radius = 64; //this.getRandomBallRadius(); // The radius of the ball.
                const ballWeight = 1;

                const ballElement = new Ball(radius, 0, 0, ballWeight);
                const newPosition = this.getRandomBallPosition(ballElement); // For this function, the radius of a ball is needed to make sure that the ball is contained within the arena.

                ballElement.cx = newPosition.x;
                ballElement.cy = newPosition.y;

                const vx = this.getRandomSpeed();
                const vy = this.getRandomSpeed();

                ballElement.v = new Vector(vx, vy); // Give the ball element a custom velocity vector object (whose x- and y-component are randomly chosen).

                ballElement.color = Random.getRandomColor();

                this.$scope.balls.push(ballElement);
            }
        }

        positionBallsInArena = (): void => {
            var overlap: boolean; // Assume that none of the balls physically overlap.

            const balls = this.$scope.balls;
            const length = balls.length;

            do // Make sure that none of the balls physically overlap within the arena (using an inelegant brute force algorithm)
            {
                overlap = false; // Reset the value for each iteration of the loop.
                for (let i = 0; (i < length) && !overlap; i++) {
                    const ballA = balls[i];
                    for (let j = 0; (j < length) && !overlap; j++) {
                        if (i === j)
                            continue; // Breaks the current loop and continues with the next j value.

                        if (ballA.isOverlapping(balls[j])) {
                            const point = this.getRandomBallPosition(ballA); // Returns an object representing a 2D point.
                            ballA.cx = point.x;
                            ballA.cy = point.y;
                            overlap = true;
                        }
                    } // Inner "j" FOR loop.
                } // Outer "i" FOR loop.
            } while (overlap);
        }

        requestNewFrame = (): void => {
            this.$scope.requestAnimationFrameID = this.$window.requestAnimationFrame(this.doAnim);;
        }

        initialize = (): void => {
            this.createBallElements(); // Create all ball elements and add custom properties to these elements as well.
            this.positionBallsInArena(); // Position the balls in the circular arena such that none of them overlap.
        }

        initWindow = (): void => {
            if (!this.svgSupported()) {
                alert("Inline SVG in HTML5 is not supported. This document requires a browser that supports HTML5 and inline SVG.");
                return;
            }
            this.initialize();
            this.createWall();
            this.requestNewFrame();
        }


        createWall = (): void => {
            const screenWidth = this.$window.innerWidth;
            const screenHeight = this.$window.innerHeight;

            const screenCenterX = screenWidth / 2;
            const screenCenterY = screenHeight / 2;

            const wStep = screenHeight / 100;
            const maxWidth = screenWidth / 3;
            const maxHeight = screenHeight / 2;
            const borderWeght = Number.MAX_VALUE;
            const newOriginx = 0;


            var obstacles = this.$scope.obstacles;
            const stripeHeight = 20;
            let currentWidth = 0;
            let currentPosition = stripeHeight / 2;

            // while (currentPosition < maxWidth) {
            //     const colider = new Ball(currentWidth, screenCenterX - newOriginx, currentPosition - newOriginx, borderWeght);
            //     obstacles.push(colider);
            //
            //     currentPosition += stripeHeight;
            //     currentWidth += wStep;
            // }

            const centerColiderRadius = 150;
            const centerColider = new Ball(centerColiderRadius, screenCenterX, screenCenterY, borderWeght);
            obstacles.push(centerColider);

            const borderThikness = 0;
            const borderRadius = 100000;


            const leftBorder = new Ball(borderRadius, -borderRadius + borderThikness - newOriginx, screenWidth / 2 - newOriginx, borderWeght);
            const rightBorder = new Ball(borderRadius, screenWidth + borderRadius - borderThikness - newOriginx, screenWidth / 2 - newOriginx, borderWeght);
            const topBorder = new Ball(borderRadius, screenWidth / 2 - newOriginx, -borderRadius + borderThikness - newOriginx, borderWeght);
            const bottomBorder = new Ball(borderRadius, screenWidth / 2 - newOriginx, screenHeight + borderRadius - borderThikness - newOriginx, borderWeght);

            obstacles.push(leftBorder);
            obstacles.push(rightBorder);
            obstacles.push(topBorder);
            obstacles.push(bottomBorder);
        }

    }
}
