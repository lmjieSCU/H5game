var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_hurt4 = (function () {
    function Mai_hurt4() {
    }
    Mai_hurt4.addSprite6550 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Mai_hurt4.frame2, 12, Mai_hurt4.frame12]);
        return;
    };
    Mai_hurt4.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6541 = Mai_a6541.getInstance(_parentRole);
        a6541.soundArray = [];
        a6541.soundArray[0] = "mai_hurt3";
        a6541.soundArray[1] = "mai_hurt4";
        a6541.startPos = 0;
        a6541.loop = 1;
    };
    Mai_hurt4.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("s2");
    };
    return Mai_hurt4;
}());
__reflect(Mai_hurt4.prototype, "Mai_hurt4");
//# sourceMappingURL=Mai_hurt4.js.map