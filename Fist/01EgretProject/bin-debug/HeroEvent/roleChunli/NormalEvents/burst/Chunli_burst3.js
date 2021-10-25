var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_burst3 = (function () {
    function Chunli_burst3() {
    }
    Chunli_burst3.addSprite14657 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Chunli_burst3.frame4, 7, Chunli_burst3.frame7]);
        return;
    };
    Chunli_burst3.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3555.getInstance(_parentRole).s_type = "s_power";
        _parentRole.powerBurst();
    };
    Chunli_burst3.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_burst3;
}());
__reflect(Chunli_burst3.prototype, "Chunli_burst3");
//# sourceMappingURL=Chunli_burst3.js.map