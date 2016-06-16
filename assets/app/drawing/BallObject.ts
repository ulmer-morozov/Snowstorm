module Snowstorm {
    "use strict";
    export class BallObject {
        public v: Vector;
        public m: number;
        public r: number;
        public p: Vector;
        public cr: number;

        private currentCollisions: BallObject[];

        constructor(vx: number = 0, vy: number = 0) {
            this.v = new Vector(vx, vy); // velocity: m/s^2
            this.m = 10; // mass: kg
            this.r = 70; // radius of obj
            this.p = new Vector(0, 0); // position

            this.currentCollisions = [];
        }

        public update = (): void => {
            this.p.x += this.v.x;
            this.p.y += this.v.y;
        };

        public collide = (obj): boolean => {

            var dt, mT, v1, v2, sm,
                dn = new Vector(this.p.x - obj.p.x, this.p.y - obj.p.y),
                sr = this.r + obj.r, // sum of radii
                dx = dn.length; // pre-normalized magnitude

            let collisiionFinded = !(dx > sr);
            let currentCollisionIndex = this.currentCollisions.indexOf(obj);
            let isOldCollision = currentCollisionIndex != -1;

            if (!collisiionFinded) {
                if (isOldCollision) {
                    //удалим из списка коллизий
                    this.currentCollisions.splice(currentCollisionIndex, 1);
                    console.log("collision ended");
                }
                return false;
            }

            if (isOldCollision)
                return false;

            if (dx > sr) {
                return false; // no collision
            }

            // sum the masses, normalize the collision vector and get its tangential
            sm = this.m + obj.m;
            dn.normalize();
            dt = new Vector(dn.y, -dn.x);

            // avoid double collisions by "un-deforming" balls (larger mass == less tx)
            // this is susceptible to rounding errors, "jiggle" behavior and anti-gravity
            // suspension of the object get into a strange state
            // mT = dn.multiply(this.r + obj.r - dx);
            // this.p.tx(mT.multiply(obj.m / sm));
            // obj.p.tx(mT.multiply(-this.m / sm));

            // this interaction is strange, as the CR describes more than just
            // the ball's bounce properties, it describes the level of conservation
            // observed in a collision and to be "true" needs to describe, rigidity,
            // elasticity, level of energy lost to deformation or adhesion, and crazy
            // values (such as cr > 1 or cr < 0) for stange edge cases obviously not
            // handled here (see: http://en.wikipedia.org/wiki/Coefficient_of_restitution)
            // for now assume the ball with the least amount of elasticity describes the
            // collision as a whole:

            // cache the magnitude of the applicable component of the relevant velocity
            v1 = dn.multiply(this.v.dot(dn)).length;
            v2 = dn.multiply(obj.v.dot(dn)).length;

            // maintain the unapplicatble component of the relevant velocity
            // then apply the formula for inelastic collisions
            this.v = dt.multiply(this.v.dot(dt));
            this.v.tx(dn.multiply((obj.m * (v2 - v1) + this.m * v1 + obj.m * v2) / sm));


            // do this once for each object, since we are assuming collide will be called
            // only once per "frame" and its also more effiecient for calculation cacheing
            // purposes
            obj.v = dt.multiply(obj.v.dot(dt));
            obj.v.tx(dn.multiply((this.m * (v1 - v2) + obj.m * v2 + this.m * v1) / sm));

            // this.update();
            // obj.update();

            console.log("collision started");
            this.currentCollisions.push(obj);
            return true;
        };

    }
}
