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
        GameCtrl.I._fightCtrl.init();
    };
    return GameStartCtrl;
}());
__reflect(GameStartCtrl.prototype, "GameStartCtrl");
//# sourceMappingURL=GameStartCtrl.js.map