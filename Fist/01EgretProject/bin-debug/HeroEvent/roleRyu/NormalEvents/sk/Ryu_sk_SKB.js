var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk_SKB = (function () {
    function Ryu_sk_SKB() {
    }
    Ryu_sk_SKB.addSprite20996 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_sk_SKB.frame1, 10, Ryu_sk_SKB.frame10, 25, Ryu_sk_SKB.frame25, 26, Ryu_sk_SKB.frame26]);
        return;
    };
    Ryu_sk_SKB.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20994 = Ryu_a20994.getInstance(_parentRole);
        a20994.shadow_name = "Ryu_asuraSKshadow";
        a20994.start_alpha = 70;
        a20994.end_alpha = 10;
        a20994.d_alpha = 5;
        a20994.add_interval = 3;
        a20994._rb = 15;
        a20994._gb = 20;
        a20994._bb = 190;
        _parentRole.checkTouch_stop = true;
    };
    Ryu_sk_SKB.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20994 = Ryu_a20994.getInstance(_parentRole);
        a20994.shadow_name = "Ryu_asuraSKshadow2";
        a20994.start_alpha = 70;
        a20994.end_alpha = 10;
        a20994.d_alpha = 5;
        a20994.add_interval = 3;
        a20994._rb = 15;
        a20994._gb = 20;
        a20994._bb = 190;
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = -40;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk_SKB.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
    };
    Ryu_sk_SKB.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -50;
        a20238.Vy = 0;
        a20238.Va = 4;
        a20238.Vg = 0;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "none";
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_sk_SKB;
}());
__reflect(Ryu_sk_SKB.prototype, "Ryu_sk_SKB");
//# sourceMappingURL=Ryu_sk_SKB.js.map