var Snowstorm;
(function (Snowstorm) {
    var Artist = (function () {
        function Artist(id, firstname, lastname, mascotName) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.mascotName = mascotName;
        }
        Object.defineProperty(Artist.prototype, "fullname", {
            get: function () {
                return this.lastname + " " + this.firstname;
            },
            enumerable: true,
            configurable: true
        });
        return Artist;
    }());
    Snowstorm.Artist = Artist;
})(Snowstorm || (Snowstorm = {}));
