var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_burst_a = (function () {
    function K_burst_a() {
    }
    K_burst_a.addSprite5317 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, K_burst_a.frame3, 6, K_burst_a.frame6]);
        return;
    };
    K_burst_a.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.powerBurst();
        K_a725.getInstance(_parentRole).s_type = "s_attack";
    };
    K_burst_a.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_burst_a;
}());
__reflect(K_burst_a.prototype, "K_burst_a");
//# sourceMappingURL=K_burst_a.js.map