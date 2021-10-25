var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_roll_b = (function () {
    function Mai_roll_b() {
    }
    Mai_roll_b.addSprite6447 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_roll_b.frame3, 11, Mai_roll_b.frame11, 14, Mai_roll_b.frame14]);
        return;
    };
    Mai_roll_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = -24;
        a6433.flag = "";
        a6433.target = "";
    };
    Mai_roll_b.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Mai_roll_b.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        _parentRole.toStatus_switch("stand");
    };
    return Mai_roll_b;
}());
__reflect(Mai_roll_b.prototype, "Mai_roll_b");
//# sourceMappingURL=Mai_roll_b.js.map