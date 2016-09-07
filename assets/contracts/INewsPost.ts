module Snowstorm {
    "use strict";

    export interface INewsPost {
        id: number;
        title: string;
        releaseDate: Date;
        author: string;
        cover: string;
    }
}
