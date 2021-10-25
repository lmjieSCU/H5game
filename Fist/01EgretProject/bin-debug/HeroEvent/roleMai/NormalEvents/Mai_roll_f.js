var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_roll_f = (function () {
    function Mai_roll_f() {
    }
    Mai_roll_f.addSprite6446 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_roll_f.frame3, 12, Mai_roll_f.frame12, 14, Mai_roll_f.frame14]);
        return;
    };
    Mai_roll_f.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 24;
        a6433.flag = "";
        a6433.target = "";
    };
    Mai_roll_f.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Mai_roll_f.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        _parentRole.toStatus_switch("stand");
    };
    return Mai_roll_f;
}());
__reflect(Mai_roll_f.prototype, "Mai_roll_f");
//# sourceMappingURL=Mai_roll_f.js.map