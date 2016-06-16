module Snowstorm {
    "use strict";

    export class Colider {

        private box: Rectangle;
        private speed: Vector;
        private weight: number;

        private currentCollisions: Colider[];

        constructor(width: number, height: number, x: number, y: number, weight: number = 1) {
            let size = new Size(width, height);
            let position = new Point(x, y);

            this.currentCollisions = [];
            this.weight = weight;
            this.box = new Rectangle(size, position);
            this.speed = new Vector();
        }

        punch(vx: number, vy: number): void {
            this.speed = new Vector(vx, vy);
        }

        enterFrame(): void {
            this.box.position.x += this.speed.x;
            this.box.position.y += this.speed.y;
        }

        private static calculateSpeed(speed: SpeedTuple, m1: number, m2: number): SpeedTuple {
            // if (m1 === 0) {
            //     return new SpeedTuple(speed.v1, -speed.v2);
            // }
            // if (m2 === 0) {
            //     return new SpeedTuple(-speed.v1, speed.v2);
            // }

            let v10 = speed.v1;
            let v20 = speed.v2;

            let sign = (-speed.v1 + speed.v2) / Math.abs(speed.v1 - speed.v2);

            let v1 = 2 * sign * m2 * v20 + (m1 - m2) * v10 / (m1 + m2);
            let v2 = 2 * m1 * v10 + sign * (m2 - m1) * v20 / (m1 + m2);

            // let v1Before_newOrigin = speed.v1 - speed.v2;
            //
            // let v1After_newOrigin = v1Before_newOrigin * (m1 - m2) / (m1 + m2);
            // let v2After_newOrigin = 2 * v1Before_newOrigin * m1 / (m1 + m2);
            //
            // let v1_initialOrigin = Math.round(v1After_newOrigin + speed.v2);
            // let v2_initialOrigin = Math.round(v2After_newOrigin + speed.v2);

            let resultSpeed = new SpeedTuple(v1, 0);
            return resultSpeed;
        }

        interact = (other: Colider): void => {
            let collisiionFinded = this.box.findCollision(other.box);
            let currentCollisionIndex = this.currentCollisions.indexOf(other);
            let isOldCollision = currentCollisionIndex != -1;

            if (!collisiionFinded) {
                if (isOldCollision) {
                    //удалим из списка коллизий
                    this.currentCollisions.splice(currentCollisionIndex, 1);
                    console.log("collision ended");
                }
                return;
            }

            if (isOldCollision)
                return;

            let thisP = this.box.position;
            let otherP = other.box.position;

            let dn = new Vector(thisP.x - otherP.x, thisP.y - otherP.y);

            // sum the masses, normalize the collision vector and get its tangential
            dn = dn.normalize();
            let sm = this.weight + other.weight;
            let dt = new Vector(dn.y, -dn.x);

            // avoid double collisions by "un-deforming" balls (larger mass == less tx)
            // this is susceptible to rounding errors, "jiggle" behavior and anti-gravity
            // suspension of the object get into a strange state
            //   mT = dn.multiply(this.r + obj.r - dx);
            //   this.p.tx(mT.multiply(obj.m / sm));
            //   obj.p.tx(mT.multiply(-this.m / sm));

            // this interaction is strange, as the CR describes more than just
            // the ball's bounce properties, it describes the level of conservation
            // observed in a collision and to be "true" needs to describe, rigidity,
            // elasticity, level of energy lost to deformation or adhesion, and crazy
            // values (such as cr > 1 or cr < 0) for stange edge cases obviously not
            // handled here (see: http://en.wikipedia.org/wiki/Coefficient_of_restitution)
            // for now assume the ball with the least amount of elasticity describes the
            // collision as a whole:
            let cr = 1;// Math.min(this.cr, obj.cr);

            // cache the magnitude of the applicable component of the relevant velocity

            let v1 = dn.multiply(this.speed.dot(dn)).length;
            let v2 = dn.multiply(other.speed.dot(dn)).length;

            // maintain the unapplicatble component of the relevant velocity
            // then apply the formula for inelastic collisions
            this.speed = dt.multiply(this.speed.dot(dt));
            this.speed = this.speed.add(dn.multiply((cr * other.weight * (v2 - v1) + this.weight * v1 + other.weight * v2) / sm));

            // this.speed.x *= -1;
            // this.speed.y *= -1;
            // do this once for each object, since we are assuming collide will be called
            // only once per "frame" and its also more effiecient for calculation cacheing
            // purposes
            other.speed = dt.multiply(other.speed.dot(dt));
            other.speed = other.speed.add(dn.multiply((cr * this.weight * (v1 - v2) + other.weight * v2 + this.weight * v1) / sm));

            this.currentCollisions.push(other);
            console.log("collisiion Finded");
        }

    }
}
