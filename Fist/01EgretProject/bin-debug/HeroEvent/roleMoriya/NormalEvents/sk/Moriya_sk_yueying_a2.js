var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_yueying_a2 = (function () {
    function Moriya_sk_yueying_a2() {
    }
    Moriya_sk_yueying_a2.addSprite4020 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_sk_yueying_a2.frame2, 3, Moriya_sk_yueying_a2.frame3, 8, Moriya_sk_yueying_a2.frame8, 21, Moriya_sk_yueying_a2.frame21]);
        return;
    };
    Moriya_sk_yueying_a2.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 18;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_yueying_a2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_yueying_a2.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 13;
        htcheck.Vy = 38;
        htcheck.a = 3;
        htcheck.g = 4;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.6;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_yueying_a2.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_yueying_a2;
}());
__reflect(Moriya_sk_yueying_a2.prototype, "Moriya_sk_yueying_a2");
//# sourceMappingURL=Moriya_sk_yueying_a2.js.map