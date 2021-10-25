var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_begin = (function () {
    function Moriya_begin() {
    }
    Moriya_begin.addSprite3231 = function (mc, own_role) {
        mc.addFrameScript(mc, [104, Moriya_begin.frame104]);
        return;
    };
    Moriya_begin.frame104 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
    };
    return Moriya_begin;
}());
__reflect(Moriya_begin.prototype, "Moriya_begin");
//# sourceMappingURL=Moriya_begin.js.map