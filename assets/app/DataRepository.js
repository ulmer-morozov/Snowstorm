var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var DataRepository = (function () {
        function DataRepository() {
        }
        DataRepository.getDefaultImages = function () {
            return [
                "assets/images/portfolio/test1.jpg",
                "assets/images/portfolio/test2.jpg",
                "assets/images/portfolio/test3.jpg",
            ];
        };
        DataRepository.getDefaultWorks = function () {
            return [
                { id: 1, title: "Boy Of Hope", imageUrl: "assets/images/portfolio/test1.jpg", description: "From the outside this house looks luxurious, it has been built with walnut wood and has tan brick decorations. Tall, squared windows add to the overall style of the house and have been added to the house in a very asymmetric way." },
                { id: 2, title: "Horse With A Goal", imageUrl: "assets/images/portfolio/test2.jpg", description: "The house is equipped with an average kitchen and one modern bathroom, it also has a generous living room, four bedrooms, a small dining area and a spacious basement." },
                { id: 3, title: "Slaves Without Hate", imageUrl: "assets/images/portfolio/test3.jpg", description: "The building is square shaped. The house is half surrounded by a garden path. The second floor is bigger than the first, which creates several overhanging parts on one side of the house. This floor has roughly the same style as the floor below." },
                { id: 4, title: "Bandits Of The Great", imageUrl: "assets/images/portfolio/test4.jpg", description: "The roof is high and slanted to one side and is covered with grey roof tiles. There are no chimneys. Many smaller windows let in plenty of light to the rooms below the roof." },
                { id: 5, title: "Gods And Rebels", imageUrl: "assets/images/portfolio/test5.jpg", description: "From the outside this house looks grandiose, it has been built with red bricks and has brown brick decorations. Tall, wide windows let in plenty of light and have been added to the house in a fairly symmetrical pattern." },
                { id: 6, title: "Assassins And Doctors", imageUrl: "assets/images/portfolio/test6.jpg", description: "The house is equipped with an old-fashioned kitchen and one small bathroom, it also has a warm living room, two bedrooms, a large dining area and a roomy garage." },
                { id: 7, title: "Fruit Of My Imagination", imageUrl: "assets/images/portfolio/test7.jpg", description: "The building is fairly rounded in shape. The house is partially surrounded by glass overhanging panels on two sides." },
                { id: 8, title: "Intention Of Reality", imageUrl: "assets/images/portfolio/test8.jpg", description: "The second floor is smaller than the first, which allowed for a large balcony on one side of the house. This floor has roughly the same style as the floor below." },
                { id: 9, title: "Running In The River", imageUrl: "assets/images/portfolio/test9.jpg", description: "The roof is high, triangular and layered and is covered with red ceramic tiles. Two small chimneys sit at either side of the house. Several large windows let in plenty of light to the rooms below the roof." },
                { id: 10, title: "Learning From The Jungle", imageUrl: "assets/images/portfolio/test10.jpg", description: "The house itself is surrounded by a gorgeous garden with many hidden lights that make the garden come to life at night." },
                { id: 11, title: "King Of Dusk", imageUrl: "assets/images/portfolio/test11.jpg", description: "From the outside this house looks cozy, it has been built with brown bricks and has granite decorations. Small, squared windows allow enough light to enter the home and have been added to the house in a fairly symmetrical pattern." },
                { id: 12, title: "Goddess Of Yesterday", imageUrl: "assets/images/portfolio/test12.jpg", description: "The house is equipped with a modern kitchen and three bathrooms, it also has a generous living room, five bedrooms, a spacious dining room and a small storage room." },
                { id: 13, title: "Hunters Of The Land", imageUrl: "assets/images/portfolio/test13.jpg", description: "The building is shaped like a short U. The two extensions extend into stylish gardens to each side. The second floor is smaller than the first, which, in combination with its placement, creates an original look. This floor has a different style than the floor below." },
                { id: 14, title: "Slaves Of Fire", imageUrl: "assets/images/portfolio/test14.jpg", description: "The roof is high and square shaped and is covered with brown wood shingles. Two small chimneys sit at the side of the house. Rows of small windows let in plenty of light to the rooms below the roof." },
                { id: 15, title: "Kings And Snakes", imageUrl: "assets/images/portfolio/test15.jpg", description: "The house itself is surrounded by a modest, childsafe garden covered mostly in grass and with a children's playground in the center." },
                { id: 16, title: "Mice And Enemies", imageUrl: "assets/images/portfolio/test16.jpg", description: "From the outside this house looks grandiose, it has been built with grey bricks and has sandstone decorations. Short, wide windows add to the overall look of the house and have been added to the house in a fairly asymmetrical pattern." },
                { id: 17, title: "Inspiration Of Eternity", imageUrl: "assets/images/portfolio/test17.jpg", description: "The house is equipped with a large kitchen and two modern bathrooms, it also has a huge living room, four bedrooms, a snug dining room, a sun room and a roomy basement." },
                { id: 18, title: "History Of Water", imageUrl: "assets/images/portfolio/test18.jpg", description: "The building is shaped like a circle. The house is fully surrounded by a garden path. The second floor is bigger than the first, which creates several overhanging parts on several sides of the house. This floor has a very different style than the floor below." },
                { id: 19, title: "Listening To The City", imageUrl: "assets/images/portfolio/test19.jpg", description: "The roof is flat and is covered with flat roof tiles. One large chimney pokes out the center of the roof. A few round, small windows let in enough light to the rooms below the roof." },
                { id: 20, title: "Hurting The Depths", imageUrl: "assets/images/portfolio/test20.jpg", description: "The house itself is surrounded by a modest garden, with mostly grass and a few small trees." },
                { id: 21, title: "Shape Of My Head", imageUrl: "assets/images/portfolio/test21.jpg", description: "The roof is low and rounded and is covered with black ceramic tiles. Two large chimneys poke out the center of the roof. Many smaller windows let in plenty of light to the rooms below the roof." },
            ];
        };
        DataRepository.authors = [
            { id: 1, name: { first: "Евгения", last: "Баринова" }, mascotUrl: "assets/images/portfolio/balet.png", about: "This character is a man in his early thirties, who can be quite mysterious. He comes from a comfortable background, lives in a fantasy world and tends to always say the wrong thing.", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 2, name: { first: "Хадия", last: "Хадия" }, mascotUrl: "assets/images/portfolio/pigeon.png", about: "В этом мире возможно все! Больше интенции, меньше инерции)", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 3, name: { first: "Березина", last: "Березина" }, mascotUrl: "assets/images/portfolio/bird.png", about: "Элитный маляр", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 4, name: { first: "Арина", last: "Шабанова" }, mascotUrl: "assets/images/portfolio/heart.png", about: "Лучший парень в однокомнатной квартире", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 5, name: { first: "Тимур", last: "Зима" }, mascotUrl: "assets/images/portfolio/ball.png", about: "«Графический дизайнер, иллюстратор и большой любитель ретроконсолей. В иллюстрации я стремлюсь к лаконичности и не забываю про детали. Черпаю вдохновение из разных источников, люблю простоту форм не забывая про детали.", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 6, name: { first: "Алексей", last: "Сухов" }, mascotUrl: "assets/images/portfolio/rat.png", about: "This character is a man in his late twenties, who is very timid. He comes from a wealthy background, lives in the suburbs and tends to be a bit forgetful.", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 7, name: { first: "Саша", last: "Киселёва" }, mascotUrl: "assets/images/portfolio/house.png", about: "This character is a woman in her sixties, who is very spontaneous. She comes from a comfortable background, lives in a mining town and tends to drink too much.", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 8, name: { first: "Ольга", last: "Чикина" }, mascotUrl: "assets/images/portfolio/horse.png", about: "This character is a woman in her early thirties, who is very rude. She comes from a wealthy background, lives in a remote farmhouse and tends to be rather lazy.", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 9, name: { first: "Катя", last: "Дорохина" }, mascotUrl: "assets/images/portfolio/pizza.png", about: "This character is a young man in his late teens, who can be quite judgemental. He comes from a poor background, lives in a caravan and tends to spend too much money.", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
            { id: 10, name: { first: "Воронина", last: "Воронина" }, mascotUrl: "assets/images/portfolio/fox.png", about: "This character is a woman in her early forties, who is very stubborn. She comes from a poor background, lives in a fantasy world and tends to complain a lot.", promoImages: DataRepository.getDefaultImages(), works: DataRepository.getDefaultWorks() },
        ];
        return DataRepository;
    }());
    Snowstorm.DataRepository = DataRepository;
})(Snowstorm || (Snowstorm = {}));
