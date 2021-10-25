var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_huixuan = (function () {
    function Chunli_sk_huixuan() {
    }
    Chunli_sk_huixuan.addSprite15180 = function (mc, own_role) {
        mc.addFrameScript(mc, [10, Chunli_sk_huixuan.frame10, 12, Chunli_sk_huixuan.frame12, 17, Chunli_sk_huixuan.frame17, 22, Chunli_sk_huixuan.frame22, 27, Chunli_sk_huixuan.frame27, 32, Chunli_sk_huixuan.frame32, 34, Chunli_sk_huixuan.frame34, 49, Chunli_sk_huixuan.frame49]);
        return;
    };
    Chunli_sk_huixuan.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 20;
        a3395.flag = "";
        a3395.target = "";
    };
    Chunli_sk_huixuan.frame12 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 15;
        htcheck.a = 0;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 2;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_huixuan.frame17 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 15;
        htcheck.a = 0;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 2;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_huixuan.frame22 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 15;
        htcheck.a = 0;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 2;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_huixuan.frame27 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 15;
        htcheck.a = 0;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 2;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_huixuan.frame32 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 5;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.Vx = 30;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_huixuan.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 20;
        a4023.Vy = 0;
        a4023.Va = 3;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "";
    };
    Chunli_sk_huixuan.frame49 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_huixuan;
}());
__reflect(Chunli_sk_huixuan.prototype, "Chunli_sk_huixuan");
//# sourceMappingURL=Chunli_sk_huixuan.js.map