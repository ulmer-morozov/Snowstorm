module Snowstorm {

    export class Vector {

        constructor(public xc: number, public yc: number) {

        }

        add = (other: Vector): Vector => {
            var gv = new Vector(0, 0);

            gv.xc = this.xc + other.xc;
            gv.yc = this.yc + other.yc;

            return gv;
        }

        diff = (other: Vector): Vector => {
            var gv = new Vector(0, 0);

            gv.xc = this.xc - other.xc;
            gv.yc = this.yc - other.yc;

            return gv;
        }


        multi = (s: number): Vector => {
            // "gv" stands for "generic vector"
            var gv = new Vector(0, 0);

            gv.xc = s * this.xc;
            gv.yc = s * this.yc;

            return gv;
        }

        dot = (other: Vector): number => {
            return this.xc * other.xc + this.yc * other.yc;
        }

    }
}
