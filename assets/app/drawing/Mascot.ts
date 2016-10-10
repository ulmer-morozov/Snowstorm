module Snowstorm {

    export class Mascot extends Ball {
        constructor(public artist: Artist, r: number, cx: number, cy: number, weight: number, isEnabled: boolean = true, movingEnabled: boolean = true) {
            super(r, cx, cy, weight, isEnabled, movingEnabled);
        }

        public activated: boolean;
    }
}
