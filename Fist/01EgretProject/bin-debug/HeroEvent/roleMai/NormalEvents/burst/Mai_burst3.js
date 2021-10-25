var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_burst3 = (function () {
    function Mai_burst3() {
    }
    Mai_burst3.addSprite6597 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_burst3.frame3, 6, Mai_burst3.frame6]);
        return;
    };
    Mai_burst3.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6594 = Mai_a6594.getInstance(_parentRole);
        a6594.s_type = "s_power";
        _parentRole.powerBurst();
    };
    Mai_burst3.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_burst3;
}());
__reflect(Mai_burst3.prototype, "Mai_burst3");
//# sourceMappingURL=Mai_burst3.js.map