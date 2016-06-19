module Snowstorm {
    "use strict";

    export interface IAppCtrlScope extends ng.IScope {
        balls: Ball[];
        obstacles: Ball[];
        requestAnimationFrameID: number;
    }
}
