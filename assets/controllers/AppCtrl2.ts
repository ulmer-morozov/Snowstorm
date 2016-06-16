module Snowstorm {
    "use strict";
    export class AppCtrl {

        //DI
        static $inject = [
            "$scope", "$window", "$interval", "$timeout"
        ];

        constructor(
            private $scope: any,
            private $window: ng.IWindowService,
            private $interval: ng.IIntervalService,
            private $timeout: ng.ITimeoutService
        ) {

            // Инициализируем
            this.init();
        }

        private init(): void {
            this.createWall();
            this.createMascots();
            this.startAnimation();
        }

        private createWall = (): void => {
            let screenWidth = this.$window.innerWidth;
            let screenHeight = this.$window.innerHeight;

            let screenCenterX = screenWidth / 2;
            let screenCenterY = screenHeight / 2;

            const wStep = screenHeight / 100;
            const maxWidth = screenWidth / 5;
            const maxHeight = screenHeight * 1 / 2;
            const borderWeght = 10000000000;

            var coliders = this.$scope.coliders = [];
            let stripeHeight = 20;
            let currentWidth = 0;
            let currentPosition = -stripeHeight;

            while (currentPosition < maxHeight) {
                var colider = new FloorObject(currentWidth, screenCenterX, currentPosition);
                coliders.push(colider);

                currentPosition += stripeHeight;
                currentWidth += wStep;
            }

            const borderThikness = 10;
            const borderRadius = 10000;

            let leftBorder = new FloorObject(borderRadius, -borderRadius + borderThikness, screenWidth / 2)
            let rightBorder = new FloorObject(borderRadius, screenWidth + borderRadius - borderThikness, screenWidth / 2)
            let topBorder = new FloorObject(borderRadius, screenWidth / 2, -borderRadius + borderThikness)
            let bottomBorder = new FloorObject(borderRadius, screenWidth / 2, screenHeight + borderRadius - borderThikness)

            coliders.push(leftBorder);
            coliders.push(rightBorder);
            coliders.push(topBorder);
            coliders.push(bottomBorder);
            
            // floor.p.y += floor.r + c.height - 10;

            // var colider = new Colider(100, 500, screenCenterX, 0);
            // this.$scope.coliders.push(colider);
        }

        private createMascots = (): void => {
            this.$scope.mascots = [];

            let screenWidth = this.$window.innerWidth;
            let screenHeight = this.$window.innerHeight;

            let mascot;

            mascot = new BallObject(1, 0);
            mascot.p.x = 100;
            mascot.p.y = 100;
            this.$scope.mascots.push(mascot);

            mascot = new BallObject(1, 0);
            mascot.p.x = 100;
            mascot.p.y = 300;
            this.$scope.mascots.push(mascot);

            mascot = new BallObject(1, -1);
            mascot.p.x = 90;
            mascot.p.y = 500;
            this.$scope.mascots.push(mascot);

            mascot = new BallObject(1, -1);
            mascot.p.x = screenWidth - 90;
            mascot.p.y = 100;
            this.$scope.mascots.push(mascot);

            mascot = new BallObject(-1, 1);
            mascot.p.x = screenWidth - 90;
            mascot.p.y = 300;
            this.$scope.mascots.push(mascot);

            mascot = new BallObject(-1, -1);
            mascot.p.x = screenWidth - 90;
            mascot.p.y = 500;
            this.$scope.mascots.push(mascot);


            mascot = new BallObject(-1, -1);
            mascot.p.x = screenWidth / 2;
            mascot.p.y = screenHeight - 100;
            this.$scope.mascots.push(mascot);
        }

        private enterFrame = (): void => {

            let mascots: BallObject[] = this.$scope.mascots;
            let coliders: FloorObject[] = this.$scope.coliders;
            let objs = mascots.concat(coliders);

            for (let i = 0; i < mascots.length; i++) {

                // if a ball > viewport width away from center remove it
                let obj = objs[i];
                // while (obj.p.x < 0 || obj.p.x > screenWidth) {
                //     // objs.splice(i, 1);
                // }

                for (let j = i + 1; j < objs.length; j++) {
                    let collisionFinded = objs[j].collide(objs[i]);
                    // if (collisionFinded)
                    //     break;
                }
            }

            for (let i = 0; i < mascots.length; i++) {
                mascots[i].update();
            }


            //
            // for (let i = 0; i < mascots.length; i++) {
            //     var mascot = mascots[i];
            //
            //     for (let j = i; j < mascots.length; j++) {
            //         var otherMascot = mascots[j];
            //         if (otherMascot === mascot)
            //             continue;
            //         //interact!
            //         var interactionFinded = mascot.collide(otherMascot);
            //
            //     }
            //
            //     //проверим пересечения
            //     for (let i = 0; i < coliders.length; i++) {
            //         var colider = coliders[i];
            //         mascot.collide(colider);
            //     }
            //     //
            //     // for (let j = i; j < mascots.length; j++) {
            //     //     var otherMascot = mascots[j];
            //     //     if (otherMascot === mascot)
            //     //         continue;
            //     //     //interact!
            //     //     var interactionFinded = mascot.interact(otherMascot);
            //     //     if (interactionFinded) {
            //     //         // debugger;
            //     //         return;
            //     //     }
            //     // }
            // }
            //
            // // сделаем шаги
            // for (let i = 0; i < mascots.length; i++) {
            //     var mascot = mascots[i];
            //     mascot.update();
            // }
            //
            // for (let i = 0; i < coliders.length; i++) {
            //     var colider = coliders[i];
            //     colider.update();
            // }
            //
            //
            // console.log("enterFrame");
        }

        private startAnimation = (): void => {
            this.$interval(this.enterFrame, 1000 / 60);
        }

    }
}
