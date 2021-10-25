var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_land = (function () {
    function K_land() {
    }
    K_land.addSprite5296 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_land.frame1, 3, K_land.frame3]);
        return;
    };
    K_land.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    K_land.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_land;
}());
__reflect(K_land.prototype, "K_land");
//# sourceMappingURL=K_land.js.map