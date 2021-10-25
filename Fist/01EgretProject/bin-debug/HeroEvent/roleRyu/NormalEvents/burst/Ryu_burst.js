var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_burst = (function () {
    function Ryu_burst() {
    }
    Ryu_burst.addSprite20394 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_burst.frame3, 5, Ryu_burst.frame5]);
        return;
    };
    Ryu_burst.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20393.getInstance(_parentRole).s_type = "s_attack";
        _parentRole.powerBurst();
    };
    Ryu_burst.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_burst;
}());
__reflect(Ryu_burst.prototype, "Ryu_burst");
//# sourceMappingURL=Ryu_burst.js.map