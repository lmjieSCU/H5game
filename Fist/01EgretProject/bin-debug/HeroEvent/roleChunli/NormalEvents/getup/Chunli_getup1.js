var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_getup1 = (function () {
    function Chunli_getup1() {
    }
    Chunli_getup1.addSprite14628 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_getup1.frame3, 4, Chunli_getup1.frame4, 18, Chunli_getup1.frame18, 19, Chunli_getup1.frame19, 39, Chunli_getup1.frame39, 40, Chunli_getup1.frame40]);
        return;
    };
    Chunli_getup1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3511 = Chunli_a3511.getInstance(_parentRole);
        a3511.Vx = 8;
        a3511.Vy = 10;
        a3511.end_status = "none";
    };
    Chunli_getup1.frame4 = function (mc) {
        mc.stop();
    };
    Chunli_getup1.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Chunli_getup1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Chunli_getup1.frame39 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Chunli_getup1.frame40 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_getup1;
}());
__reflect(Chunli_getup1.prototype, "Chunli_getup1");
//# sourceMappingURL=Chunli_getup1.js.map