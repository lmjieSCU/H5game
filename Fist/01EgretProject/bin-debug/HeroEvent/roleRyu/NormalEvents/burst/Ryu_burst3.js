var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_burst3 = (function () {
    function Ryu_burst3() {
    }
    Ryu_burst3.addSprite20396 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_burst3.frame3, 5, Ryu_burst3.frame5]);
        return;
    };
    Ryu_burst3.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20393.getInstance(_parentRole).s_type = "s_power";
        _parentRole.powerBurst();
    };
    Ryu_burst3.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_burst3;
}());
__reflect(Ryu_burst3.prototype, "Ryu_burst3");
//# sourceMappingURL=Ryu_burst3.js.map