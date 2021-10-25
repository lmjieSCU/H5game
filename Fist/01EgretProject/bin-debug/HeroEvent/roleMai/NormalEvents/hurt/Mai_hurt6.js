var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_hurt6 = (function () {
    function Mai_hurt6() {
    }
    Mai_hurt6.addSprite6552 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, Mai_hurt6.frame12]);
        return;
    };
    Mai_hurt6.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Mai_hurt6;
}());
__reflect(Mai_hurt6.prototype, "Mai_hurt6");
//# sourceMappingURL=Mai_hurt6.js.map