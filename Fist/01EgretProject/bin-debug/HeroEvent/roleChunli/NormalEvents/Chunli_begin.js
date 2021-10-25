var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_begin = (function () {
    function Chunli_begin() {
    }
    Chunli_begin.addSprite14081 = function (mc, own_role) {
        mc.addFrameScript(mc, [65, Chunli_begin.frame65]);
        return;
    };
    Chunli_begin.frame65 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
    };
    return Chunli_begin;
}());
__reflect(Chunli_begin.prototype, "Chunli_begin");
//# sourceMappingURL=Chunli_begin.js.map