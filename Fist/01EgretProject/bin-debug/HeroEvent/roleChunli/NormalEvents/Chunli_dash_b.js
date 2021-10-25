var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_dash_b = (function () {
    function Chunli_dash_b() {
    }
    Chunli_dash_b.addSprite14331 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_dash_b.frame3, 17, Chunli_dash_b.frame17]);
        return;
    };
    Chunli_dash_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
    };
    Chunli_dash_b.frame17 = function (mc) {
        mc.stop();
    };
    return Chunli_dash_b;
}());
__reflect(Chunli_dash_b.prototype, "Chunli_dash_b");
//# sourceMappingURL=Chunli_dash_b.js.map