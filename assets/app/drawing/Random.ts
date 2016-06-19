module Snowstorm {
    export class Random {

        static getRandomInteger(min, max): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static getRandomReal(min, max): number {
            return Math.random() * (max - min) + min;
        }

        static getRandomColor(): string {
            const randomColor1 = Random.getRandomInteger(30, 230); // Generates a random integer between 30 and 230.
            const randomColor2 = Random.getRandomInteger(30, 230);
            const randomColor3 = Random.getRandomInteger(30, 230);

            const color = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
            return color;
        }
    }

}
