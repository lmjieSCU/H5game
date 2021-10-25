var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_begin2 = (function () {
    function Moriya_begin2() {
    }
    Moriya_begin2.addSprite3250 = function (mc, own_role) {
        mc.addFrameScript(mc, [86, Moriya_begin2.frame86]);
        return;
    };
    Moriya_begin2.frame86 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
    };
    return Moriya_begin2;
}());
__reflect(Moriya_begin2.prototype, "Moriya_begin2");
//# sourceMappingURL=Moriya_begin2.js.map