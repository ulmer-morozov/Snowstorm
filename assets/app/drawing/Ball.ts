module Snowstorm {

    export class Ball extends Colider {

        v: Vector;
        color: string;
        isDragged: boolean;
        movingEnabled: boolean;

        constructor(r: number, cx: number, cy: number, weight: number, isEnabled: boolean = true, movingEnabled: boolean = true) {
            super(r, cx, cy, weight, isEnabled);
            this.v = new Vector(0, 0);
            this.isEnabled = isEnabled;
            this.isDragged = false;
            this.movingEnabled = movingEnabled;
        }

        /* Moves this ball across the screen based on the ball's velocity. */
        move = (): void => {
            if (!this.movingEnabled)
                return;

            this.cx += this.s2d(this.v.xc); // Given the x-component of the ball's velocity vector, make the ball move in the x-direction.
            this.cy += this.s2d(this.v.yc); // Given the y-component of the ball's velocity vector, make the ball move in the y-direction.

            var speed = this.v.getLength();

            // каждый шаг будет уменьшать скорость
            // если она очень большая
            if (speed > 100) {
                this.v = this.v.multi(0.999);
            }
        }

        /*
        Processes the collision of both balls based on the mathematics presented presented in the
        "Have Collision, Will Travel" section of http://www.essentialmath.com/CollisionResponse.pps
        */

        processCollision = (that: Colider) => {
            if (!this.isEnabled || this.isDragged || !that.isEnabled)
                return;

            let otherObjectIsWall = that instanceof Wall;
            let otherObjectIsBall = that instanceof Ball;
            let otherBall = that as Ball;

            let isDragCollision = otherObjectIsBall && otherBall.isDragged;
            if (isDragCollision)
                return;

            let otherObjectSpeed = new Vector(0, 0);

            if (otherObjectIsBall)
                otherObjectSpeed = otherBall.v;

            var Vab = this.v.diff(otherObjectSpeed);         // The difference of vector ballA.v and ballB.v (i.e., ballA.v - ballB.v).
            var n = this.collisionN(this, that);        // Calculates a unit vector that is normal to the point of ball-to-ball contact.
            var Ma = this.weight; // Returns an appropriate value for the mass of ball A based on its radius.
            var Mb = that.weight; // Returns an appropriate value for the mass of ball B based on its radius.

            var f;           // The magnitude of the collision "impulse" between ball A and ball B such that momentum is conserved.
            var f_numerator; // Break the calculation for f into two parts, its numerator and denominator.
            var f_denominator;
            var epsilon = 1;

            f_numerator = -(1 + epsilon) * Vab.dot(n); // For this and the remaining lines, see http://www.essentialmath.com/CollisionResponse.pps for details.
            f_denominator = n.dot(n) * (1 / Ma + 1 / Mb);
            f = f_numerator / f_denominator;

            this.v = this.v.add(n.multi(f / Ma)); // Per the collision, change the direction of ball A appropriately.

            if (otherObjectIsBall)
                otherBall.v = otherObjectSpeed.diff(n.multi(f / Mb)); // Per the collision, change the direction of ball B appropriately.

            /* If the two balls should overlap, do not proceed until they've been moved apart in the correct direction
               such that they do not overlap (this is essentially a hack for sub-optimal collision detection and can
               result in balls appearing to lunge ahead unexpectedly): */

            let distanceBeforeOverlaping = this.d(that);
            let i = 1;
            let reverseActivated = false;

            while (this.isOverlapping(that)) {
                i++;
                if (i > 100) {
                    debugger;
                    break;
                }

                this.move();
                if (otherObjectIsBall)
                    otherBall.move();

                // если после движения расстояние между объектами только сокращается, начинаем двигаться в обрутную сторону
                // чтобы не было телепортаций через медленные объекты
                let distanceAfterSteps = this.d(that);
                if (distanceAfterSteps < distanceBeforeOverlaping && !reverseActivated) {
                    reverseActivated = true;
                    this.v = this.v.multi(-1 / 2);
                }
            }
        }
    }


}
