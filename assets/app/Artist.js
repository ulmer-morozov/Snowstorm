var Snowstorm;
(function (Snowstorm) {
    var Artist = (function () {
        function Artist(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
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
