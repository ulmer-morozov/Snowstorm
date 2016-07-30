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

        mathRound = (): Vector => {
            let result = new Vector(Math.round(this.xc), Math.round(this.yc));
            return result;
        }

        getLength = (): number => {
            const length = Math.sqrt(Math.pow(this.xc, 2) + Math.pow(this.yc, 2));
            return length;
        }

        normalize = (): Vector => {
            const length = this.getLength();
            if (length == 0)
                return new Vector(0, 0);

            const result = this.multi(1 / length);
            return result;
        }

        isEmpty = (): boolean => {
            const length = this.getLength();
            return length == 0;
        }

    }
}
