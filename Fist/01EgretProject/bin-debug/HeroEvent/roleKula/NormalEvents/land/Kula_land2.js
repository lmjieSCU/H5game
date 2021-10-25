var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_land2 = (function () {
    function Kula_land2() {
    }
    Kula_land2.addSprite19112 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_land2.frame1, 7, Kula_land2.frame7]);
        return;
    };
    Kula_land2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Kula_land2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_land2;
}());
__reflect(Kula_land2.prototype, "Kula_land2");
//# sourceMappingURL=Kula_land2.js.map