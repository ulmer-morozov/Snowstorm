module Snowstorm {
    "use strict";

    export class Collision {
        direction: Vector;

        isEmpty = (): boolean => {
            if (!this.direction.isEmpty)
                return false;

            return true;
        }

        public static CreateEpmty() {
            return new Collision();
        }
    }
}
