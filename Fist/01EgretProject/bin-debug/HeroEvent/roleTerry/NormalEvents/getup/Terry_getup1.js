var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_getup1 = (function () {
    function Terry_getup1() {
    }
    Terry_getup1.addSprite8612 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_getup1.frame3, 4, Terry_getup1.frame4, 18, Terry_getup1.frame18, 19, Terry_getup1.frame19, 33, Terry_getup1.frame33, 34, Terry_getup1.frame34]);
        return;
    };
    Terry_getup1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6557 = Terry_a6557.getInstance(_parentRole);
        a6557.Vx = 8;
        a6557.Vy = 10;
        a6557.end_status = "none";
    };
    Terry_getup1.frame4 = function (mc) {
        //Terry_getup1.mc.stop();
    };
    Terry_getup1.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop;
        }
    };
    Terry_getup1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    Terry_getup1.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Terry_getup1.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_getup1;
}());
__reflect(Terry_getup1.prototype, "Terry_getup1");
//# sourceMappingURL=Terry_getup1.js.map