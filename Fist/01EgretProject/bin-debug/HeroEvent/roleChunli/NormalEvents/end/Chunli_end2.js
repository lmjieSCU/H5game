var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_end2 = (function () {
    function Chunli_end2() {
    }
    Chunli_end2.addSprite14184 = function (mc, own_role) {
        mc.addFrameScript(mc, [80, Chunli_end2.frame80]);
        return;
    };
    Chunli_end2.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Chunli_end2;
}());
__reflect(Chunli_end2.prototype, "Chunli_end2");
//# sourceMappingURL=Chunli_end2.js.map