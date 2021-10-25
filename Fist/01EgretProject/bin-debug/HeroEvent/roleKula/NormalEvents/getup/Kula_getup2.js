var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_getup2 = (function () {
    function Kula_getup2() {
    }
    Kula_getup2.addSprite19106 = function (mc, own_role) {
        mc.addFrameScript(mc, [6, Kula_getup2.frame6, 9, Kula_getup2.frame9, 26, Kula_getup2.frame26, 27, Kula_getup2.frame27, 38, Kula_getup2.frame38, 39, Kula_getup2.frame39]);
        return;
    };
    Kula_getup2.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19082 = Kula_a19082.getInstance(_parentRole);
        a19082.Vx = 10;
        a19082.Vy = 18;
        a19082.end_status = "none";
    };
    Kula_getup2.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Kula_getup2.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Kula_getup2.frame27 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Kula_getup2.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Kula_getup2.frame39 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_getup2;
}());
__reflect(Kula_getup2.prototype, "Kula_getup2");
//# sourceMappingURL=Kula_getup2.js.map