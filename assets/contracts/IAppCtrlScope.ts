module Snowstorm {
    "use strict";

    export interface IAppCtrlScope extends ng.IScope {
        coliders: Colider[];
        mascots: Colider[];
    }
}
