module Snowstorm {
    "use strict";

    export interface INewsPost {
        id: number;
        releaseDate: Date;
        title: string;
        author: string;
        cover: string;
    }
}
