var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_land2 = (function () {
    function Mai_land2() {
    }
    Mai_land2.addSprite6586 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_land2.frame1, 7, Mai_land2.frame7]);
        return;
    };
    Mai_land2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Mai_land2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_land2;
}());
__reflect(Mai_land2.prototype, "Mai_land2");
//# sourceMappingURL=Mai_land2.js.map