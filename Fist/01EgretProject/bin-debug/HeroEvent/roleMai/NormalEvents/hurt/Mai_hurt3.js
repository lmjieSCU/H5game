var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_hurt3 = (function () {
    function Mai_hurt3() {
    }
    Mai_hurt3.addSprite6540 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_hurt3.frame1, 20, Mai_hurt3.frame20]);
        return;
    };
    Mai_hurt3.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6519 = Mai_a6519.getInstance(_parentRole);
        a6519.soundArray = [];
        a6519.soundArray[0] = "mai_hurt3";
        a6519.soundArray[1] = "mai_hurt4";
        a6519.soundArray[2] = "none";
        a6519.startPos = 0;
        a6519.loop = 1;
    };
    Mai_hurt3.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Mai_hurt3;
}());
__reflect(Mai_hurt3.prototype, "Mai_hurt3");
//# sourceMappingURL=Mai_hurt3.js.map