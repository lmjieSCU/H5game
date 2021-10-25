var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_getup2 = (function () {
    function Terry_getup2() {
    }
    Terry_getup2.addSprite8631 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Terry_getup2.frame5, 9, Terry_getup2.frame9, 22, Terry_getup2.frame22, 23, Terry_getup2.frame23, 35, Terry_getup2.frame35, 36, Terry_getup2.frame36]);
        return;
    };
    Terry_getup2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6557 = Terry_a6557.getInstance(_parentRole);
        a6557.Vx = 10;
        a6557.Vy = 18;
        a6557.end_status = "none";
    };
    Terry_getup2.frame9 = function (mc) {
        //Terry_getup2.mc.stop();
    };
    Terry_getup2.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop;
        }
    };
    Terry_getup2.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Terry_getup2.frame35 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Terry_getup2.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_getup2;
}());
__reflect(Terry_getup2.prototype, "Terry_getup2");
//# sourceMappingURL=Terry_getup2.js.map