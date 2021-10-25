var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_land = (function () {
    function Chunli_land() {
    }
    Chunli_land.addSprite14636 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_land.frame1, 4, Chunli_land.frame4]);
        return;
    };
    Chunli_land.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Chunli_land.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_land;
}());
__reflect(Chunli_land.prototype, "Chunli_land");
//# sourceMappingURL=Chunli_land.js.map