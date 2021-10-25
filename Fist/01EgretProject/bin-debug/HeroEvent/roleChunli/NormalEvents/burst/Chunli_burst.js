var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_burst = (function () {
    function Chunli_burst() {
    }
    Chunli_burst.addSprite14655 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Chunli_burst.frame4, 7, Chunli_burst.frame7]);
        return;
    };
    Chunli_burst.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.powerBurst();
        Chunli_a3555.getInstance(_parentRole).s_type = "s_attack";
    };
    Chunli_burst.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_burst;
}());
__reflect(Chunli_burst.prototype, "Chunli_burst");
//# sourceMappingURL=Chunli_burst.js.map