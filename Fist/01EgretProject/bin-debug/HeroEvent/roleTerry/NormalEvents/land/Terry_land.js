var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_land = (function () {
    function Terry_land() {
    }
    Terry_land.addSprite8632 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Terry_land.frame1, 4, Terry_land.frame4]);
        return;
    };
    Terry_land.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Terry_land.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_land;
}());
__reflect(Terry_land.prototype, "Terry_land");
//# sourceMappingURL=Terry_land.js.map