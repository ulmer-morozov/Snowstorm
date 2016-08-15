module Snowstorm {
    "use strict";

    export interface IAppCtrlScope extends ng.IScope {
        currentBall: Ball;
        selectedBall: Ball;

        balls: Mascot[];
        obstacles: Wall[];
        lights: LightSpot[];

        requestAnimationFrameID: number;
        mouseSpeed: Vector;

        startInteraction(ball: Ball): void;
        stopInteraction(ball: Ball): void;

        startDrag(ball: Ball): void;
        stopDrag(ball: Ball): void;

        ballMouseUp(ball: Ball): void;

        ballMouseMove(event: MouseEvent);

        getMascotImg(mascot: Mascot);
    }
}
