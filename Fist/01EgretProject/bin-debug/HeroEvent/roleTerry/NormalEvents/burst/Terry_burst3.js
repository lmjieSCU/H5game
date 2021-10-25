var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_burst3 = (function () {
    function Terry_burst3() {
    }
    Terry_burst3.addSprite8661 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Terry_burst3.frame4, 7, Terry_burst3.frame7]);
        return;
    };
    Terry_burst3.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6594.getInstance(_parentRole).s_type = "s_power";
        _parentRole.powerBurst();
    };
    Terry_burst3.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_burst3;
}());
__reflect(Terry_burst3.prototype, "Terry_burst3");
//# sourceMappingURL=Terry_burst3.js.map