var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var Draggable = (function () {
        function Draggable($rootScope, $guid) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$guid = $guid;
            this.restrict = "A";
            this.scope = {
                url: "=",
                onReady: "&",
                onFirstPlay: "&",
                onPlayProgress: "&",
                volume: "="
            };
            this.link = function (scope, el, attrs) {
                console.log("linking draggable element");
                angular.element(el).attr("draggable", "true");
                var id = attrs.id;
                if (!id) {
                    id = _this.$guid.new();
                    angular.element(el).attr("id", id);
                }
                el.bind("dragstart", function (e) {
                    var originalEvent = e.originalEvent;
                    debugger;
                    originalEvent.dataTransfer.setData('text', id);
                    _this.$rootScope.$emit("DRAG-START");
                });
                el.bind("dragend", function (e) {
                    _this.$rootScope.$emit("DRAG-END");
                });
            };
        }
        Draggable.factory = function () {
            var directive = function (rootScope, guid) { return new Draggable(rootScope, guid); };
            directive.$inject = ["$rootScope", "$guid"];
            return directive;
        };
        return Draggable;
    }());
    Snowstorm.Draggable = Draggable;
})(Snowstorm || (Snowstorm = {}));
