var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Config = (function () {
    function Config() {
        return;
    }
    Config.levelCfgParser = new LevelCfgParser();
    Config.propCfgParser = new PropCfgParser();
    Config.bubbleCfgParser = new BubbleCfgParser();
    return Config;
}());
__reflect(Config.prototype, "Config");
//# sourceMappingURL=Config.js.map