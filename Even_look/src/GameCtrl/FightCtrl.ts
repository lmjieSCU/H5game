/**战斗逻辑控制器
 * 刷新金币数,关卡数,时间,分数
 * 负责扣时,加分
 * 重置金币数,关卡数,时间,分数
 */
class FightCtrl {
    public _fightui: FightUI;
    public coinNum: egret.TextField;
    public levelNum: egret.TextField;
    public scoreNum: egret.TextField;
    public timeNum: egret.TextField;
    private time: number = 180;
    private timeAnimateFrame: number = 0;
    public totalTime: number;


    constructor() {
        this._fightui = new FightUI(this);
        UI.addClickAction(this, this._fightui.refresh, this.selectFresh);
        UI.addClickAction(this, this._fightui.hint, this.SelectHint);
        UI.addClickAction(this, this._fightui.boom, this.SelectBoom);
        GameCtrl.I.addGameSprite(this._fightui);
    }

    /**重置时间,金币,分数,关卡 */
    public reset(isnewlevel: boolean = true) {
        if (!isnewlevel) {
            return;
        }
        let lvinfos = GameData.I.stageInfo(GameData.I.level);
        let pairs: number = 0;
        for (let i in lvinfos) {
            if (lvinfos[i].x == -1) {   //随机y对
                pairs = pairs + lvinfos[i].y / 2;
            } else if (lvinfos[i].x == 0) { //全开
                pairs = 21;
            } else {            //关卡数决定
                pairs = GameData.I.styleInfo(lvinfos[i].x).length / 2;
            }
        }
        this.time = pairs * 7 + 22;
        this.totalTime = this.time;
        this.timeAnimateFrame = 0;
        this.levelNum.text = String(GameData.I.level + 1);
        GameCtrl.I.freshTextFieldAnchorOff(this.levelNum);
        if (this.time % 60 < 10) {
            this.timeNum.text = Math.floor(this.time / 60) + ":0" + this.time % 60;

        } else {
            this.timeNum.text = Math.floor(this.time / 60) + ":" + this.time % 60;
        }
        GameCtrl.I.freshTextFieldAnchorOff(this.timeNum);
        this.coinNum.text = String(GameData.jinbi);
        GameCtrl.I.freshTextFieldAnchorOff(this.coinNum);
    }

    /**刷新分数 */
    public setScore(score: number) {
        this.scoreNum.text = String(score);
        GameCtrl.I.freshTextFieldAnchorOff(this.scoreNum);
        return;
    }

    public calcStar():number{
        if(this.time/this.totalTime>=0.3){
            return 3;
        }else if(this.time/this.totalTime>=0.2){
            return 2;
        }
        else{
            return 1;
        }
    }

    /**渲染时间 */
    public render() {
        this.timeAnimateFrame++;
        if (this.timeAnimateFrame <= 30) {
            return;
        }
        this.timeAnimateFrame = 0;
        this.time--;
        if (this.time % 60 < 10) {
            this.timeNum.text = Math.floor(this.time / 60) + ":0" + this.time % 60;

        } else {
            this.timeNum.text = Math.floor(this.time / 60) + ":" + this.time % 60;
        }
        GameCtrl.I.freshTextFieldAnchorOff(this.timeNum);
        if (this.time <= 0) {
            GameCtrl.I.timeover();
        }
        return;
    }
    /**道具一:炸掉所有某一指定颜色cells */
    public SelectBoom() {
        if (GameCtrl.I.running == false || GameCtrl.I._gridCtrl.grid.cellReference.length <= 0) {
            return;
        }
        if (GameData.jinbi < 25) {
            return;
        }
        if (GameCtrl.I._gridCtrl.boomReady) {
            return;
        }
        LocalDataCtrl.I.Freshcoins(-25);
        this.coinNum.text = String(GameData.jinbi);
        GameCtrl.I.freshTextFieldAnchorOff(this.coinNum);
        GameCtrl.I._gridCtrl.boomReady = true;
        this._fightui.boom.y = this._fightui.boom.y - 10;
        SoundCtrl.I.playSound("click");
        return;
    }

    /**道具二：刷新cells颜色 */
    public selectFresh() {
        if (GameCtrl.I.running == false || GameCtrl.I._gridCtrl.grid.cellReference.length <= 0) {
            return;
        }
        if (GameData.jinbi < 35) {
            return;
        }
        LocalDataCtrl.I.Freshcoins(-35);
        this.coinNum.text = String(GameData.jinbi);
        GameCtrl.I.freshTextFieldAnchorOff(this.coinNum);
        GameCtrl.I._gridCtrl.grid.refreshGrid();
        GameCtrl.I._gridCtrl.grid.refreshGridToAlive();
        SoundCtrl.I.playSound("refresh");
        return;
    }

    /**道具三:摧毁随机一对可摧毁cells */
    public SelectHint() {
        if (GameCtrl.I.running == false || GameCtrl.I._gridCtrl.grid.cellReference.length <= 0) {
            return;
        }
        if (GameData.jinbi < 25) {
            return;
        }
        LocalDataCtrl.I.Freshcoins(-25);
        this.coinNum.text = String(GameData.jinbi);
        GameCtrl.I.freshTextFieldAnchorOff(this.coinNum);
        let loc2 = GameCtrl.I._gridCtrl.grid.getTwoEnable();
        let loc3 = GameCtrl.I._gridCtrl.grid.checkTwoCellLinkable(loc2[0], loc2[1]);
        EffectCtrl.I.createGrid_AngAt(loc2[0]);
        EffectCtrl.I.createGrid_AngAt(loc2[1]);
        EffectCtrl.I.createGridPathEft(loc3);
        GameCtrl.I._gridCtrl.grid.dropCell(loc2[0]);
        GameCtrl.I._gridCtrl.grid.dropCell(loc2[1]);
        GameCtrl.I._gridCtrl.destroyObj(loc2[0]);
        GameCtrl.I._gridCtrl.destroyObj(loc2[1]);
        GameCtrl.I._gridCtrl.dropCellFocus();
        GameCtrl.I._gridCtrl.grid.checkDeadEnd();
        if (GameCtrl.I._gridCtrl.grid.Pass()) {
            GameCtrl.I.GameEnd();
        }
        return;
    }


}