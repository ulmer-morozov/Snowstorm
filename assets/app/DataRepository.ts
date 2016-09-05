module Snowstorm {
    "use strict";

    export class DataRepository {

        private static getDefaultImages = (): string[] => {
            return [
                "assets/images/portfolio/test1.jpg",
                "assets/images/portfolio/test2.jpg",
                "assets/images/portfolio/test3.jpg",
                // "http://lorempixel.com/314/430/transport?" + Date.now().toString(),
                // "http://lorempixel.com/314/430/animals?" + Date.now().toString(),
                // "http://lorempixel.com/314/430/food?" + Date.now().toString(),
                // "http://lorempixel.com/314/430/nature?" + Date.now().toString(),
            ];
        }

        public static authors: IAuthor[] = [
            { id: 1, name: { first: "Lyuba", last: "Berezina" }, mascotUrl: "assets/images/portfolio/mascot1.png", about: "This character is a man in his early thirties, who can be quite mysterious. He comes from a comfortable background, lives in a fantasy world and tends to always say the wrong thing.", promoImages: DataRepository.getDefaultImages() },
            { id: 2, name: { first: "Hariwini", last: "Ali" }, mascotUrl: "assets/images/portfolio/mascot2.png", about: "This character is a man in his early thirties, who is very daring. He comes from a comfortable background, lives in a converted barn and tends to be a little paranoid.", promoImages: DataRepository.getDefaultImages() },
            { id: 3, name: { first: "Carmelo", last: "Cândido" }, mascotUrl: "assets/images/portfolio/mascot3.png", about: "This character is a man in his early twenties, who can be quite dishonest. He comes from a wealthy background, lives in a caravan and tends to a huge collection of pot plants.", promoImages: DataRepository.getDefaultImages() },
            //
            { id: 4, name: { first: "Dubaku", last: "Nikola" }, mascotUrl: "assets/images/portfolio/mascot4.png", about: "This character is a man in his late forties, who can be quite restless. He comes from a comfortable background, lives in a mansion and tends to cry a lot.", promoImages: DataRepository.getDefaultImages() },
            { id: 5, name: { first: "Agim", last: "Pastor" }, mascotUrl: "assets/images/portfolio/mascot5.png", about: "This character is a man in his late forties, who is very imaginative. He comes from a comfortable background, lives in a terraced house and tends to eat too much.", promoImages: DataRepository.getDefaultImages() },
            { id: 6, name: { first: "Bacchus", last: "Janko" }, mascotUrl: "assets/images/portfolio/mascot6.png", about: "This character is a man in his late twenties, who is very timid. He comes from a wealthy background, lives in the suburbs and tends to be a bit forgetful.", promoImages: DataRepository.getDefaultImages() },
            //
            { id: 7, name: { first: "Ǫrvar", last: "Albert" }, mascotUrl: "assets/images/portfolio/mascot7.png", about: "This character is a woman in her sixties, who is very spontaneous. She comes from a comfortable background, lives in a mining town and tends to drink too much.", promoImages: DataRepository.getDefaultImages() },
            { id: 8, name: { first: "Valérian", last: "Aulis" }, mascotUrl: "assets/images/portfolio/mascot8.png", about: "This character is a woman in her early thirties, who is very rude. She comes from a wealthy background, lives in a remote farmhouse and tends to be rather lazy.", promoImages: DataRepository.getDefaultImages() },
            { id: 9, name: { first: "Meinard", last: "Ferdinand" }, mascotUrl: "assets/images/portfolio/mascot9.png", about: "This character is a young man in his late teens, who can be quite judgemental. He comes from a poor background, lives in a caravan and tends to spend too much money.", promoImages: DataRepository.getDefaultImages() },
            //
            { id: 10, name: { first: "Basit", last: "Orbán" }, mascotUrl: "assets/images/portfolio/mascot1.png", about: "This character is a woman in her early forties, who is very stubborn. She comes from a poor background, lives in a fantasy world and tends to complain a lot.", promoImages: DataRepository.getDefaultImages() },
            { id: 11, name: { first: "Jafar", last: "Hubert" }, mascotUrl: "assets/images/portfolio/mascot2.png", about: "This character is a woman in her late thirties, who is very considerate. She comes from a poor background, lives in a terraced house and tends to drink too much.", promoImages: DataRepository.getDefaultImages() },
            { id: 12, name: { first: "Elisabeth", last: "Sunitha" }, mascotUrl: "assets/images/portfolio/mascot3.png", about: "This character is a man in his late forties, who is very secretive. He comes from a poor background, lives in a caravan and tends to work too hard.", promoImages: DataRepository.getDefaultImages() },
            //
            { id: 13, name: { first: "Quintillus", last: "Ben" }, mascotUrl: "assets/images/portfolio/mascot4.png", about: "This character is a young woman in her late teens, who is very rude. She comes from a comfortable background, lives in a converted barn and tends to spend too much money.", promoImages: DataRepository.getDefaultImages() },
            { id: 14, name: { first: "Mìcheal", last: "Carlito" }, mascotUrl: "assets/images/portfolio/mascot5.png", about: "This character is a woman in her late twenties, who can be quite cruel. She comes from a comfortable background, lives in a rough neighbourhood and tends to have difficulty saying No.", promoImages: DataRepository.getDefaultImages() },
            { id: 15, name: { first: "Tito", last: "Lavi" }, mascotUrl: "assets/images/portfolio/mascot6.png", about: "This character is a woman in her late forties, who can be quite naive. She comes from a wealthy background, lives in a fisherman's cottage and tends to spend too much money.", promoImages: DataRepository.getDefaultImages() },
            //
            { id: 16, name: { first: "Audovacar", last: "Tayler" }, mascotUrl: "assets/images/portfolio/mascot7.png", about: "This character is a woman in her early thirties, who can be quite compassionate. She comes from a comfortable background, lives in the suburbs and tends to spend too much money.", promoImages: DataRepository.getDefaultImages() },
            { id: 17, name: { first: "Rowan", last: "Aleksej" }, mascotUrl: "assets/images/portfolio/mascot8.png", about: "This character is a man in his late twenties, who is very considerate. He comes from a comfortable background, lives in an eco-friendly home and tends to spend too much money.", promoImages: DataRepository.getDefaultImages() },
            { id: 18, name: { first: "Jamsheed", last: "Giosuè" }, mascotUrl: "assets/images/portfolio/mascot9.png", about: "This character is a woman in her late forties, who is very sensitive. She comes from a wealthy background, lives in a mansion and tends to be a little clumsy.", promoImages: DataRepository.getDefaultImages() },
            //
            { id: 19, name: { first: "Firdaus", last: "Eric" }, mascotUrl: "assets/images/portfolio/mascot1.png", about: "This character is a woman in her late thirties, who can be quite stubborn. She comes from a wealthy background, lives in a mining town and tends to have difficulty saying No.", promoImages: DataRepository.getDefaultImages() },
            { id: 20, name: { first: "Barış", last: "Kayden" }, mascotUrl: "assets/images/portfolio/mascot2.png", about: "This character is a man in his early thirties, who can be quite judgemental. He comes from a wealthy background, lives in a converted barn and tends to be a little gullible.", promoImages: DataRepository.getDefaultImages() },
            { id: 21, name: { first: "Phillip", last: "Ingólfr" }, mascotUrl: "assets/images/portfolio/mascot23.png", about: "This character is a man in his early thirties, who is very mysterious. He comes from a poor background, lives in a mansion and tends to eat too much.", promoImages: DataRepository.getDefaultImages() }
        ];

    }
}
