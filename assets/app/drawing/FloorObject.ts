module Snowstorm {
    "use strict";
    export class FloorObject extends BallObject {

        constructor(radius: number = 10000000, x: number = 0, y: number = 0) {
            super(0, 0);

            // this.v = new Vector(0, 0);
            this.m = 5.9722 * Math.pow(10, 24);
            this.r = radius;//;

            this.p = new Vector(x, y);
            this.update = function() {
                // this.v.x = 0;
                // this.v.y = 0;
                // this.p.x = 0;
                // this.p.y = py;
            };
        }

        // custom to minimize unnecessary filling:
        // draw = function(ctx: CanvasRenderingContext2D) {
        //     var c = ctx.canvas, s = ctx.scale;
        //     let height = 123;
        // ctx.fillRect(c.width / -2 / s, this.floor, ctx.canvas.width / s, (ctx.canvas.height / s) - this.floor);
        // };

    }
}
