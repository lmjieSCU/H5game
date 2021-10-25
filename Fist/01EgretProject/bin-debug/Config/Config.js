var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Config = (function () {
    function Config() {
    }
    Config.rank = [
        { lv: 1, name: '青铜', title: '拳者' },
        { lv: 2, name: '白银', title: '拳师' },
        { lv: 3, name: '黄金', title: '拳王' },
        { lv: 4, name: '铂金', title: '拳尊' },
        { lv: 5, name: '钻石', title: '拳圣' },
        { lv: 6, name: '王者', title: '拳皇' },
    ];
    Config.newSign = [
        { day: 1, rewardId: [1001], rewardType: [1], rewardNum: [1] },
        { day: 2, rewardId: [1001], rewardType: [1], rewardNum: [1] },
        { day: 3, rewardId: [1001], rewardType: [1], rewardNum: [1] },
        { day: 4, rewardId: [1001], rewardType: [1], rewardNum: [1] },
        { day: 5, rewardId: [1001], rewardType: [1], rewardNum: [1] },
        { day: 6, rewardId: [1001], rewardType: [1], rewardNum: [1] },
        { day: 7, rewardId: [1001], rewardType: [1], rewardNum: [1] },
    ];
    return Config;
}());
__reflect(Config.prototype, "Config");
//# sourceMappingURL=Config.js.map