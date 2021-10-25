var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**游戏结束逻辑
 * 胜利/失败结算界面
 * 重开/返回/下一阶段
 */
var GameEndCtrl = (function () {
    function GameEndCtrl() {
    }
    GameEndCtrl.prototype.doGameEnd = function () {
        console.log("end: ", GameData.I.level + 1 + "-" + (GameData.I.lv_stage + 1), !GameCtrl.I.istimeover);
        if (GameCtrl.I.istimeover == true) {
            this.doGameFailed();
        }
        else {
            this.doGamePassed();
        }
        return;
    };
    /**本阶段通过 */
    GameEndCtrl.prototype.doGamePassed = function () {
        var hasnext = true;
        var loc = GameData.I.nextstage();
        if (!loc) {
            GameCtrl.I.GameStart(false);
            return;
        }
        if (GameData.I.level == 100) {
            hasnext = false;
        }
        SoundCtrl.I.playSound("win");
        var starnum = GameCtrl.I._fightCtrl.calcStar();
        LocalDataCtrl.I.FreshLvhighScore(GameCtrl.I._gridCtrl.gridScore, GameData.I.level - 1);
        LocalDataCtrl.I.FreshLvStar(starnum, GameData.I.level - 1);
        this.layer = new PassLayer(hasnext, starnum);
        var btns = this.layer.init();
        UI.addClickAction(this, btns[0], this.btnReturn);
        if (hasnext == true) {
            UI.addClickAction(this, btns[1], this.btnNext);
        }
        GameCtrl.I.addGameSprite(this.layer);
    };
    /**游戏失败 */
    GameEndCtrl.prototype.doGameFailed = function () {
        SoundCtrl.I.playSound("Lose");
        this.layer = new FailLayer();
        var btns = this.layer.init();
        UI.addClickAction(this, btns[0], this.btnReturn);
        UI.addClickAction(this, btns[1], this.btnNext);
        GameCtrl.I.addGameSprite(this.layer);
    };
    /**返回选关界面 */
    GameEndCtrl.prototype.btnReturn = function () {
        GameCtrl.I.removeGameSprite(this.layer);
        SceneManager.I.ChangeScene(new ChooseScene);
    };
    /**下一阶段 */
    GameEndCtrl.prototype.btnNext = function () {
        GameCtrl.I.removeGameSprite(this.layer);
        GameCtrl.I.GameStart();
    };
    return GameEndCtrl;
}());
__reflect(GameEndCtrl.prototype, "GameEndCtrl");
//# sourceMappingURL=GameEndCtrl.js.map