module Snowstorm {
    "use strict";

    export interface IGameCtrlScope extends ng.IScope {
        currentBall: Ball;
        selectedBall: Ball;

        balls: Mascot[];
        obstacles: Wall[];
        lights: LightSpot[];

        requestAnimationFrameID: number;
        mouseSpeed: Vector;

        pageIsLoading: boolean;

        startInteraction(mascot: Mascot): void;
        stopInteraction(mascot: Mascot): void;

        startDrag(mascot: Mascot): void;
        stopDrag(ball: Ball): void;

        ballMouseUp(ball: Ball): void;

        ballMouseMove(event: MouseEvent);

        getMascotImg(mascot: Mascot);

        goToAuthor(mascot: Mascot): void;
    }
}
