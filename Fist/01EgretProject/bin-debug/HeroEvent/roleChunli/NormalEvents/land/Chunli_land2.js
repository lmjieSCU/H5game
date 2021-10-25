var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_land2 = (function () {
    function Chunli_land2() {
    }
    Chunli_land2.addSprite14637 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_land2.frame1, 7, Chunli_land2.frame7]);
        return;
    };
    Chunli_land2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Chunli_land2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_land2;
}());
__reflect(Chunli_land2.prototype, "Chunli_land2");
//# sourceMappingURL=Chunli_land2.js.map