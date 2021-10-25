var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_roll_f = (function () {
    function Kula_roll_f() {
    }
    Kula_roll_f.addSprite18967 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_roll_f.frame3, 12, Kula_roll_f.frame12, 16, Kula_roll_f.frame16]);
        return;
    };
    Kula_roll_f.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 0;
        a18962.flag = "";
        a18962.target = "";
    };
    Kula_roll_f.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Kula_roll_f.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_roll_f;
}());
__reflect(Kula_roll_f.prototype, "Kula_roll_f");
//# sourceMappingURL=Kula_roll_f.js.map