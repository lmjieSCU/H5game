var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**缺少火焰子骨骼 */
var K_sk_dfp = (function () {
    function K_sk_dfp() {
    }
    K_sk_dfp.addSprite5656 = function (mc, own_role) {
        mc.addFrameScript(mc, [6, K_sk_dfp.frame6, 11, K_sk_dfp.frame11, 17, K_sk_dfp.frame20]);
        mc["own_role"] = own_role;
        return;
    };
    K_sk_dfp.frame6 = function (mc) {
        K_a863.getInstance(mc["own_role"]).name = "fire1";
    };
    K_sk_dfp.frame11 = function (mc) {
        if (mc["own_role"]["CPU_check"]) {
            mc["own_role"]["CPU_check"]();
        }
    };
    K_sk_dfp.frame20 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    return K_sk_dfp;
}());
__reflect(K_sk_dfp.prototype, "K_sk_dfp");
//# sourceMappingURL=K_sk_dfp.js.map