var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_roll_f = (function () {
    function Moriya_roll_f() {
    }
    Moriya_roll_f.addSprite3410 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_roll_f.frame3, 15, Moriya_roll_f.frame15, 19, Moriya_roll_f.frame19]);
        return;
    };
    Moriya_roll_f.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 0;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_roll_f.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Moriya_roll_f.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_roll_f;
}());
__reflect(Moriya_roll_f.prototype, "Moriya_roll_f");
//# sourceMappingURL=Moriya_roll_f.js.map