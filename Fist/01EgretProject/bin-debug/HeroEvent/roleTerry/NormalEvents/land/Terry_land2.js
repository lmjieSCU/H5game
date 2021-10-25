var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_land2 = (function () {
    function Terry_land2() {
    }
    Terry_land2.addSprite8633 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Terry_land.frame1, 4, Terry_land2.frame7]);
        return;
    };
    Terry_land2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Terry_land2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_land2;
}());
__reflect(Terry_land2.prototype, "Terry_land2");
//# sourceMappingURL=Terry_land2.js.map