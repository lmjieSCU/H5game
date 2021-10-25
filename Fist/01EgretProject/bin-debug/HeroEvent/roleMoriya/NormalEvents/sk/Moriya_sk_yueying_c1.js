var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_yueying_c1 = (function () {
    function Moriya_sk_yueying_c1() {
    }
    Moriya_sk_yueying_c1.addSprite4034 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_sk_yueying_c1.frame3, 5, Moriya_sk_yueying_c1.frame5, 10, Moriya_sk_yueying_c1.frame10, 24, Moriya_sk_yueying_c1.frame24]);
        return;
    };
    Moriya_sk_yueying_c1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Moriya_sk_yueying_c1.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 23;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_yueying_c1.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_yueying_c1.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_yueying_c1;
}());
__reflect(Moriya_sk_yueying_c1.prototype, "Moriya_sk_yueying_c1");
//# sourceMappingURL=Moriya_sk_yueying_c1.js.map