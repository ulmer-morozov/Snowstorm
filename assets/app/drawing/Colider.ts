module Snowstorm {

    export class Colider {

        cx: number;
        cy: number;
        r: number;
        weight: number;
        color: string;
        isEnabled: boolean;

        constructor(r: number, cx: number, cy: number, weight: number, isEnabled: boolean = true) {
            this.r = r;
            this.cx = cx;
            this.cy = cy;
            this.weight = weight;
            this.isEnabled = isEnabled;
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
        dx = (that: Colider): number => {
            return this.cx - that.cx;
        }

        /* Returns the distance between the two y-coordinates of the ball centers. */
        dy = (that: Colider): number => {
            return this.cy - that.cy;
        }

        /* Returns the distance between (the centers) of the two balls. */
        d = (that: Colider): number => {
            return Math.sqrt(this.dx(that) * this.dx(that) + this.dy(that) * this.dy(that)); // The distance between the center points of both balls, using the classic distance-between-two-points formula (for 2D points).
        }

        /* Returns true if this ball is touching or overlapping "that" ball. */
        isOverlapping = (that: Colider): boolean => {
            var d = this.d(that); // The distance between the center points of both balls.

            if (this === that) // True if both balls are the same ball - just a safety measure here.
                return (false);

            return d <= (this.r + that.r); // Draw this out on paper and it'll make sense.
        }

        /*
        Processes the collision of both balls based on the mathematics presented presented in the
        "Have Collision, Will Travel" section of http://www.essentialmath.com/CollisionResponse.pps
        */

        /* Returns a unit vector that is normal to the point of contact between ball A and ball B. */
        collisionN = (ballA: Colider, ballB: Colider): Vector => {
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
