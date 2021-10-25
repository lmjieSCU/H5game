var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var wave_s3 = (function () {
    function wave_s3() {
    }
    wave_s3.addSprite21273 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, wave_s3.frame1, 2, wave_s3.frame2, 4, wave_s3.frame4, 6, wave_s3.frame6, 7, wave_s3.frame7, 8, wave_s3.frame8, 9, wave_s3.frame9, 16, wave_s3.frame16]);
        mc.addWaitingCallFun(mc, ['hit', wave_s3.frame1Call, [mc]]);
        return;
    };
    wave_s3.frame1Call = function (mc, own_role) {
        mc.resetFrameStop();
        mc.nextFrame();
    };
    wave_s3.frame1 = function (mc) {
        //_root.role_mc.mc.continueHit = true;
    };
    wave_s3.frame2 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = -30;
        hitcheck_obj.obj_Vy = -30;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = -10;
        hitcheck_obj.Vy = 10;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 3;
        hitcheck_obj.freezeTime = 1;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.5;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        mc.stop();
    };
    wave_s3.frame4 = function (mc) {
        mc.stop();
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = -20;
        hitcheck_obj.obj_Vy = -20;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = -10;
        hitcheck_obj.Vy = 15;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 1;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.5;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    wave_s3.frame6 = function (mc) {
        mc.stop();
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = -20;
        hitcheck_obj.obj_Vy = -20;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt4";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = -10;
        hitcheck_obj.Vy = 12;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 1;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.5;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    wave_s3.frame7 = function () {
        //_root.role_mc.mc.continueHit = false;
    };
    wave_s3.frame8 = function (mc) {
        mc.stop();
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = -10;
        hitcheck_obj.obj_Vy = -10;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt4";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = -12;
        hitcheck_obj.Vy = 26;
        hitcheck_obj.a = 5;
        hitcheck_obj.g = 5;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 5;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.5;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    wave_s3.frame9 = function () { };
    wave_s3.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return wave_s3;
}());
__reflect(wave_s3.prototype, "wave_s3");
//# sourceMappingURL=wave_s3.js.map