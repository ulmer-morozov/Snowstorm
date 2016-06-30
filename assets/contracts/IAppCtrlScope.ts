module Snowstorm {
    "use strict";

    export interface IAppCtrlScope extends ng.IScope {
        balls: Ball[];
        obstacles: Ball[];
        requestAnimationFrameID: number;

        startInteraction(ball: Ball): void;
        stopInteraction(ball: Ball): void;

        ballMouseDown(ball: Ball): void;
        ballMouseUp(ball: Ball): void;
        ballMouseMove(ball: Ball, event: MouseEvent);
    }
}
