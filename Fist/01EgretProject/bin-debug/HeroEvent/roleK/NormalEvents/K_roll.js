var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_roll = (function () {
    function K_roll() {
    }
    K_roll.addSprite5154 = function (mc, _parentRole) {
        mc.addFrameScript(mc, [3, K_roll.frame3_5154, 14, K_roll.frame14_5154, 18, K_roll.frame18_5154]);
        return;
    };
    K_roll.addSprite5159 = function (mc, _parentRole) {
        mc.addFrameScript(mc, [3, K_roll.frame3_5159, 12, K_roll.frame12_5159, 16, K_roll.frame16_5159]);
        return;
    };
    ;
    K_roll.frame3_5154 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var _a594 = K_a594.getInstance(_parentRole);
        _a594.Vx = 21;
        _a594.flag = "";
        _a594.target = "";
    };
    K_roll.frame14_5154 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    K_roll.frame18_5154 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        _parentRole.toStatus_switch("stand");
    };
    K_roll.frame3_5159 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var _a594 = K_a594.getInstance(_parentRole);
        _a594.Vx = -21;
        _a594.flag = "";
        _a594.target = "";
    };
    K_roll.frame12_5159 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    };
    K_roll.frame16_5159 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        _parentRole.toStatus_switch("stand");
    };
    return K_roll;
}());
__reflect(K_roll.prototype, "K_roll");
//# sourceMappingURL=K_roll.js.map