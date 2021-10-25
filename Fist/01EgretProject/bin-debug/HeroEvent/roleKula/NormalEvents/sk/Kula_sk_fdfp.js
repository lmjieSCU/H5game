var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_fdfp = (function () {
    function Kula_sk_fdfp() {
    }
    Kula_sk_fdfp.addSprite19476 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_sk_fdfp.frame1, 2, Kula_sk_fdfp.frame2, 5, Kula_sk_fdfp.frame5, 7, Kula_sk_fdfp.frame7, 8, Kula_sk_fdfp.frame8, 9, Kula_sk_fdfp.frame9, 28, Kula_sk_fdfp.frame28]);
        return;
    };
    Kula_sk_fdfp.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 20;
        a18962.flag = "";
        a18962.target = "";
    };
    Kula_sk_fdfp.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Kula_sk_fdfp.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        Kula_a19439.getInstance(_parentRole).name = "kula_wuyayao";
    };
    Kula_sk_fdfp.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_fdfp.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Kula_sk_fdfp.frame9 = function (mc) {
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
        htcheck.d_rate = 0.9;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 15;
        a19418.Vy = 39;
        a19418.Va = 0;
        a19418.Vg = 4.5;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land3";
    };
    Kula_sk_fdfp.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_sk_fdfp;
}());
__reflect(Kula_sk_fdfp.prototype, "Kula_sk_fdfp");
//# sourceMappingURL=Kula_sk_fdfp.js.map