var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SubConfig = (function () {
    function SubConfig() {
    }
    SubConfig.win_subpackages = [];
    SubConfig.win_main = [
        "heros/roleK", "heros/roleRyu", "heros/effects", "ui/fightui", "heros/roleMai", "heros/roleChunli", "heros/roleTerry", "heros/roleMoriya",
        "heros/roleKula"
    ];
    SubConfig.qq_subpackages = [
        "heros/roleK", "heros/roleRyu", "heros/effects", "ui/fightui", "heros/roleChunli"
    ];
    SubConfig.qq_main = [];
    return SubConfig;
}());
__reflect(SubConfig.prototype, "SubConfig");
//# sourceMappingURL=SubConfig.js.map