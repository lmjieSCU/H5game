var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_land = (function () {
    function Kula_land() {
    }
    Kula_land.addSprite19107 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_land.frame1, 4, Kula_land.frame4]);
        return;
    };
    Kula_land.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Kula_land.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_land;
}());
__reflect(Kula_land.prototype, "Kula_land");
//# sourceMappingURL=Kula_land.js.map