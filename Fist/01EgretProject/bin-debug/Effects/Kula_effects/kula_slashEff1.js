var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_slashEff1 = (function () {
    function kula_slashEff1() {
    }
    kula_slashEff1.addSprite18486 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, kula_slashEff1.frame1, 15, kula_slashEff1.frame15, 19, kula_slashEff1.frame19, 23, kula_slashEff1.frame23, 27, kula_slashEff1.frame27, 31, kula_slashEff1.frame31, 34, kula_slashEff1.frame49]);
        mc["own_role"] = own_role;
        return;
    };
    kula_slashEff1.frame1 = function (mc) {
        mc.visible = false;
    };
    kula_slashEff1.frame15 = function (mc) {
        mc.x = mc["own_role"].opp.x;
        mc.y = mc["own_role"].y - 100;
        mc.visible = true;
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 8;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.4;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    kula_slashEff1.frame19 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 8;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 8;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.4;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    kula_slashEff1.frame23 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 8;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 8;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.4;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    kula_slashEff1.frame27 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 8;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 8;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.4;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    kula_slashEff1.frame31 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 8;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 20;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.4;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    kula_slashEff1.frame49 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_slashEff1;
}());
__reflect(kula_slashEff1.prototype, "kula_slashEff1");
//# sourceMappingURL=kula_slashEff1.js.map