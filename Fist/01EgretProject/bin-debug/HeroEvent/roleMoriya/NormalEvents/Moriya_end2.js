var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_end2 = (function () {
    function Moriya_end2() {
    }
    Moriya_end2.addSprite3315 = function (mc, own_role) {
        mc.addFrameScript(mc, [80, Moriya_end2.frame80]);
        return;
    };
    Moriya_end2.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Moriya_end2;
}());
__reflect(Moriya_end2.prototype, "Moriya_end2");
//# sourceMappingURL=Moriya_end2.js.map