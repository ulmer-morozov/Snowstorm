module Snowstorm {
    "use strict";

    export class AuthorsCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout",
        ];

        constructor(
            private $scope: IAuthorsCtrlScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService
        ) {
            this.setDefaultAuthors();
        }

        private getDefaultImages = (): string[] => {
            return [
                "http://lorempixel.com/314/430/abstract?v=" + Math.random().toString(),
                "http://lorempixel.com/314/430/city?v=" + Math.random().toString(),
                "http://lorempixel.com/314/430/people?v=" + Math.random().toString(),
                // "http://lorempixel.com/314/430/transport?" + Date.now().toString(),
                // "http://lorempixel.com/314/430/animals?" + Date.now().toString(),
                // "http://lorempixel.com/314/430/food?" + Date.now().toString(),
                // "http://lorempixel.com/314/430/nature?" + Date.now().toString(),
            ];
        }

        private setDefaultAuthors = (): void => {
            this.$scope.authors = [
                { name: { first: "Lyuba", last: "Berezina" }, about: "This character is a man in his early thirties, who can be quite mysterious. He comes from a comfortable background, lives in a fantasy world and tends to always say the wrong thing.", promoImages: this.getDefaultImages() },
                { name: { first: "Hariwini", last: "Ali" }, about: "This character is a man in his early thirties, who is very daring. He comes from a comfortable background, lives in a converted barn and tends to be a little paranoid.", promoImages: this.getDefaultImages() },
                { name: { first: "Carmelo", last: "Cândido" }, about: "This character is a man in his early twenties, who can be quite dishonest. He comes from a wealthy background, lives in a caravan and tends to a huge collection of pot plants.", promoImages: this.getDefaultImages() },
                //
                { name: { first: "Dubaku", last: "Nikola" }, about: "This character is a man in his late forties, who can be quite restless. He comes from a comfortable background, lives in a mansion and tends to cry a lot.", promoImages: this.getDefaultImages() },
                { name: { first: "Agim", last: "Pastor" }, about: "This character is a man in his late forties, who is very imaginative. He comes from a comfortable background, lives in a terraced house and tends to eat too much.", promoImages: this.getDefaultImages() },
                { name: { first: "Bacchus", last: "Janko" }, about: "This character is a man in his late twenties, who is very timid. He comes from a wealthy background, lives in the suburbs and tends to be a bit forgetful.", promoImages: this.getDefaultImages() },
                //
                { name: { first: "Ǫrvar", last: "Albert" }, about: "This character is a woman in her sixties, who is very spontaneous. She comes from a comfortable background, lives in a mining town and tends to drink too much.", promoImages: this.getDefaultImages() },
                { name: { first: "Valérian", last: "Aulis" }, about: "This character is a woman in her early thirties, who is very rude. She comes from a wealthy background, lives in a remote farmhouse and tends to be rather lazy.", promoImages: this.getDefaultImages() },
                { name: { first: "Meinard", last: "Ferdinand" }, about: "This character is a young man in his late teens, who can be quite judgemental. He comes from a poor background, lives in a caravan and tends to spend too much money.", promoImages: this.getDefaultImages() },
                //
                { name: { first: "Basit", last: "Orbán" }, about: "This character is a woman in her early forties, who is very stubborn. She comes from a poor background, lives in a fantasy world and tends to complain a lot.", promoImages: this.getDefaultImages() },
                { name: { first: "Jafar", last: "Hubert" }, about: "This character is a woman in her late thirties, who is very considerate. She comes from a poor background, lives in a terraced house and tends to drink too much.", promoImages: this.getDefaultImages() },
                { name: { first: "Elisabeth", last: "Sunitha" }, about: "This character is a man in his late forties, who is very secretive. He comes from a poor background, lives in a caravan and tends to work too hard.", promoImages: this.getDefaultImages() },
                //
                { name: { first: "Quintillus", last: "Ben" }, about: "This character is a young woman in her late teens, who is very rude. She comes from a comfortable background, lives in a converted barn and tends to spend too much money.", promoImages: this.getDefaultImages() },
                { name: { first: "Mìcheal", last: "Carlito" }, about: "This character is a woman in her late twenties, who can be quite cruel. She comes from a comfortable background, lives in a rough neighbourhood and tends to have difficulty saying No.", promoImages: this.getDefaultImages() },
                { name: { first: "Tito", last: "Lavi" }, about: "This character is a woman in her late forties, who can be quite naive. She comes from a wealthy background, lives in a fisherman's cottage and tends to spend too much money.", promoImages: this.getDefaultImages() },
                //
                { name: { first: "Audovacar", last: "Tayler" }, about: "This character is a woman in her early thirties, who can be quite compassionate. She comes from a comfortable background, lives in the suburbs and tends to spend too much money.", promoImages: this.getDefaultImages() },
                { name: { first: "Rowan", last: "Aleksej" }, about: "This character is a man in his late twenties, who is very considerate. He comes from a comfortable background, lives in an eco-friendly home and tends to spend too much money.", promoImages: this.getDefaultImages() },
                { name: { first: "Jamsheed", last: "Giosuè" }, about: "This character is a woman in her late forties, who is very sensitive. She comes from a wealthy background, lives in a mansion and tends to be a little clumsy.", promoImages: this.getDefaultImages() },
                //
                { name: { first: "Firdaus", last: "Eric" }, about: "This character is a woman in her late thirties, who can be quite stubborn. She comes from a wealthy background, lives in a mining town and tends to have difficulty saying No.", promoImages: this.getDefaultImages() },
                { name: { first: "Barış", last: "Kayden" }, about: "This character is a man in his early thirties, who can be quite judgemental. He comes from a wealthy background, lives in a converted barn and tends to be a little gullible.", promoImages: this.getDefaultImages() },
                { name: { first: "Phillip", last: "Ingólfr" }, about: "This character is a man in his early thirties, who is very mysterious. He comes from a poor background, lives in a mansion and tends to eat too much.", promoImages: this.getDefaultImages() }
            ];
        }

    }
}
