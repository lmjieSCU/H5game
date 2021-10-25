var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_bengin = (function () {
    function Kula_bengin() {
    }
    Kula_bengin.addSprite18748 = function (mc, own_role) {
        mc.addFrameScript(mc, [104, Kula_bengin.frame104]);
        return;
    };
    Kula_bengin.frame104 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_bengin;
}());
__reflect(Kula_bengin.prototype, "Kula_bengin");
//# sourceMappingURL=Kula_bengin.js.map