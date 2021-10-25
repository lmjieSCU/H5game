var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_getup1 = (function () {
    function Ryu_getup1() {
    }
    Ryu_getup1.addSprite20361 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_getup1.frame3, 4, Ryu_getup1.frame4, 18, Ryu_getup1.frame18, 19, Ryu_getup1.frame19, 24, Ryu_getup1.frame24, 30, Ryu_getup1.frame30, 33, Ryu_getup1.frame33,]);
        return;
    };
    Ryu_getup1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20346 = Ryu_a20346.getInstance(_parentRole);
        a20346.Vx = 8;
        a20346.Vy = 10;
        a20346.end_status = "none";
    };
    Ryu_getup1.frame4 = function (mc) {
        //mc.stop();
    };
    Ryu_getup1.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Ryu_getup1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Ryu_getup1.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 1;
        a20238.Vy = 18;
        a20238.Va = 3;
        a20238.Vg = 5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "none";
    };
    Ryu_getup1.frame30 = function () {
        // this.mc.stop();
    };
    Ryu_getup1.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_getup1;
}());
__reflect(Ryu_getup1.prototype, "Ryu_getup1");
//# sourceMappingURL=Ryu_getup1.js.map