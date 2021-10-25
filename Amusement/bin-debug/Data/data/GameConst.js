var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConst = (function () {
    function GameConst() {
    }
    GameConst.aim_res = [null, "candy0", "candy1", "candy2", "candy3", "candy4"];
    GameConst.ROW_COUNT = 9;
    GameConst.COL_COUNT = 9;
    GameConst.CARD_W = 64;
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
//# sourceMappingURL=GameConst.js.map