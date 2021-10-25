var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_getup1 = (function () {
    function Kula_getup1() {
    }
    Kula_getup1.addSprite19095 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_getup1.frame3, 4, Kula_getup1.frame4, 19, Kula_getup1.frame19, 20, Kula_getup1.frame20, 28, Kula_getup1.frame28, 29, Kula_getup1.frame29]);
        return;
    };
    Kula_getup1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19082 = Kula_a19082.getInstance(_parentRole);
        a19082.Vx = 8;
        a19082.Vy = 10;
        a19082.end_status = "none";
    };
    Kula_getup1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Kula_getup1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Kula_getup1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Kula_getup1.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Kula_getup1.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_getup1;
}());
__reflect(Kula_getup1.prototype, "Kula_getup1");
//# sourceMappingURL=Kula_getup1.js.map