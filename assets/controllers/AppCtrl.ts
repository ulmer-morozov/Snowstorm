module Snowstorm {
    "use strict";

    export class AppCtrl {

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

            let leftBorder = new Colider(borderThikness, screenHeight, 0, screenCenterY, borderWeght)
            let rightBorder = new Colider(borderThikness, screenHeight, screenWidth, screenCenterY, borderWeght)
            let topBorder = new Colider(screenWidth, borderThikness, screenCenterX, 0, borderWeght)
            let bottomBorder = new Colider(screenWidth, borderThikness, screenCenterX, screenHeight, borderWeght)

            coliders.push(leftBorder);
            coliders.push(rightBorder);
            coliders.push(topBorder);
            coliders.push(bottomBorder);
            // var colider = new Colider(100, 500, screenCenterX, 0);
            // this.$scope.coliders.push(colider);
        }

        private createMascots = (): void => {
            const bodyWidth = 50;
            const bodyHeight = 50;

            this.$scope.mascots = [];

            for (let i = 0; i < 1; i++) {
                var mascot = new Colider(bodyWidth, bodyHeight, 50, 2 * bodyHeight * i + 50);
                this.$scope.mascots.push(mascot);

                mascot.punch(2, 2);
            }
        }

        private enterFrame = (): void => {
            let mascots = this.$scope.mascots;
            let coliders = this.$scope.coliders;

            for (let i = 0; i < mascots.length; i++) {
                var mascot = mascots[i];
                mascot.enterFrame();

                //проверим пересечения
                for (let i = 0; i < coliders.length; i++) {
                    var colider = coliders[i];
                    mascot.interact(colider);
                    colider.enterFrame();
                }

                for (let j = 0; j < mascots.length; j++) {
                    var otherMascot = mascots[j];
                    if (otherMascot === mascot)
                        continue;
                    //interact!
                    mascot.interact(otherMascot);
                }
            }


            console.log("enterFrame");
        }

        private startAnimation = (): void => {
            this.$interval(this.enterFrame, 30, 300);
        }

    }
}
