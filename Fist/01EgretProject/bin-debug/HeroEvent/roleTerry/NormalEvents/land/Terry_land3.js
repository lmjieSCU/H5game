var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_land3 = (function () {
    function Terry_land3() {
    }
    Terry_land3.addSprite8634 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Terry_land.frame1, 12, Terry_land3.frame12]);
        return;
    };
    Terry_land3.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Terry_land3.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_land3;
}());
__reflect(Terry_land3.prototype, "Terry_land3");
//# sourceMappingURL=Terry_land3.js.map