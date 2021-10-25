var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_land3 = (function () {
    function Chunli_land3() {
    }
    Chunli_land3.addSprite14638 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_land3.frame1, 12, Chunli_land3.frame12]);
        return;
    };
    Chunli_land3.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Chunli_land3.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_land3;
}());
__reflect(Chunli_land3.prototype, "Chunli_land3");
//# sourceMappingURL=Chunli_land3.js.map