var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_hurt6 = (function () {
    function Moriya_hurt6() {
    }
    Moriya_hurt6.addSprite3506 = function (mc, own_role) {
        mc.addFrameScript(mc, [13, Moriya_hurt6.frame13]);
        return;
    };
    Moriya_hurt6.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Moriya_hurt6;
}());
__reflect(Moriya_hurt6.prototype, "Moriya_hurt6");
//# sourceMappingURL=Moriya_hurt6.js.map