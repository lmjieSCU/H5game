var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_land3 = (function () {
    function Kula_land3() {
    }
    Kula_land3.addSprite19113 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_land3.frame1, 12, Kula_land3.frame12]);
        return;
    };
    Kula_land3.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Kula_land3.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_land3;
}());
__reflect(Kula_land3.prototype, "Kula_land3");
//# sourceMappingURL=Kula_land3.js.map