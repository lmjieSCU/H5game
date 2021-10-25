var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_hurt1 = (function () {
    function Mai_hurt1() {
    }
    Mai_hurt1.addSprite6524 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Mai_hurt1.frame2, 13, Mai_hurt1.frame13, 14, Mai_hurt1.frame14, 19, Mai_hurt1.frame19, 20, Mai_hurt1.frame20]);
        return;
    };
    Mai_hurt1.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6519 = Mai_a6519.getInstance(_parentRole);
        a6519.soundArray = [];
        a6519.soundArray[0] = "mai_hurt1";
        a6519.soundArray[1] = "mai_hurt2";
        a6519.soundArray[2] = "none";
        a6519.soundArray[3] = "none";
        a6519.startPos = 0;
        a6519.loop = 1;
    };
    Mai_hurt1.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Mai_hurt1.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Mai_hurt1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Mai_hurt1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_hurt1;
}());
__reflect(Mai_hurt1.prototype, "Mai_hurt1");
//# sourceMappingURL=Mai_hurt1.js.map