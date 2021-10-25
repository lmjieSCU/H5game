var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_hurt5 = (function () {
    function Moriya_hurt5() {
    }
    Moriya_hurt5.addSprite3505 = function (mc, own_role) {
        mc.addFrameScript(mc, [14, Moriya_hurt5.frame14]);
        return;
    };
    Moriya_hurt5.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Moriya_hurt5;
}());
__reflect(Moriya_hurt5.prototype, "Moriya_hurt5");
//# sourceMappingURL=Moriya_hurt5.js.map