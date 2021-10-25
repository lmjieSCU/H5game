var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_hurt2 = (function () {
    function Moriya_hurt2() {
    }
    Moriya_hurt2.addSprite3485 = function (mc, own_role) {
        mc.addFrameScript(mc, [13, Moriya_hurt2.frame13, 14, Moriya_hurt2.frame14, 19, Moriya_hurt2.frame19, 20, Moriya_hurt2.frame20, 21, Moriya_hurt2.frame21, 22, Moriya_hurt2.frame22]);
        return;
    };
    Moriya_hurt2.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Moriya_hurt2.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_hurt2.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Moriya_hurt2.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_hurt2.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Moriya_hurt2.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.prevFrame();
    };
    return Moriya_hurt2;
}());
__reflect(Moriya_hurt2.prototype, "Moriya_hurt2");
//# sourceMappingURL=Moriya_hurt2.js.map