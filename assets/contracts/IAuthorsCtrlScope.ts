module Snowstorm {
    "use strict";

    export interface IAuthorsCtrlScope extends ng.IScope {
        authors: IAuthor[];
        gotoAuthor: (author: IAuthor) => void;
    }
}
