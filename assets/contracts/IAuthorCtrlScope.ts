module Snowstorm {
    "use strict";

    export interface IAuthorCtrlScope extends ng.IScope {
        author: IAuthor;
        converter: (sourceObject: any) => IImage;
        selectedWorkIndex: number;
        selectWork: (index: number) => void;
    }
}
