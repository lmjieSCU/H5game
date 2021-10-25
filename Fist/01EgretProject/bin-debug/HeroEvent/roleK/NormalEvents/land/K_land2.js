var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_land2 = (function () {
    function K_land2() {
    }
    K_land2.addSprite5301 = function (mc, own_role) {
        mc.addFrameScript(mc, [6, K_land2.frame6]);
        return;
    };
    K_land2.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_land2;
}());
__reflect(K_land2.prototype, "K_land2");
//# sourceMappingURL=K_land2.js.map