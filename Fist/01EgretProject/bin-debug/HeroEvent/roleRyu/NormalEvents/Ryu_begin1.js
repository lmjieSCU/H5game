var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_begin = (function () {
    function Ryu_begin() {
    }
    Ryu_begin.addSprite20110 = function (mc, own_role) {
        mc.addFrameScript(mc, [93, Ryu_begin.frame93]);
        mc["own_role"] = own_role;
        return;
    };
    Ryu_begin.frame93 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
        // _parentRole.toStatus_switch("stand");
    };
    return Ryu_begin;
}());
__reflect(Ryu_begin.prototype, "Ryu_begin");
//# sourceMappingURL=Ryu_begin1.js.map