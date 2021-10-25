var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_burst = (function () {
    function Mai_burst() {
    }
    Mai_burst.addSprite6595 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_burst.frame3, 6, Mai_burst.frame6]);
        return;
    };
    Mai_burst.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6594 = Mai_a6594.getInstance(_parentRole);
        a6594.s_type = "s_attack";
        _parentRole.powerBurst();
    };
    Mai_burst.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_burst;
}());
__reflect(Mai_burst.prototype, "Mai_burst");
//# sourceMappingURL=Mai_burst.js.map