var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_dash = (function () {
    function K_dash() {
    }
    K_dash.addSprite5146 = function (mc, _parentRole) {
        mc.addFrameScript(mc, [3, K_dash.frame3, 14, K_dash.frame14]);
        return;
    };
    K_dash.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
    };
    K_dash.frame14 = function (mc) {
        mc.stop();
    };
    return K_dash;
}());
__reflect(K_dash.prototype, "K_dash");
//# sourceMappingURL=K_dash.js.map