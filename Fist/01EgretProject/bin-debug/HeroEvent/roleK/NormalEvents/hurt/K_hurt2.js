var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_hurt2 = (function () {
    function K_hurt2() {
    }
    K_hurt2.addSprite5230 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, K_hurt2.frame11, 12, K_hurt2.frame12, 18, K_hurt2.frame18, 19, K_hurt2.frame19, 20, K_hurt2.frame20, 21, K_hurt2.frame21]);
        return;
    };
    K_hurt2.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.visible = true;
        _parentRole.status_3 = "";
    };
    K_hurt2.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    K_hurt2.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    K_hurt2.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    K_hurt2.frame20 = function (mc) {
        mc.stop();
    };
    K_hurt2.frame21 = function (mc) {
        mc.prevFrame();
    };
    return K_hurt2;
}());
__reflect(K_hurt2.prototype, "K_hurt2");
//# sourceMappingURL=K_hurt2.js.map