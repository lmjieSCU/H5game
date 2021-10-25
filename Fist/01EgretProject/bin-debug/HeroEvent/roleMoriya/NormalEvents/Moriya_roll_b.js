var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_roll_b = (function () {
    function Moriya_roll_b() {
    }
    Moriya_roll_b.addSprite3414 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_roll_b.frame3, 14, Moriya_roll_b.frame14, 18, Moriya_roll_b.frame18]);
        return;
    };
    Moriya_roll_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = -21;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_roll_b.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Moriya_roll_b.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_roll_b;
}());
__reflect(Moriya_roll_b.prototype, "Moriya_roll_b");
//# sourceMappingURL=Moriya_roll_b.js.map