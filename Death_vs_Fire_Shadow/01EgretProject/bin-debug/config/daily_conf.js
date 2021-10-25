var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var daily_conf = (function () {
    function daily_conf() {
    }
    daily_conf.data = 
    //序号		rewardType		rewardNum		rewardType	
    [[1, 1, 1000],
        [2, 2, 20],
        [3, 1, 2500],
        [4, 2, 50],
        [5, 1, 5000],
        [6, 2, 120],
        [7, 3, 11]];
    return daily_conf;
}());
__reflect(daily_conf.prototype, "daily_conf");
;
//# sourceMappingURL=daily_conf.js.map