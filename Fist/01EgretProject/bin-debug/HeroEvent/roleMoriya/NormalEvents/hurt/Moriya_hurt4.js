var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_hurt4 = (function () {
    function Moriya_hurt4() {
    }
    Moriya_hurt4.addSprite3504 = function (mc, own_role) {
        mc.addFrameScript(mc, [20, Moriya_hurt4.frame20]);
        return;
    };
    Moriya_hurt4.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("s2");
    };
    return Moriya_hurt4;
}());
__reflect(Moriya_hurt4.prototype, "Moriya_hurt4");
//# sourceMappingURL=Moriya_hurt4.js.map