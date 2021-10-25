var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_burst_p = (function () {
    function K_burst_p() {
    }
    K_burst_p.addSprite5319 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, K_burst_p.frame3, 5, K_burst_p.frame5]);
        return;
    };
    K_burst_p.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a725.getInstance(_parentRole).s_type = "s_power";
        _parentRole.powerBurst();
    };
    K_burst_p.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_burst_p;
}());
__reflect(K_burst_p.prototype, "K_burst_p");
//# sourceMappingURL=K_burst_p.js.map