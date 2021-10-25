var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_hurt3 = (function () {
    function Moriya_hurt3() {
    }
    Moriya_hurt3.addSprite3495 = function (mc, own_role) {
        mc.addFrameScript(mc, [20, Moriya_hurt3.frame20]);
        return;
    };
    Moriya_hurt3.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Moriya_hurt3;
}());
__reflect(Moriya_hurt3.prototype, "Moriya_hurt3");
//# sourceMappingURL=Moriya_hurt3.js.map