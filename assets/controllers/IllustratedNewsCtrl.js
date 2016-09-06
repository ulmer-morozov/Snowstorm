var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var IllustratedNewsCtrl = (function () {
        function IllustratedNewsCtrl($scope, $interval, $timeout, $routeParams) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.setDefaultNews = function () {
                _this.$scope.posts = [
                    { id: 1, releaseDate: new Date(2016, 12, 1), author: "Berezina Lyuba", title: "Emperor With Honor", cover: "assets/images/illustratedNews/cover1.png" },
                    { id: 2, releaseDate: new Date(2016, 11, 2), author: "Nikola Dubaku", title: "Snake Of Stone", cover: "assets/images/illustratedNews/cover2.png" },
                    { id: 3, releaseDate: new Date(2016, 10, 3), author: "Albert Ǫrvar", title: "Dogs Of Fortune", cover: "assets/images/illustratedNews/cover3.png" },
                    { id: 4, releaseDate: new Date(2016, 9, 4), author: "Orbán Basit", title: "Blacksmiths Of Destruction", cover: "assets/images/illustratedNews/cover1.png" },
                    { id: 5, releaseDate: new Date(2016, 8, 5), author: "Ben Quintillus", title: "Guardians And Fish", cover: "assets/images/illustratedNews/cover2.png" },
                    { id: 6, releaseDate: new Date(2016, 7, 6), author: "Tayler Audovacar", title: "Vultures And Slaves", cover: "assets/images/illustratedNews/cover3.png" },
                    { id: 7, releaseDate: new Date(2016, 6, 7), author: "Eric Firdaus", title: "Moon Of The Plague", cover: "assets/images/illustratedNews/cover1.png" },
                    { id: 8, releaseDate: new Date(2016, 5, 8), author: "Ali Hariwini", title: "Influence Without Faith", cover: "assets/images/illustratedNews/cover2.png" },
                    { id: 9, releaseDate: new Date(2016, 4, 9), author: "Pastor Agim", title: "Bathing In My School", cover: "assets/images/illustratedNews/cover3.png" },
                    { id: 10, releaseDate: new Date(2016, 3, 10), author: "Aulis Valérian", title: "Travel To Nature", cover: "assets/images/illustratedNews/cover1.png" },
                    { id: 11, releaseDate: new Date(2016, 2, 11), author: "Hubert Jafar", title: "Tortoise Of The Mountain", cover: "assets/images/illustratedNews/cover2.png" },
                    { id: 12, releaseDate: new Date(2016, 1, 12), author: "Carlito Mìcheal", title: "Creator Of Eternity", cover: "assets/images/illustratedNews/cover3.png" },
                ];
            };
            this.setDefaultNews();
        }
        IllustratedNewsCtrl.$inject = [
            "$scope", "$interval", "$timeout", "$routeParams"
        ];
        return IllustratedNewsCtrl;
    }());
    Snowstorm.IllustratedNewsCtrl = IllustratedNewsCtrl;
})(Snowstorm || (Snowstorm = {}));
