var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_getup2 = (function () {
    function Mai_getup2() {
    }
    Mai_getup2.addSprite6583 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Mai_getup2.frame5, 9, Mai_getup2.frame9, 24, Mai_getup2.frame24, 25, Mai_getup2.frame25, 32, Mai_getup2.frame32, 33, Mai_getup2.frame33]);
        return;
    };
    Mai_getup2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6557 = Mai_a6557.getInstance(_parentRole);
        a6557.Vx = 10;
        a6557.Vy = 18;
        a6557.end_status = "none";
    };
    Mai_getup2.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Mai_getup2.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Mai_getup2.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Mai_getup2.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Mai_getup2.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_getup2;
}());
__reflect(Mai_getup2.prototype, "Mai_getup2");
//# sourceMappingURL=Mai_getup2.js.map