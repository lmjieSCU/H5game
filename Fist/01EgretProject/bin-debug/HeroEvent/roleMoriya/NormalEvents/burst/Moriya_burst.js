var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_burst = (function () {
    function Moriya_burst() {
    }
    Moriya_burst.addSprite3558 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_burst.frame3, 6, Moriya_burst.frame6]);
        return;
    };
    Moriya_burst.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3555 = Moriya_a3555.getInstance(_parentRole);
        a3555.s_type = "s_attack";
        _parentRole.powerBurst();
    };
    Moriya_burst.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_burst;
}());
__reflect(Moriya_burst.prototype, "Moriya_burst");
//# sourceMappingURL=Moriya_burst.js.map