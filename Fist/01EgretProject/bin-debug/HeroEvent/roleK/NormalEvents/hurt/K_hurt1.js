var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_hurt1 = (function () {
    function K_hurt1() {
    }
    K_hurt1.addSprite5221 = function (mc, own_role) {
        mc.addFrameScript(mc, [13, K_hurt1.frame13, 14, K_hurt1.frame14, 20, K_hurt1.frame20, 21, K_hurt1.frame21]);
        return;
    };
    K_hurt1.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    K_hurt1.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    K_hurt1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    K_hurt1.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_hurt1;
}());
__reflect(K_hurt1.prototype, "K_hurt1");
//# sourceMappingURL=K_hurt1.js.map