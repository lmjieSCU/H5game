var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk_bodong_air2other = (function () {
    function Ryu_sk_bodong_air2other() {
    }
    Ryu_sk_bodong_air2other.addSprite20716 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_sk_bodong_air2other.frame3, 25, Ryu_sk_bodong_air2other.frame25]);
        return;
    };
    Ryu_sk_bodong_air2other.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "wave_air";
    };
    Ryu_sk_bodong_air2other.frame25 = function (mc) {
        mc.stop();
    };
    return Ryu_sk_bodong_air2other;
}());
__reflect(Ryu_sk_bodong_air2other.prototype, "Ryu_sk_bodong_air2other");
//# sourceMappingURL=Ryu_sk_bodong_air2other .js.map