var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_dash_b = (function () {
    function Moriya_dash_b() {
    }
    Moriya_dash_b.addSprite3390 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_dash_b.frame3, 7, Moriya_dash_b.frame7]);
        return;
    };
    Moriya_dash_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
    };
    Moriya_dash_b.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Moriya_dash_b;
}());
__reflect(Moriya_dash_b.prototype, "Moriya_dash_b");
//# sourceMappingURL=Moriya_dash_b.js.map