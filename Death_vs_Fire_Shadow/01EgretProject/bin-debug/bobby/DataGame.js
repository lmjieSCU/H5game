var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataGame = (function () {
    function DataGame() {
    }
    DataGame.addGod = function (param) {
        DataGame.goldNum += param;
    };
    DataGame.cutGod = function (param) {
        DataGame.goldNum -= param;
    };
    DataGame.addDiamond = function (param) {
        DataGame.diamondNum += param;
    };
    DataGame.cutDiamond = function (param) {
        DataGame.diamondNum -= param;
    };
    DataGame.saveData = function (param) {
        Util.saveItem("goldNum", DataGame.goldNum);
        Util.saveItem("diamondNum", DataGame.diamondNum);
    };
    DataGame.readData = function (param) {
        DataGame.goldNum = Util.getItem("goldNum");
        DataGame.diamondNum = Util.getItem("diamondNum");
    };
    DataGame.goldNum = 0; //金币数量
    DataGame.diamondNum = 0; //钻石数量
    return DataGame;
}());
__reflect(DataGame.prototype, "DataGame");
//# sourceMappingURL=DataGame.js.map