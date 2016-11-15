module Snowstorm {
    "use strict";

    export interface IImagePreviewScope extends ng.IScope {
        // передаваемые
        currentIndex: number;
        source: any[];
        converter: any;

        // рассчитываемые
        currentImage: IImage;
        imageIsLoading: boolean;

        // методы
        prev: () => void;
        next: () => void;
        close: () => void;
    }
}
