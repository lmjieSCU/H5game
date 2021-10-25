var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_getup2 = (function () {
    function K_getup2() {
    }
    K_getup2.addSprite5295 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, K_getup2.frame2, 27, K_getup2.frame27, 28, K_getup2.frame28, 36, K_getup2.frame36, 37, K_getup2.frame37]);
        return;
    };
    K_getup2.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a687 = K_a687.getInstance(_parentRole);
        a687.Vx = 10;
        a687.Vy = 18;
        a687.end_status = "none";
    };
    K_getup2.frame27 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    K_getup2.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    K_getup2.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    K_getup2.frame37 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_getup2;
}());
__reflect(K_getup2.prototype, "K_getup2");
//# sourceMappingURL=K_getup2.js.map