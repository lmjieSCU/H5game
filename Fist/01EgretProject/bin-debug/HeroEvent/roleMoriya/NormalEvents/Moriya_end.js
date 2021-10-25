var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_end = (function () {
    function Moriya_end() {
    }
    Moriya_end.addSprite3286 = function (mc, own_role) {
        mc.addFrameScript(mc, [80, Moriya_end.frame80]);
        return;
    };
    Moriya_end.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Moriya_end;
}());
__reflect(Moriya_end.prototype, "Moriya_end");
//# sourceMappingURL=Moriya_end.js.map