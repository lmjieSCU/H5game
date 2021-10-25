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
    };
    /**本阶段通过 */
    GameEndCtrl.prototype.doGamePassed = function () {
    };
    /**游戏失败 */
    GameEndCtrl.prototype.doGameFailed = function () {
    };
    return GameEndCtrl;
}());
__reflect(GameEndCtrl.prototype, "GameEndCtrl");
//# sourceMappingURL=GameEndCtrl.js.map