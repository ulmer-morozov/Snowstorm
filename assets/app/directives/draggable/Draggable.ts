module Snowstorm {
    "use strict";

    export class Draggable implements ng.IDirective {
        restrict = "A";

        scope = {
            url: "=",
            onReady: "&",
            onFirstPlay: "&",
            onPlayProgress: "&",
            volume: "="
        }

        constructor(private $rootScope: ng.IScope, private $guid: GuidService) {
        }

        static factory(): ng.IDirectiveFactory {
            const directive = (rootScope: ng.IScope, guid: GuidService) => new Draggable(rootScope, guid);
            directive.$inject = ["$rootScope", "$guid"];
            return directive;
        }

        link = (scope: ng.IScope, el: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            console.log("linking draggable element");

            angular.element(el).attr("draggable", "true");

            let id: string = (attrs as any).id;
            if (!id) {
                id = this.$guid.new();
                angular.element(el).attr("id", id);
            }

            el.bind("dragstart", (e: JQueryEventObject): void => {
                let originalEvent: any = e.originalEvent;
                debugger;
                originalEvent.dataTransfer.setData('text', id);
                this.$rootScope.$emit("DRAG-START");
            });

            el.bind("dragend", (e: JQueryEventObject): void => {
                this.$rootScope.$emit("DRAG-END");
            });
        }
    }
}
