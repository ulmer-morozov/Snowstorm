module Snowstorm {
    "use strict";

    export interface ICircleIndicatorScope extends ng.IScope {
        title: string;
        activated: boolean;
        percentage: number;
        timerPromise: ng.IPromise<any>;

        getClipText(): string;
        getProgressWidth(): number;

        afterComplete(): any;
        data: any;
    }
}
