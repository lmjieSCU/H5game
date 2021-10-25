var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_getup1 = (function () {
    function Moriya_getup1() {
    }
    Moriya_getup1.addSprite3522 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_getup1.frame3, 4, Moriya_getup1.frame4, 23, Moriya_getup1.frame23, 24, Moriya_getup1.frame24, 32, Moriya_getup1.frame32, 33, Moriya_getup1.frame33]);
        return;
    };
    Moriya_getup1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3511 = Moriya_a3511.getInstance(_parentRole);
        a3511.Vx = 8;
        a3511.Vy = 10;
        a3511.end_status = "none";
    };
    Moriya_getup1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Moriya_getup1.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Moriya_getup1.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Moriya_getup1.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Moriya_getup1.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_getup1;
}());
__reflect(Moriya_getup1.prototype, "Moriya_getup1");
//# sourceMappingURL=Moriya_getup1.js.map