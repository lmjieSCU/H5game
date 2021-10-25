var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_roll_b = (function () {
    function Chunli_roll_b() {
    }
    Chunli_roll_b.addSprite14363 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_roll_b.frame3, 14, Chunli_roll_b.frame14, 18, Chunli_roll_b.frame18]);
        return;
    };
    Chunli_roll_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = -26;
        a3395.flag = "";
        a3395.target = "";
    };
    Chunli_roll_b.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Chunli_roll_b.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_roll_b;
}());
__reflect(Chunli_roll_b.prototype, "Chunli_roll_b");
//# sourceMappingURL=Chunli_roll_b.js.map