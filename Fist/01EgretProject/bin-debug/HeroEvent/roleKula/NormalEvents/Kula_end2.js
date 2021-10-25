var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_end2 = (function () {
    function Kula_end2() {
    }
    Kula_end2.addSprite18818 = function (mc, own_role) {
        mc.addFrameScript(mc, [80, Kula_end2.frame80]);
        return;
    };
    Kula_end2.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_end2;
}());
__reflect(Kula_end2.prototype, "Kula_end2");
//# sourceMappingURL=Kula_end2.js.map