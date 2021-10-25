var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_dash = (function () {
    function Terry_dash() {
    }
    Terry_dash.addSprite8462 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_dash.frame3, 7, Terry_dash.frame7]);
        return;
    };
    Terry_dash.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
    };
    Terry_dash.frame7 = function (mc) {
        mc.stop();
    };
    return Terry_dash;
}());
__reflect(Terry_dash.prototype, "Terry_dash");
//# sourceMappingURL=Terry_dash.js.map