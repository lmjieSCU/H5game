var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
        return;
    } // end function
    GameModel.VS_CPU = 10; //个人--电脑对战
    GameModel.VS_PERSON = 20; //房间匹配
    GameModel.TRAINING = 30; //训练模式
    //
    GameModel.currentMode = GameModel.TRAINING; //默认设置模式
    return GameModel;
}());
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map