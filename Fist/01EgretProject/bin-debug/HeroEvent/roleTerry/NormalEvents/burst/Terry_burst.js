var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_burst = (function () {
    function Terry_burst() {
    }
    Terry_burst.addSprite8649 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Terry_burst.frame4, 7, Terry_burst.frame7]);
        return;
    };
    Terry_burst.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.powerBurst();
        Terry_a6594.getInstance(_parentRole).s_type = "s_attack";
    };
    Terry_burst.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_burst;
}());
__reflect(Terry_burst.prototype, "Terry_burst");
//# sourceMappingURL=Terry_burst.js.map