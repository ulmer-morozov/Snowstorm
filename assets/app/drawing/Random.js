var Snowstorm;
(function (Snowstorm) {
    var Random = (function () {
        function Random() {
        }
        Random.getRandomInteger = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        Random.getRandomReal = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        Random.getRandomColor = function () {
            var randomColor1 = Random.getRandomInteger(30, 230);
            var randomColor2 = Random.getRandomInteger(30, 230);
            var randomColor3 = Random.getRandomInteger(30, 230);
            var color = "rgb(" + randomColor1 + ", " + randomColor2 + ", " + randomColor3 + ")";
            return color;
        };
        return Random;
    }());
    Snowstorm.Random = Random;
})(Snowstorm || (Snowstorm = {}));
