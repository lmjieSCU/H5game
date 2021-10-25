var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_getup2 = (function () {
    function Ryu_getup2() {
    }
    Ryu_getup2.addSprite20377 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_getup2.frame3, 30, Ryu_getup2.frame30, 31, Ryu_getup2.frame31, 36, Ryu_getup2.frame36, 37, Ryu_getup2.frame37,]);
        return;
    };
    Ryu_getup2.frame3 = function (mc) {
        var a20346 = Ryu_a20346.getInstance(EventUtil.getRole_Parent(mc));
        a20346.Vx = 10;
        a20346.Vy = 18;
        a20346.end_status = "none";
    };
    Ryu_getup2.frame30 = function (mc) {
        if (EventUtil.getRole_Parent(mc).isKO) {
            mc.stop();
        }
    };
    Ryu_getup2.frame31 = function (mc) {
        if (EventUtil.getRole_Parent(mc).isKO) {
            mc.prevFrame();
        }
    };
    Ryu_getup2.frame36 = function (mc) {
        EventUtil.getRole_Parent(mc).status_3 = "";
    };
    Ryu_getup2.frame37 = function (mc) {
        EventUtil.getRole_Parent(mc).toStatus_switch("stand");
    };
    return Ryu_getup2;
}());
__reflect(Ryu_getup2.prototype, "Ryu_getup2");
//# sourceMappingURL=Ryu_getup2.js.map