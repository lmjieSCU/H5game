var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_hurt4 = (function () {
    function Kula_hurt4() {
    }
    Kula_hurt4.addSprite19069 = function (mc, own_role) {
        mc.addFrameScript(mc, [14, Kula_hurt4.frame14]);
        return;
    };
    Kula_hurt4.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("s2");
    };
    return Kula_hurt4;
}());
__reflect(Kula_hurt4.prototype, "Kula_hurt4");
//# sourceMappingURL=Kula_hurt4.js.map