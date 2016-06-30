module Snowstorm {

    export class Ball {

        cx: number;
        cy: number;
        r: number;
        v: Vector;
        weight: number;
        color: string;
        isEnabled: boolean;
        isDragged: boolean

        constructor(r: number, cx: number, cy: number, weight: number, isEnabled: boolean = true) {
            this.r = r;
            this.cx = cx;
            this.cy = cy;
            this.v = new Vector(0, 0);
            this.weight = weight;
            this.isEnabled = isEnabled;
            this.isDragged = false;
        }

        /*
        The function name "s2d" means "speed to displacement". This function returns the required
        displacement value for an object traveling at "s" pixels per second. This function assumes the following:

           * The parameter s is in pixels per second.
           * "constants.delay" is a valid global constant.
           * The SVG viewport is set up such that 1 user unit equals 1 pixel.
        */
        s2d(s) {
            return (s / 1000) * 10; // Given "constants.delay", return the object's displacement such that it will travel at s pixels per second across the screen.
        }

        /* Returns the distance between the two x-coordinates of the ball centers. */
        dx = (that: Ball): number => {
            return this.cx - that.cx;
        }

        /* Returns the distance between the two y-coordinates of the ball centers. */
        dy = (that: Ball): number => {
            return this.cy - that.cy;
        }

        /* Returns the distance between (the centers) of the two balls. */
        d = (that: Ball): number => {
            return Math.sqrt(this.dx(that) * this.dx(that) + this.dy(that) * this.dy(that)); // The distance between the center points of both balls, using the classic distance-between-two-points formula (for 2D points).
        }

        /* Moves this ball across the screen based on the ball's velocity. */
        move = (): void => {
            if (!this.isEnabled)
                return;

            this.cx += this.s2d(this.v.xc); // Given the x-component of the ball's velocity vector, make the ball move in the x-direction.
            this.cy += this.s2d(this.v.yc); // Given the y-component of the ball's velocity vector, make the ball move in the y-direction.
        }

        /* Returns true if this ball is touching or overlapping "that" ball. */
        isOverlapping = (that: Ball): boolean => {
            var d = this.d(that); // The distance between the center points of both balls.

            if (this === that) // True if both balls are the same ball - just a safety measure here.
                return (false);

            return d <= (this.r + that.r); // Draw this out on paper and it'll make sense.
        }

        /*
        Processes the collision of both balls based on the mathematics presented presented in the
        "Have Collision, Will Travel" section of http://www.essentialmath.com/CollisionResponse.pps
        */

        processCollision = (that: Ball) => {
            var Vab = this.v.diff(that.v);         // The difference of vector ballA.v and ballB.v (i.e., ballA.v - ballB.v).
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
            that.v = that.v.diff(n.multi(f / Mb)); // Per the collision, change the direction of ball B appropriately.

            /* If the two balls should overlap, do not proceed until they've been moved apart in the correct direction
               such that they do not overlap (this is essentially a hack for sub-optimal collision detection and can
               result in balls appearing to lunge ahead unexpectedly): */
            while (this.isOverlapping(that)) {
                this.move();
                that.move();
            }
        }

        /* Returns a unit vector that is normal to the point of contact between ball A and ball B. */
        collisionN = (ballA: Ball, ballB: Ball): Vector => {
            var gv = new Vector(0, 0); // Create a generic vector object.
            var delta_y = ballB.dy(ballA);
            var delta_x = ballB.dx(ballA);
            var theta = Math.atan2(delta_y, delta_x); // The angle, in radians, that the line connecting the centers of ball A and B makes relative to the positive x-axis.

            gv.xc = Math.cos(theta); // The x-component of the unit normal vector.
            gv.yc = Math.sin(theta); // The y-component of the unit normal vector.

            return gv;
        }

    }


}
