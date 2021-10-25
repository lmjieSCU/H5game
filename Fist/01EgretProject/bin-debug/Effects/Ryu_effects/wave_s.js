var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var wave_s = (function () {
    function wave_s() {
    }
    wave_s.addSprite20084 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, wave_s.frame1, 2, wave_s.frame2, 3, wave_s.frame3, 4, wave_s.frame4, 20, wave_s.frame20]);
        mc['own_role'] = own_role;
        mc.addWaitingCallFun(mc, ['hit', wave_s.frame1Call, [mc]]);
        return;
    };
    wave_s.frame1Call = function (mc) {
        mc.resetFrameStop();
        mc.nextFrame();
    };
    wave_s.frame1 = function (mc) {
        // let role :Role = mc['own_role'];
        // role.continueHit = false;
    };
    wave_s.frame2 = function (mc) {
        mc.stop();
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 50;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    wave_s.frame3 = function () {
        // let role :Role = mc['own_role'];
        // role.continueHit = false;
    };
    wave_s.frame4 = function () { };
    wave_s.frame20 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return wave_s;
}());
__reflect(wave_s.prototype, "wave_s");
//# sourceMappingURL=wave_s.js.map