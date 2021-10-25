var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_hurt2 = (function () {
    function Ryu_hurt2() {
    }
    Ryu_hurt2.addSprite20319 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, Ryu_hurt2.frame11, 12, Ryu_hurt2.frame12, 17, Ryu_hurt2.frame17, 18, Ryu_hurt2.frame18,]);
        return;
    };
    Ryu_hurt2.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Ryu_hurt2.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Ryu_hurt2.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Ryu_hurt2.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_hurt2;
}());
__reflect(Ryu_hurt2.prototype, "Ryu_hurt2");
//# sourceMappingURL=Ryu_hurt2.js.map