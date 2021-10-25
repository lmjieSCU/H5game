var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dfp_s2 = (function () {
    function K_sk_dfp_s2() {
    }
    K_sk_dfp_s2.addSprite5673 = function (mc, own_role) {
        mc.addFrameScript(mc, [7, K_sk_dfp_s2.frame7, 16, K_sk_dfp_s2.frame16]);
        mc["own_role"] = own_role;
        return;
    };
    K_sk_dfp_s2.frame7 = function (mc) {
        K_a863.getInstance(mc["own_role"]).name = "fire2";
    };
    K_sk_dfp_s2.frame16 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    return K_sk_dfp_s2;
}());
__reflect(K_sk_dfp_s2.prototype, "K_sk_dfp_s2");
//# sourceMappingURL=K_sk_dfp_s2.js.map