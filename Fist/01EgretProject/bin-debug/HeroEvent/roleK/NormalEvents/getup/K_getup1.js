var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_getup1 = (function () {
    function K_getup1() {
    }
    K_getup1.addSprite5279 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, K_getup1.frame3, 4, K_getup1.frame4, 18, K_getup1.frame18, 19, K_getup1.frame19, 32, K_getup1.frame32, 33, K_getup1.frame33,]);
        return;
    };
    K_getup1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a687 = K_a687.getInstance(_parentRole);
        a687.Vx = 8;
        a687.Vy = 10;
        a687.end_status = "none";
    };
    K_getup1.frame4 = function () {
        // this.mc.stop();
    };
    K_getup1.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    };
    K_getup1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    };
    K_getup1.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    K_getup1.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_getup1;
}());
__reflect(K_getup1.prototype, "K_getup1");
//# sourceMappingURL=K_getup1.js.map