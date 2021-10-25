var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_land = (function () {
    function Moriya_land() {
    }
    Moriya_land.addSprite3542 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Moriya_land.frame1, 4, Moriya_land.frame4]);
        return;
    };
    Moriya_land.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Moriya_land.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_land;
}());
__reflect(Moriya_land.prototype, "Moriya_land");
//# sourceMappingURL=Moriya_land.js.map