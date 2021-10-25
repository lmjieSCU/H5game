var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_dash_b = (function () {
    function Ryu_dash_b() {
    }
    Ryu_dash_b.addSprite20233 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_dash_b.frame3, 5, Ryu_dash_b.frame5]);
        return;
    };
    Ryu_dash_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
    };
    Ryu_dash_b.frame5 = function (mc) {
        mc.stop();
    };
    return Ryu_dash_b;
}());
__reflect(Ryu_dash_b.prototype, "Ryu_dash_b");
//# sourceMappingURL=Ryu_dash_b.js.map