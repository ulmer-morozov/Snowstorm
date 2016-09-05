module Snowstorm {
    "use strict";

    export interface IAuthor {
        id: number;
        name: IName;
        about: string;
        mascotUrl: string;
        promoImages: string[];
    }
}
