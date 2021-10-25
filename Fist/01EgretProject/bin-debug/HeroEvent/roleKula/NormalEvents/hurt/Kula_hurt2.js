var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_hurt2 = (function () {
    function Kula_hurt2() {
    }
    Kula_hurt2.addSprite19050 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, Kula_hurt2.frame11, 12, Kula_hurt2.frame12, 18, Kula_hurt2.frame18, 19, Kula_hurt2.frame19, 20, Kula_hurt2.frame20, 21, Kula_hurt2.frame21]);
        return;
    };
    Kula_hurt2.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Kula_hurt2.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Kula_hurt2.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Kula_hurt2.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Kula_hurt2.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Kula_hurt2.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.prevFrame();
    };
    return Kula_hurt2;
}());
__reflect(Kula_hurt2.prototype, "Kula_hurt2");
//# sourceMappingURL=Kula_hurt2.js.map