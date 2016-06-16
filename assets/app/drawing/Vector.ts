module Snowstorm {
    "use strict";
    export class Vector {

        constructor(public x: number = 0, public y: number = 0) {
        }

        public dot = (other: Vector): number => {
            let result = this.x * other.x + this.y * other.y;
            return result;
        };

        public get length(): number {
            let length = Math.sqrt(this.x * this.x + this.y * this.y);
            return length;
        };

        public normalize = (): Vector => {
            var s = 1 / this.length;
            this.x *= s;
            this.y *= s;
            return this;
        }

        public multiply = (value: number): Vector => {
            var result = new Vector(this.x * value, this.y * value);
            return result;
        };

        public tx = (other: Vector): Vector => {
            this.x += other.x;
            this.y += other.y;
            return this;
        }

        public substract = (other: Vector): Vector => {
            var result = new Vector(this.x - other.x, this.y - other.y);
            return result;
        }

        public get isEmpty(): boolean {
            let result = this.x == 0 && this.y == 0;
            return result;
        }
    }
}

// module Snowstorm {
//     "use strict";
//
//     export class Vector {
//
//         constructor(public x: number = 0, public y: number = 0) {
//         }
//
//         dot = (other: Vector): number => {
//             let result = this.x * other.x + this.y * other.y;
//             return result;
//         };
//
//         get length(): number {
//             let length = Math.sqrt(this.x * this.x + this.y * this.y);;
//             return length;
//         };
//
//         normalize = (): Vector => {
//             var s = 1 / this.length;
//             var result = new Vector(this.x * s, this.y * s)
//             return result;
//         }
//
//         multiply = (value: number): Vector => {
//             var result = new Vector(this.x * value, this.y * value);
//             return result;
//         };
//
//         add = (other: Vector): Vector => {
//             this.x += other.x;
//             this.y += other.y;
//             return this;
//         }
//
//         substract = (other: Vector): Vector => {
//             var result = new Vector(this.x - other.x, this.y - other.y);
//             return result;
//         }
//
//         get isEmpty(): boolean {
//             let result = this.x == 0 && this.y == 0;
//             return result;
//         }
//     }
// }
