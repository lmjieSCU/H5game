/**帧同步游戏以帧事件驱动整个游戏进行,为游戏动力源
 * initlize函数：增加帧事件驱动
 * add函数：增加其它类的render函数至renderMc数组
 * remove函数：移除其它类的render函数
 * render函数：对renderMc数组中的各个render依次执行
*/

/**单例模式
 * 整个项目只有一个实例，使用instance调用
 */


class renderFrameScript {
    public mc: any;
    public fun: Function;
    public args: Array<any>;

    constructor(_fun: Function, _mc: egret.DisplayObject, args: Array<any> = null) {
        this.fun = _fun;
        this.mc = _mc;
        this.args = args;
    }
}

class GameRender {
    private static instance: GameRender = null;
    public renderMc: Array<renderFrameScript> = [];
    public isrender: boolean = false;
    private render_Stage: egret.Stage;


    //私有构造函数,以防止被外部调用实例化
    private constructor() {
    }

    //静态工程方法创建实例
    public static get I() {
        if (this.instance == null) {
            this.instance = new GameRender();
        }
        return this.instance;
    }

    public initlize(param1: egret.Stage): void {
        this.render_Stage = param1;
        this.render_Stage.addEventListener(egret.Event.ENTER_FRAME, this.render, this);
    }



    public Add(mc: any, _fun: Function, params: Array<any> = null): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == mc && this.renderMc[i].fun == _fun) {
                return;
            }
        }
        let param1 = new renderFrameScript(_fun, mc, params);
        this.renderMc.push(param1);
    }

    public Remove(mc: any, _fun: Function): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == mc && this.renderMc[i].fun == _fun) {
                this.renderMc.splice(Number(i), 1);
                return;
            }
        }
    }

    public render(): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == "static") {
                this.renderMc[i].fun();
            } else {
                this.renderMc[i].fun.call(this.renderMc[i].mc, ...this.renderMc[i].args);
            }
        }
    }

    public destroy(): void {
        this.renderMc = null;
        this.isrender = null;
        this.render_Stage.removeEventListener(egret.Event.ENTER_FRAME, this.render, this);
        this.render_Stage = null;
        GameRender.instance = null;
    }

}






