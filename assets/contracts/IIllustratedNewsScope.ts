module Snowstorm {
    "use strict";

    export interface IIllustratedNewsScope extends ng.IScope {
        pageIsLoading: boolean;
        posts: INewsPost[];
        mainPost: INewsPost;
        converter: (post: INewsPost) => IImage;
        currentPostIndex: number;
        selectPost: (index: number) => void;
    }
}
