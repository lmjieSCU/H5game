var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_land3 = (function () {
    function K_land3() {
    }
    K_land3.addSprite5308 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, K_land3.frame12]);
        return;
    };
    K_land3.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_land3;
}());
__reflect(K_land3.prototype, "K_land3");
//# sourceMappingURL=K_land3.js.map