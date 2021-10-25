var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk_bodong_air2 = (function () {
    function Ryu_sk_bodong_air2() {
    }
    Ryu_sk_bodong_air2.addSprite20715 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_sk_bodong_air2.frame1, 3, Ryu_sk_bodong_air2.frame3, 25, Ryu_sk_bodong_air2.frame25]);
        return;
    };
    Ryu_sk_bodong_air2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -5;
        a20238.Vy = 18;
        a20238.Va = 0;
        a20238.Vg = 3.5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_sk_bodong_air2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "wave_air3";
    };
    Ryu_sk_bodong_air2.frame25 = function (mc) {
        mc.stop();
    };
    return Ryu_sk_bodong_air2;
}());
__reflect(Ryu_sk_bodong_air2.prototype, "Ryu_sk_bodong_air2");
//# sourceMappingURL=Ryu_sk_bodong_air2.js.map