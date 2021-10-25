var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_land = (function () {
    function Ryu_land() {
    }
    Ryu_land.addSprite20378 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_land.frame1, 3, Ryu_land.frame3,]);
        return;
    };
    Ryu_land.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Ryu_land.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_land;
}());
__reflect(Ryu_land.prototype, "Ryu_land");
//# sourceMappingURL=Ryu_land.js.map