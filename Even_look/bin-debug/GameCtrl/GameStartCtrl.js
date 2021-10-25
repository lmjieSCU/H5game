/**游戏开始逻辑
 * 初始化cellgrid
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameStartCtrl = (function () {
    function GameStartCtrl() {
    }
    /**重设grid,初始化cells */
    GameStartCtrl.prototype.dostartGame = function () {
        var stageinfos = GameData.I.stageInfo(GameData.I.level);
        if (stageinfos.length >= 10) {
            SoundCtrl.I.playbgSound("bossbgLv");
        }
        else {
            SoundCtrl.I.playbgSound("bgsound");
        }
        GameCtrl.I._gridCtrl.gridInit(stageinfos[GameData.I.lv_stage].x, stageinfos[GameData.I.lv_stage].y);
        return;
    };
    return GameStartCtrl;
}());
__reflect(GameStartCtrl.prototype, "GameStartCtrl");
//# sourceMappingURL=GameStartCtrl.js.map