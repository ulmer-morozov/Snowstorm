module Snowstorm {
    "use strict";

    export class AppCtrl2 {

        //DI
        static $inject = [
            "$scope", "$window", "$interval", "$timeout"
        ];

        constructor(
            private $scope: IAppCtrlScope,
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
            const maxWidth = screenWidth / 3;
            const borderWeght = 10000000000;

            var coliders = this.$scope.coliders = [];
            let stripeHeight = 20;
            let currentWidth = 0;
            let currentPosition = stripeHeight / 2;

            // while (currentWidth < maxWidth) {
            //     var colider = new Colider(currentWidth, stripeHeight, screenCenterX, currentPosition, borderWeght);
            //     coliders.push(colider);
            //
            //     currentPosition += stripeHeight;
            //     currentWidth += wStep;
            // }

            const borderThikness = 10;
            const borderRadius = 10000;

            let leftBorder = new Colider(borderRadius, -borderRadius + borderThikness, screenWidth / 2, borderWeght)
            let rightBorder = new Colider(borderRadius, screenWidth + borderRadius - borderThikness, screenWidth / 2, borderWeght)
            let topBorder = new Colider(borderRadius, screenWidth / 2, -borderRadius + borderThikness, borderWeght)
            let bottomBorder = new Colider(borderRadius, screenWidth / 2, screenHeight + borderRadius - borderThikness, borderWeght)

            coliders.push(leftBorder);
            coliders.push(rightBorder);
            coliders.push(topBorder);
            coliders.push(bottomBorder);
            // var colider = new Colider(100, 500, screenCenterX, 0);
            // this.$scope.coliders.push(colider);
        }

        private createMascots = (): void => {
            const bodySize = 6;

            this.$scope.mascots = [];

            for (let i = 0; i < 5; i++) {
                var mascot = new Colider(bodySize * i, 50, 2 * (bodySize + 30) * i + 50, i);
                this.$scope.mascots.push(mascot);

                mascot.punch(3, Math.pow(-1, i) * 1);
            }
        }

        private enterFrame = (): void => {
            let mascots = this.$scope.mascots;
            let coliders = this.$scope.coliders;

            for (let i = 0; i < mascots.length; i++) {
                var mascot = mascots[i];

                for (let j = i; j < mascots.length; j++) {
                    var otherMascot = mascots[j];
                    if (otherMascot === mascot)
                        continue;
                    //interact!
                    var interactionFinded = mascot.interact(otherMascot);

                }

                //проверим пересечения
                for (let i = 0; i < coliders.length; i++) {
                    var colider = coliders[i];
                    mascot.interact(colider);
                }
                //
                // for (let j = i; j < mascots.length; j++) {
                //     var otherMascot = mascots[j];
                //     if (otherMascot === mascot)
                //         continue;
                //     //interact!
                //     var interactionFinded = mascot.interact(otherMascot);
                //     if (interactionFinded) {
                //         // debugger;
                //         return;
                //     }
                // }
            }

            // сделаем шаги
            for (let i = 0; i < mascots.length; i++) {
                var mascot = mascots[i];
                mascot.enterFrame();
            }

            for (let i = 0; i < coliders.length; i++) {
                var colider = coliders[i];
                colider.enterFrame();
            }


            console.log("enterFrame");
        }

        private startAnimation = (): void => {
            this.$interval(this.enterFrame, 30, 300);
        }

    }
}
