var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mgobe_conf = (function () {
    function mgobe_conf() {
    }
    mgobe_conf.NewUser = function (id) {
        if (id in mgobe_conf.NameLib) {
        }
    };
    mgobe_conf.gameInfo = {
        openId: 'liumengjie1',
        gameId: "obg-cnswhgeu",
        secretKey: '5f8251d97f885f03c1211c242b82a8b4571fdb6b',
    };
    mgobe_conf.config = {
        url: 'cnswhgeu.wxlagame.com',
        reconnectMaxTimes: 5,
        reconnectInterval: 1000,
        resendInterval: 1000,
        resendTimeout: 10000,
    };
    mgobe_conf.NameLib = [];
    return mgobe_conf;
}());
__reflect(mgobe_conf.prototype, "mgobe_conf");
//# sourceMappingURL=mgobe_conf.js.map