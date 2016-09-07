module Snowstorm {
    "use strict";

    export interface IAuthorsCtrlScope extends ng.IScope {
        authors: IAuthor[];
        showPromo: (author: IAuthor, index: number) => void;
        authorWorks: IWork[];
        currentWorkIndex: number;
        converter: (sourceObject: any) => IImage;
    }
}
