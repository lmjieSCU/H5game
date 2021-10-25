var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameInterface = (function () {
    function GameInterface() {
        return;
    } // end function
    GameInterface.getDefaultMenu = function () {
        var _loc_1 = [{ txt: "TEAM PLAY", cn: "小队模式", children: [{ txt: "TEAM ACRADE", cn: "闯关模式" }, { txt: "TEAM VS PEOPLE", cn: "2P对战" }, { txt: "TEAM VS CPU", cn: "对战电脑" }] }, { txt: "SINGLE PLAY", cn: "单人模式", children: [{ txt: "SINGLE ACRADE", cn: "闯关模式" }, { txt: "SINGLE VS PEOPLE", cn: "2P对战" }, { txt: "SINGLE VS CPU", cn: "对战电脑" }] }, { txt: "OPTION", cn: "游戏设置" }, { txt: "TRAINING", cn: "练习模式" }, { txt: "CREDITS", cn: "制作组" }, { txt: "MORE GAMES", cn: "更多游戏" }];
        return _loc_1;
    }; // end function
    return GameInterface;
}());
__reflect(GameInterface.prototype, "GameInterface");
//# sourceMappingURL=GameInterface.js.map