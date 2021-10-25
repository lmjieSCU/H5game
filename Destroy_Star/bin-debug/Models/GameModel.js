var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
        return;
    } // end function
    GameModel.NORMAL = 1; //无道具
    GameModel.TIMELIMIT = 2; //炸弹
    GameModel.BULIMIT = 3; //画板
    //
    GameModel.currentMode = GameModel.NORMAL; //默认设置无道具
    GameModel.jinbi = 20;
    GameModel.heighest1 = 0;
    GameModel.heighest2 = 0;
    return GameModel;
}());
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map