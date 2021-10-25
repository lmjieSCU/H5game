var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_hurt6 = (function () {
    function Kula_hurt6() {
    }
    Kula_hurt6.addSprite19077 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, Kula_hurt6.frame12]);
        return;
    };
    Kula_hurt6.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_hurt6;
}());
__reflect(Kula_hurt6.prototype, "Kula_hurt6");
//# sourceMappingURL=Kula_hurt6.js.map