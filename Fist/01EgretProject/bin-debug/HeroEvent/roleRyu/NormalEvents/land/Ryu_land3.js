var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_land3 = (function () {
    function Ryu_land3() {
    }
    Ryu_land3.addSprite20382 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, Ryu_land3.frame12]);
        return;
    };
    Ryu_land3.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_land3;
}());
__reflect(Ryu_land3.prototype, "Ryu_land3");
//# sourceMappingURL=Ryu_land3.js.map