interface IGameUI {

    destory(): void;

    fadIn(param1: boolean): void;  //defalut = true

    fadOut(param1: boolean): void; //defalut = true

    getUI(): egret.DisplayObject;

    render(): void;

    renderAnimate(): void;

    showHits(param1: number, param2: number): void;

    hideHits(param1: number): void;
    
    showStart(param1: any, param2: Object): void;

    showEnd(param1: any, param2: Object): void;

    clearStartAndEnd(): void;

    pause(): void;

    resume(): void;

}

