var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_land = (function () {
    function Mai_land() {
    }
    Mai_land.addSprite6584 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_land.frame1, 4, Mai_land.frame4]);
        return;
    };
    Mai_land.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Mai_land.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_land;
}());
__reflect(Mai_land.prototype, "Mai_land");
//# sourceMappingURL=Mai_land.js.map