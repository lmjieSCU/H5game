var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Model = (function () {
    function Model() {
        return;
    }
    Model.init = function () {
        return;
    };
    Model.gameModel = new GameModel();
    Model.levelModel = new LevelModel();
    Model.settingModel = new SettingModel();
    return Model;
}());
__reflect(Model.prototype, "Model");
//# sourceMappingURL=Model.js.map