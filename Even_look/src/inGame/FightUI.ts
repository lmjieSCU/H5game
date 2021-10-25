/**战斗场景素材
 * 时间,关卡,金币,分数以及部分图片
 */
class FightUI extends egret.DisplayObjectContainer {
    private controlbar: egret.Bitmap;
    private coin: egret.Bitmap;
    public boom: egret.Bitmap;
    public refresh: egret.Bitmap;
    public hint: egret.Bitmap;
    private fightctrl: FightCtrl;
    public helpBtn: egret.Bitmap;


    constructor(ctrl: FightCtrl) {
        super();
        this.fightctrl = ctrl;
        this.initUI();
    }

    /**添加游戏素材 */
    public initUI(): void {
        //================================================================================
        //***************************************显示图像**********************************
        //================================================================================
        this.controlbar = new egret.Bitmap;
        this.controlbar.texture = RES.getRes("controlbar_png");
        this.controlbar.anchorOffsetX = this.controlbar.width / 2;
        this.controlbar.anchorOffsetY = this.controlbar.height / 2;
        UI.setXandY(this.controlbar, UI.WINSIZE_W / 2, UI.WINSIZE_H / 20);
        this.addChild(this.controlbar);
        //
        this.coin = new egret.Bitmap;
        this.coin.texture = RES.getRes("coin_png");
        UI.setXandY(this.coin, UI.WINSIZE_W * 0.5 / 4, UI.WINSIZE_H * 6.5 / 8);
        this.addChild(this.coin);
        //
        this.boom = new egret.Bitmap;
        this.boom.texture = RES.getRes("boom_png");
        UI.setXandY(this.boom, UI.WINSIZE_W * 1.4 / 4, UI.WINSIZE_H * 6.5 / 8);
        this.addChild(this.boom);
        //
        this.refresh = new egret.Bitmap;
        this.refresh.texture = RES.getRes("refresh_png");
        UI.setXandY(this.refresh, UI.WINSIZE_W * 2.2 / 4, UI.WINSIZE_H * 6.5 / 8);
        this.addChild(this.refresh);
        //
        this.hint = new egret.Bitmap;
        this.hint.texture = RES.getRes("find_png");
        UI.setXandY(this.hint, UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H * 6.5 / 8);
        this.addChild(this.hint);
        //
        this.helpBtn = UI.addPic(this, "help_png", true);
        UI.setXandY(this.helpBtn, UI.WINSIZE_W / 7, UI.WINSIZE_H / 7);
        UI.addClickAction(this, this.helpBtn, this.ToHelpLayer);
        //================================================================================
        //***************************************显示文本**********************************
        //================================================================================
        this.fightctrl.coinNum = new egret.TextField;
        this.fightctrl.coinNum.text = "10";
        this.fightctrl.coinNum.size = 35;
        GameCtrl.I.freshTextFieldAnchorOff(this.fightctrl.coinNum);
        UI.setXandY(this.fightctrl.coinNum, this.coin.x + this.coin.width / 2.5, this.coin.y + this.coin.height / 1.2);
        this.addChild(this.fightctrl.coinNum);
        //
        this.fightctrl.levelNum = new egret.TextField;
        this.fightctrl.levelNum.text = "10";
        this.fightctrl.levelNum.size = 35;
        this.fightctrl.levelNum.textColor = 0xff69b4;
        GameCtrl.I.freshTextFieldAnchorOff(this.fightctrl.levelNum);
        this.fightctrl.levelNum.anchorOffsetX = this.fightctrl.levelNum.width / 2; this.fightctrl.levelNum.anchorOffsetY = this.fightctrl.levelNum.height / 2;
        UI.setXandY(this.fightctrl.levelNum, this.controlbar.x, this.controlbar.y + 40);
        this.addChild(this.fightctrl.levelNum);

        //
        this.fightctrl.scoreNum = new egret.TextField;
        this.fightctrl.scoreNum.text = "0";
        this.fightctrl.scoreNum.size = 32;
        this.fightctrl.scoreNum.textColor = 0xda6920;
        GameCtrl.I.freshTextFieldAnchorOff(this.fightctrl.scoreNum);
        this.fightctrl.scoreNum.anchorOffsetX = this.fightctrl.scoreNum.width / 2; this.fightctrl.scoreNum.anchorOffsetY = this.fightctrl.scoreNum.height / 2;
        UI.setXandY(this.fightctrl.scoreNum, this.controlbar.x, this.controlbar.y - 10);
        this.addChild(this.fightctrl.scoreNum);

        //
        this.fightctrl.timeNum = new egret.TextField;
        this.fightctrl.timeNum.text = "0";
        this.fightctrl.timeNum.size = 32;
        this.fightctrl.timeNum.textColor = 0x00ffff;
        GameCtrl.I.freshTextFieldAnchorOff(this.fightctrl.timeNum);
        this.fightctrl.timeNum.anchorOffsetX = this.fightctrl.timeNum.width / 2; this.fightctrl.timeNum.anchorOffsetY = this.fightctrl.timeNum.height / 2;
        UI.setXandY(this.fightctrl.timeNum, this.controlbar.x + this.controlbar.width / 4.5, this.controlbar.y + this.controlbar.height / 3);
        this.addChild(this.fightctrl.timeNum);

    }

    /**提示界面 */
    public ToHelpLayer() {
        GameCtrl.I._gamestate._playerLayer.$setTouchChildren(false);
        this.stage.addChild(new HelpLayer());
    }

}