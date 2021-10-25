var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_end = (function () {
    function Chunli_end() {
    }
    Chunli_end.addSprite14142 = function (mc, own_role) {
        mc.addFrameScript(mc, [80, Chunli_end.frame80]);
        return;
    };
    Chunli_end.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Chunli_end;
}());
__reflect(Chunli_end.prototype, "Chunli_end");
//# sourceMappingURL=Chunli_end.js.map