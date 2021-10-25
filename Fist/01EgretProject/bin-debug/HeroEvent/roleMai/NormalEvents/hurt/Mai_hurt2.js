var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_hurt2 = (function () {
    function Mai_hurt2() {
    }
    Mai_hurt2.addSprite6531 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Mai_hurt2.frame2, 13, Mai_hurt2.frame13, 14, Mai_hurt2.frame14, 20, Mai_hurt2.frame20, 21, Mai_hurt2.frame21, 22, Mai_hurt2.frame22, 23, Mai_hurt2.frame23]);
        return;
    };
    Mai_hurt2.frame2 = function (mc) {
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
    Mai_hurt2.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Mai_hurt2.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Mai_hurt2.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Mai_hurt2.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Mai_hurt2.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Mai_hurt2.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.mc.prevFrame();
    };
    return Mai_hurt2;
}());
__reflect(Mai_hurt2.prototype, "Mai_hurt2");
//# sourceMappingURL=Mai_hurt2.js.map