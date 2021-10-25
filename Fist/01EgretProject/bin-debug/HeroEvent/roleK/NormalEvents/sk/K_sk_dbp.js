var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dbp = (function () {
    function K_sk_dbp() {
    }
    K_sk_dbp.addSprite5855 = function (mc, own_role) {
        mc["own_role"] = own_role;
        mc.addFrameScript(mc, [1, K_sk_dbp.frame1, 7, K_sk_dbp.frame7, 11, K_sk_dbp.frame11, 24, K_sk_dbp.frame24]);
        return;
    };
    K_sk_dbp.frame1 = function (mc) {
        var a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = -5;
        a917.Vy = 37;
        a917.Va = 0;
        a917.Vg = 5;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    };
    K_sk_dbp.frame7 = function () {
        // _level0.k_snd.start();
    };
    K_sk_dbp.frame11 = function (mc) {
        K_a863.getInstance(mc["own_role"]).name = "fire9_3";
    };
    K_sk_dbp.frame24 = function (mc) {
        mc.stop();
    };
    return K_sk_dbp;
}());
__reflect(K_sk_dbp.prototype, "K_sk_dbp");
//# sourceMappingURL=K_sk_dbp.js.map