var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_land2 = (function () {
    function Ryu_land2() {
    }
    Ryu_land2.addSprite20381 = function (mc, own_role) {
        mc.addFrameScript(mc, [8, Ryu_land2.frame8]);
        return;
    };
    Ryu_land2.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_land2;
}());
__reflect(Ryu_land2.prototype, "Ryu_land2");
//# sourceMappingURL=Ryu_land2.js.map