var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_end = (function () {
    function Kula_end() {
    }
    Kula_end.addSprite18786 = function (mc, own_role) {
        mc.addFrameScript(mc, [80, Kula_end.frame80]);
        return;
    };
    Kula_end.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_end;
}());
__reflect(Kula_end.prototype, "Kula_end");
//# sourceMappingURL=Kula_end.js.map