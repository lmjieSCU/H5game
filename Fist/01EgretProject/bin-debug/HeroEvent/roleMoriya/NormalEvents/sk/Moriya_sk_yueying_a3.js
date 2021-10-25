var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_yueying_a3 = (function () {
    function Moriya_sk_yueying_a3() {
    }
    Moriya_sk_yueying_a3.addSprite4033 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Moriya_sk_yueying_a3.frame1, 9, Moriya_sk_yueying_a3.frame9, 14, Moriya_sk_yueying_a3.frame14, 15, Moriya_sk_yueying_a3.frame15, 25, Moriya_sk_yueying_a3.frame25, 30, Moriya_sk_yueying_a3.frame30]);
        return;
    };
    Moriya_sk_yueying_a3.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Moriya_a4023.getInstance(_parentRole);
        a4023.Vx = 18;
        a4023.Vy = 30;
        a4023.Va = 0;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "none";
    };
    Moriya_sk_yueying_a3.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 35;
        htcheck.Vy = -30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.6;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "up";
        //_level0.p_snd.start();
    };
    Moriya_sk_yueying_a3.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Moriya_sk_yueying_a3.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 15;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_yueying_a3.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Moriya_sk_yueying_a3.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_yueying_a3;
}());
__reflect(Moriya_sk_yueying_a3.prototype, "Moriya_sk_yueying_a3");
//# sourceMappingURL=Moriya_sk_yueying_a3.js.map