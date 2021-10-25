var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_getup2 = (function () {
    function Chunli_getup2() {
    }
    Chunli_getup2.addSprite14631 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Chunli_getup2.frame5, 9, Chunli_getup2.frame9, 22, Chunli_getup2.frame22, 23, Chunli_getup2.frame23, 40, Chunli_getup2.frame40, 41, Chunli_getup2.frame41]);
        return;
    };
    Chunli_getup2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3511 = Chunli_a3511.getInstance(_parentRole);
        a3511.Vx = 10;
        a3511.Vy = 18;
        a3511.end_status = "none";
    };
    Chunli_getup2.frame9 = function (mc) {
        mc.stop();
    };
    Chunli_getup2.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    Chunli_getup2.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Chunli_getup2.frame40 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Chunli_getup2.frame41 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_getup2;
}());
__reflect(Chunli_getup2.prototype, "Chunli_getup2");
//# sourceMappingURL=Chunli_getup2.js.map