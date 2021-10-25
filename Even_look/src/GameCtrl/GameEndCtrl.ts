/**游戏结束逻辑
 * 胜利/失败结算界面
 * 重开/返回/下一阶段
 */
class GameEndCtrl {
    public layer: Layer;

    public doGameEnd() {
        console.log("end: ", GameData.I.level + 1 + "-" + (GameData.I.lv_stage + 1), !GameCtrl.I.istimeover);
        if (GameCtrl.I.istimeover == true) {
            this.doGameFailed();
        } else {
            this.doGamePassed();
        }
        return;
    }


    /**本阶段通过 */
    public doGamePassed() {
        let hasnext: boolean = true;
        let loc = GameData.I.nextstage();
        if (!loc) {
            GameCtrl.I.GameStart(false);
            return;
        }
        if (GameData.I.level == 100) {
            hasnext = false;
        }
        SoundCtrl.I.playSound("win");
        
        let starnum  = GameCtrl.I._fightCtrl.calcStar();
        LocalDataCtrl.I.FreshLvhighScore(GameCtrl.I._gridCtrl.gridScore, GameData.I.level - 1);
        LocalDataCtrl.I.FreshLvStar(starnum, GameData.I.level - 1);
        this.layer = new PassLayer(hasnext,starnum);
        let btns = this.layer.init();
        UI.addClickAction(this, btns[0], this.btnReturn);
        if (hasnext == true) {
            UI.addClickAction(this, btns[1], this.btnNext);
        }
        GameCtrl.I.addGameSprite(this.layer);

    }

    /**游戏失败 */
    public doGameFailed() {
        SoundCtrl.I.playSound("Lose");
        this.layer = new FailLayer();
        let btns = this.layer.init();
        UI.addClickAction(this, btns[0], this.btnReturn);
        UI.addClickAction(this, btns[1], this.btnNext);
        GameCtrl.I.addGameSprite(this.layer);
    }

    /**返回选关界面 */
    public btnReturn() {
        GameCtrl.I.removeGameSprite(this.layer);
        SceneManager.I.ChangeScene(new ChooseScene);
    }

    /**下一阶段 */
    public btnNext() {
        GameCtrl.I.removeGameSprite(this.layer);
        GameCtrl.I.GameStart();
    }

}