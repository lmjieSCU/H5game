var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_land2 = (function () {
    function Moriya_land2() {
    }
    Moriya_land2.addSprite3543 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Moriya_land2.frame1, 7, Moriya_land2.frame7]);
        return;
    };
    Moriya_land2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Moriya_land2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_land2;
}());
__reflect(Moriya_land2.prototype, "Moriya_land2");
//# sourceMappingURL=Moriya_land2.js.map