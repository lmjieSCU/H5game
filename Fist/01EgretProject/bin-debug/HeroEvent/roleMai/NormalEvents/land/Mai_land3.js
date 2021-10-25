var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_land3 = (function () {
    function Mai_land3() {
    }
    Mai_land3.addSprite6587 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_land3.frame1, 12, Mai_land3.frame12]);
        return;
    };
    Mai_land3.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Mai_land3.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_land3;
}());
__reflect(Mai_land3.prototype, "Mai_land3");
//# sourceMappingURL=Mai_land3.js.map