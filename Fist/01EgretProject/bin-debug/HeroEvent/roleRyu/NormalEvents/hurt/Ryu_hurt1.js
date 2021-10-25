var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_hurt1 = (function () {
    function Ryu_hurt1() {
    }
    Ryu_hurt1.addSprite20310 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, Ryu_hurt1.frame12, 13, Ryu_hurt1.frame13, 18, Ryu_hurt1.frame18, 19, Ryu_hurt1.frame19,]);
        return;
    };
    Ryu_hurt1.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Ryu_hurt1.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Ryu_hurt1.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Ryu_hurt1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_hurt1;
}());
__reflect(Ryu_hurt1.prototype, "Ryu_hurt1");
//# sourceMappingURL=Ryu_hurt1.js.map