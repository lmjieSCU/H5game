var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_land3 = (function () {
    function Moriya_land3() {
    }
    Moriya_land3.addSprite3544 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Moriya_land3.frame1, 12, Moriya_land3.frame12]);
        return;
    };
    Moriya_land3.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Moriya_land3.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_land3;
}());
__reflect(Moriya_land3.prototype, "Moriya_land3");
//# sourceMappingURL=Moriya_land3.js.map