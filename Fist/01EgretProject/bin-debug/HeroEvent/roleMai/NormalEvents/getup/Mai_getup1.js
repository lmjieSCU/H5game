var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_getup1 = (function () {
    function Mai_getup1() {
    }
    Mai_getup1.addSprite6568 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_getup1.frame3, 4, Mai_getup1.frame4, 19, Mai_getup1.frame19, 20, Mai_getup1.frame20, 32, Mai_getup1.frame32, 33, Mai_getup1.frame33]);
        return;
    };
    Mai_getup1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6557 = Mai_a6557.getInstance(_parentRole);
        a6557.Vx = 8;
        a6557.Vy = 10;
        a6557.end_status = "none";
    };
    Mai_getup1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Mai_getup1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Mai_getup1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Mai_getup1.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Mai_getup1.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_getup1;
}());
__reflect(Mai_getup1.prototype, "Mai_getup1");
//# sourceMappingURL=Mai_getup1.js.map