class renderFrameScript {
    public mc: Diamonds;
    public fun: Function;
    constructor(_fun: Function, _th: Diamonds) {
        this.fun = _fun;
        this.mc = _th;
    }
}
/*
*以帧事件驱动整个游戏进行,为游戏动力源
*initlize函数：增加帧事件驱动
*add函数：增加其它类的render函数至_fucs数组
*remove函数：移除其它类的render函数
*render函数：对_fucs数组中的各个render依次执行
*/
class DiamondRender {
    public static renderMc: Array<renderFrameScript> = [];
    public static isrender: boolean = false;
    private static render_Stage: egret.Stage;


    public static AddDiamond(mc: Diamonds, _fun: Function): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == mc) {
                return;
            }
        }
        let param1 = new renderFrameScript(_fun, mc);
        DiamondRender.renderMc.push(param1);
    }

    public static RemoveDiamond(mc: Diamonds): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == mc) {
                DiamondRender.renderMc.splice(Number(i), 1);
                return;
            }
        }
    }

    public static Animation(param1: egret.Stage): void {
        if (this.isrender == true) {
            return;
        }
        this.isrender = true;
        this.render_Stage = param1;
        this.render_Stage.addEventListener(egret.Event.ENTER_FRAME, this.render, this);
        this.render_Stage.frameRate = 60;
    }

    public static render(): void {
        if (DiamondRender.renderMc.length == 0) {
            DiamondRender.render_Stage.removeEventListener(egret.Event.ENTER_FRAME, this.render, this);
            DiamondRender.isrender = false;
             this.render_Stage.frameRate = 30;
            DiamondRender.render_Stage = null;
            this.renderMc = [];
            return;
        }
        for (let i in DiamondRender.renderMc) {
            DiamondRender.renderMc[i].fun.call(DiamondRender.renderMc[i].mc);
        }
    }

}






