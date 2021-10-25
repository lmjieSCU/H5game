var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_roll = (function () {
    function Terry_roll() {
    }
    Terry_roll.addSprite8480 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_roll.frame3_8480, 13, Terry_roll.frame13_8480, 16, Terry_roll.frame16_8480]);
        return;
    };
    Terry_roll.addSprite8482 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_roll.frame3_8482, 12, Terry_roll.frame12_8482, 16, Terry_roll.frame16_8482]);
        return;
    };
    ;
    Terry_roll.frame3_8480 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var _a594 = Terry_a6433.getInstance(_parentRole);
        _a594.Vx = 26;
        _a594.flag = "";
        _a594.target = "";
    };
    Terry_roll.frame13_8480 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Terry_roll.frame16_8480 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Terry_roll.frame3_8482 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var _a594 = Terry_a6433.getInstance(_parentRole);
        _a594.Vx = -26;
        _a594.flag = "";
        _a594.target = "";
    };
    Terry_roll.frame12_8482 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    Terry_roll.frame16_8482 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_roll;
}());
__reflect(Terry_roll.prototype, "Terry_roll");
//# sourceMappingURL=Terry_roll.js.map