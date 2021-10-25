/**游戏开始时关卡提示页面 */
class BeginTip extends egret.DisplayObjectContainer {
    public static instance: BeginTip;
    private tip_in_normal: egret.Bitmap;
    private tip_in_time: egret.Bitmap;
    private tip_in_bu: egret.Bitmap;
    private level_tip: egret.TextField;
    private obscore_tip: egret.TextField;
    private level: number;
    private obScore: number;
    private renderFrame: number;
    private renderFun: Function;
    private speedX: number;

    public constructor(level: number = 1, obScore: number = 1000) {
        super();
        this.level = level;
        this.obScore = obScore;
        this.speedX = UI.WINSIZE_W / 20;
        this.renderFrame = 0;
        if (GameModel.currentMode != GameModel.NORMAL) {
            GameModel.jinbi = GameModel.jinbi - 5;
            MainMoive.instance.caidan.Jinbi = GameModel.jinbi;
        }
        this.GameTip();
    }

    /**提示动画 */
    private render(): void {
        this.renderFrame++;
        if (this.renderFrame > 70) {
            this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
            this.renderFun = null;
            this.renderFrame = 0;
            this.DestoryTip();
            return;
        }
        if (this.renderFrame < 10 || this.renderFrame > 50) {
            switch (GameModel.currentMode) {
                case GameModel.NORMAL:
                    this.tip_in_normal.x = this.tip_in_normal.x - this.speedX;
                    this.level_tip.x = this.level_tip.x - this.speedX;
                    this.obscore_tip.x = this.obscore_tip.x - this.speedX;
                    break;
                case GameModel.TIMELIMIT:
                    this.tip_in_time.x = this.tip_in_time.x - this.speedX;
                    break;
                case GameModel.BULIMIT:
                    this.tip_in_bu.x = this.tip_in_bu.x - this.speedX;
                    break;
            }
        }
    }


    /**提示 */
    private GameTip(): void {
        switch (GameModel.currentMode) {
            case GameModel.NORMAL:
                this.tip_in_normal = UI.addPic(this, "shuoming0001_png", UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
                this.level_tip = UI.addText(this, this.level, UI.WINSIZE_W - 30, UI.WINSIZE_H / 2 - 70);
                // UI.setscalXandY(this.level_tip, 1.5, 1.5);
                this.obscore_tip = UI.addText(this, this.obScore, UI.WINSIZE_W - 30, UI.WINSIZE_H / 2 + 20);
                // UI.setscalXandY(this.obscore_tip, 1.5, 1.5);
                break;
            case GameModel.TIMELIMIT:
                this.tip_in_time = UI.addPic(this, "shuoming0002_png", UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
                break;
            case GameModel.BULIMIT:
                this.tip_in_bu = UI.addPic(this, "shuoming0003_png", UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
                break;
        }
        this.renderFun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
    }

    /**移除提示 */
    private DestoryTip(): void {
        switch (GameModel.currentMode) {
            case GameModel.NORMAL:
                this.removeChild(this.tip_in_normal);
                this.removeChild(this.level_tip);
                this.removeChild(this.obscore_tip);
                break;
            case GameModel.TIMELIMIT:
                this.removeChild(this.tip_in_time);
                break;
            case GameModel.BULIMIT:
                this.removeChild(this.tip_in_bu);
                break;
        }
        MainMoive.instance.OutFromBeginTip();
    }

}


