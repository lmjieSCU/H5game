var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_roll_f = (function () {
    function Chunli_roll_f() {
    }
    Chunli_roll_f.addSprite14362 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_roll_f.frame3, 15, Chunli_roll_f.frame15, 18, Chunli_roll_f.frame18]);
        return;
    };
    Chunli_roll_f.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 26;
        a3395.flag = "";
        a3395.target = "";
    };
    Chunli_roll_f.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Chunli_roll_f.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_roll_f;
}());
__reflect(Chunli_roll_f.prototype, "Chunli_roll_f");
//# sourceMappingURL=Chunli_roll_f.js.map