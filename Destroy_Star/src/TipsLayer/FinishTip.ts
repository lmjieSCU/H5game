/**游戏结束时提示页面 */
class FinishTip extends egret.DisplayObjectContainer {
    public static instance: FinishTip;
    private LastTip: egret.TextField;
    private renderFrame: number;
    private renderFun: Function;
    private speedX: number;
    private reward: number;
    private last: number;
    private index: number;


    public constructor(reward: number = 0, last: number) {
        super();
        this.reward = reward;
        this.last = last;
        this.speedX = UI.WINSIZE_W / 20;
        this.renderFrame = 0;
        this.index = 0;
        this.GameTip();
    }

    /**提示动画 */
    private render(): void {
        this.renderFrame++;
        if (this.renderFrame > 160) {
            this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
            this.renderFun = null;
            this.renderFrame = 0;
            this.index = 0;
            MainMoive.instance.OutFromFinishTip();
            return;
        }
        if (this.renderFrame > 60) { this.DestoryTip(); };
        if (this.renderFrame < 12 || this.renderFrame > 50) {
            this.LastTip.x = this.LastTip.x - this.speedX;
        }
    }


    /**进入提示 */
    private GameTip(): void {
        this.LastTip = UI.addText(this, "奖励：" + this.reward + "\n剩余：" + this.last, UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
        // UI.setscalXandY(this.LastTip, 1.5, 1.5);
        this.renderFun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
    }

    /**退出提示 */
    private DestoryTip(): void {
        if (this.index < MainMoive.instance.my_diamond.length) {
            if (MainMoive.instance.my_diamond[this.index].died == false) {
                MainMoive.instance.my_diamond[this.index].died = true;
                MainMoive.instance.my_diamond[this.index].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(MainMoive.instance.my_diamond[this.index].color + 10);
                MainMoive.instance.FivepointStar(MainMoive.instance.my_diamond[this.index].x, MainMoive.instance.my_diamond[this.index].y, MainMoive.instance.my_diamond[this.index].color);
                MainMoive.instance.my_diamond[this.index].color = 1;
                MainMoive.instance.my_diamond[this.index].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(1);
            }
            this.index++;
        }
    }

}


