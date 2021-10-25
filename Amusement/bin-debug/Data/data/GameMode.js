var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameMode = (function () {
    function GameMode() {
    }
    GameMode.NORMAL = 0;
    GameMode.TIME = 1;
    return GameMode;
}());
__reflect(GameMode.prototype, "GameMode");
//# sourceMappingURL=GameMode.js.map