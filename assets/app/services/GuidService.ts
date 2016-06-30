module Snowstorm {
    "use strict";

    export class GuidService {

        empty = '00000000-0000-0000-0000-000000000000';

        new = (): string => {
            var result = GuidService.s8() + '-' + GuidService.s4() + '-' + GuidService.s4() + '-' +
                GuidService.s4() + '-' + GuidService.s12();
            return result;
        }

        private static s4 = (): string => {
            let randNumber = Math.floor((1 + Math.random()) * 0x10000);
            let result = randNumber.toString(16).substring(1);
            return result;
        }

        private static s8 = (): string => {
            let result = GuidService.s4() + GuidService.s4();
            return result;
        }

        private static s12 = (): string => {
            let result = GuidService.s8() + GuidService.s4();
            return result;
        }

    }
}
