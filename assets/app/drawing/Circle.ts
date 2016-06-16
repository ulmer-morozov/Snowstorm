module Snowstorm {
    "use strict";

    export class Circle {

        constructor(public radius: number, public position: Point) {

        }

        findCollision = (other: Circle): boolean => {
            let dx = other.position.x - this.position.x;
            let dy = other.position.y - this.position.y;
            let centerVector = new Vector(dx, dy);

            let collisiionFinded = centerVector.length <= this.radius + other.radius;

            return collisiionFinded;
        }
    }
}
