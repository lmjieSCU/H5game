var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitCombo1 = (function () {
    function hitCombo1() {
    }
    hitCombo1.addSprite4739 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, hitCombo1.frame1, 13, hitCombo1.frame13, 17, hitCombo1.frame17,
            21, hitCombo1.frame21, 24, hitCombo1.frame24, 5, hitCombo1.frame5, 9, hitCombo1.frame9]);
        return;
    };
    hitCombo1.frame1 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    hitCombo1.frame13 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    hitCombo1.frame17 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    hitCombo1.frame21 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    hitCombo1.frame24 = function (mc) {
        mc.parent.removeChild(mc);
    };
    hitCombo1.frame5 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    hitCombo1.frame9 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    return hitCombo1;
}());
__reflect(hitCombo1.prototype, "hitCombo1");
//# sourceMappingURL=hitCombo1.js.map