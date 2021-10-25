var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_dash_b = (function () {
    function Mai_dash_b() {
    }
    Mai_dash_b.addSprite6426 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_dash_b.frame3, 7, Mai_dash_b.frame7]);
        return;
    };
    Mai_dash_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
    };
    Mai_dash_b.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Mai_dash_b;
}());
__reflect(Mai_dash_b.prototype, "Mai_dash_b");
//# sourceMappingURL=Mai_dash_b.js.map