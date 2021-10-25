var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_burst3 = (function () {
    function Moriya_burst3() {
    }
    Moriya_burst3.addSprite3560 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_burst3.frame3, 6, Moriya_burst3.frame6]);
        return;
    };
    Moriya_burst3.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3555 = Moriya_a3555.getInstance(_parentRole);
        a3555.s_type = "s_power";
        _parentRole.powerBurst();
    };
    Moriya_burst3.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_burst3;
}());
__reflect(Moriya_burst3.prototype, "Moriya_burst3");
//# sourceMappingURL=Moriya_burst3.js.map