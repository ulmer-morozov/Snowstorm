module Snowstorm {
    "use strict";

    export class Rectangle {

        constructor(public size: Size, public position: Point) {

        }

        public get top(): number {
            let value = this.position.y + this.size.height / 2;
            return value;
        }

        public get bottom(): number {
            let value = this.position.y - this.size.height / 2;
            return value;
        }

        public get left(): number {
            let value = this.position.x - this.size.width / 2;
            return value;
        }

        public get right(): number {
            let value = this.position.x + this.size.width / 2;
            return value;
        }

        findCollision = (other: Rectangle): boolean => {

            let minX = this.size.width / 2 + other.size.width / 2;
            let minY = this.size.height / 2 + other.size.height / 2;

            let deltaX = Math.abs(this.position.x - other.position.x);
            let deltaY = Math.abs(this.position.y - other.position.y);

            let xGap = deltaX - minX;
            let yGap = deltaY - minY;

            let collisiionFinded = xGap < 0 && yGap < 0;

            return collisiionFinded;
        }
    }
}
