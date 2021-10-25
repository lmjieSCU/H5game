var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_fdfp_l = (function () {
    function Kula_sk_fdfp_l() {
    }
    Kula_sk_fdfp_l.addSprite19477 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_sk_fdfp_l.frame1, 3, Kula_sk_fdfp_l.frame3, 4, Kula_sk_fdfp_l.frame4, 5, Kula_sk_fdfp_l.frame5, 26, Kula_sk_fdfp_l.frame26]);
        return;
    };
    Kula_sk_fdfp_l.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Kula_sk_fdfp_l.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_wuyayao";
    };
    Kula_sk_fdfp_l.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 37;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 15;
        a19418.Vy = 27;
        a19418.Va = 0;
        a19418.Vg = 4;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    };
    Kula_sk_fdfp_l.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Kula_sk_fdfp_l.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_sk_fdfp_l;
}());
__reflect(Kula_sk_fdfp_l.prototype, "Kula_sk_fdfp_l");
//# sourceMappingURL=Kula_sk_fdfp_l.js.map