var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk1_l = (function () {
    function Ryu_sk1_l() {
    }
    Ryu_sk1_l.addSprite20667 = function (mc, own_role) {
        mc.addFrameScript(mc, [8, Ryu_sk1_l.frame8, 28, Ryu_sk1_l.frame28]);
        return;
    };
    Ryu_sk1_l.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "wave_l";
    };
    Ryu_sk1_l.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_sk1_l;
}());
__reflect(Ryu_sk1_l.prototype, "Ryu_sk1_l");
//# sourceMappingURL=Ryu_sk1_l.js.map