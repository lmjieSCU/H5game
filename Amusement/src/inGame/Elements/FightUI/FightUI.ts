/**战斗场景素材
 * 时间,关卡,金币,分数以及部分图片
 */
class FightUI extends egret.DisplayObjectContainer {
    private fightctrl: FightCtrl;


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
        this.addBg();

    }

    public addBg() {
        let wordbg = UI.addPic( "worldBg_2_png", true,this);
        UI.setscalXandY(wordbg, UI.WINSIZE_W * 1.1 / wordbg.width, UI.WINSIZE_W * 1.5 / wordbg.width)
        UI.setXandY(wordbg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        this.addChild(wordbg);
    }


}