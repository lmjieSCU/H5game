var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_dash_b = (function () {
    function Kula_dash_b() {
    }
    Kula_dash_b.addSprite18955 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_dash_b.frame3, 7, Kula_dash_b.frame7]);
        return;
    };
    Kula_dash_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
    };
    Kula_dash_b.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_dash_b;
}());
__reflect(Kula_dash_b.prototype, "Kula_dash_b");
//# sourceMappingURL=Kula_dash_b.js.map