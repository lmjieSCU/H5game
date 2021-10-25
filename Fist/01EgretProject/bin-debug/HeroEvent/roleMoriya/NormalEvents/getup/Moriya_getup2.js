var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_getup2 = (function () {
    function Moriya_getup2() {
    }
    Moriya_getup2.addSprite3537 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Moriya_getup2.frame4, 6, Moriya_getup2.frame6, 22, Moriya_getup2.frame22, 23, Moriya_getup2.frame23, 35, Moriya_getup2.frame35, 36, Moriya_getup2.frame36]);
        return;
    };
    Moriya_getup2.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3511 = Moriya_a3511.getInstance(_parentRole);
        a3511.Vx = 10;
        a3511.Vy = 18;
        a3511.end_status = "none";
    };
    Moriya_getup2.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Moriya_getup2.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Moriya_getup2.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Moriya_getup2.frame35 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Moriya_getup2.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_getup2;
}());
__reflect(Moriya_getup2.prototype, "Moriya_getup2");
//# sourceMappingURL=Moriya_getup2.js.map