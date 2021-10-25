var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_hurt1 = (function () {
    function Moriya_hurt1() {
    }
    Moriya_hurt1.addSprite3476 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, Moriya_hurt1.frame12, 13, Moriya_hurt1.frame13, 19, Moriya_hurt1.frame19, 20, Moriya_hurt1.frame20]);
        return;
    };
    Moriya_hurt1.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Moriya_hurt1.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_hurt1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Moriya_hurt1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_hurt1;
}());
__reflect(Moriya_hurt1.prototype, "Moriya_hurt1");
//# sourceMappingURL=Moriya_hurt1.js.map