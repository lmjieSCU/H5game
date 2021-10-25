var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_hurt1 = (function () {
    function Kula_hurt1() {
    }
    Kula_hurt1.addSprite19041 = function (mc, own_role) {
        mc.addFrameScript(mc, [13, Kula_hurt1.frame13, 14, Kula_hurt1.frame14, 19, Kula_hurt1.frame19, 20, Kula_hurt1.frame20]);
        return;
    };
    Kula_hurt1.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Kula_hurt1.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Kula_hurt1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Kula_hurt1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_hurt1;
}());
__reflect(Kula_hurt1.prototype, "Kula_hurt1");
//# sourceMappingURL=Kula_hurt1.js.map