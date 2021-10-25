var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dfk = (function () {
    function K_sk_dfk() {
    }
    K_sk_dfk.addSprite5687 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_sk_dfk.frame1, 4, K_sk_dfk.frame4, 10, K_sk_dfk.frame10, 14, K_sk_dfk.frame14, 19, K_sk_dfk.frame19, 26, K_sk_dfk.frame26]);
        mc['own_role'] = own_role;
        return;
    };
    K_sk_dfk.frame1 = function (mc) {
        mc['own_role'].checkTouch_stop = true;
    };
    K_sk_dfk.frame4 = function (mc) {
        var a594 = K_a594.getInstance(mc['own_role']);
        a594.Vx = 40;
        a594.flag = "";
        a594.target = "";
    };
    K_sk_dfk.frame10 = function (mc) {
        mc['own_role'].stop_move_X1();
    };
    K_sk_dfk.frame14 = function (mc) {
        var a917 = K_a917.getInstance(mc['own_role']);
        a917.Vx = 25;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    };
    K_sk_dfk.frame19 = function (mc) {
        mc['own_role'].checkTouch_stop = false;
    };
    K_sk_dfk.frame26 = function (mc) {
        mc['own_role'].toStatus_switch("stand");
    };
    return K_sk_dfk;
}());
__reflect(K_sk_dfk.prototype, "K_sk_dfk");
//# sourceMappingURL=K_sk_dfk.js.map