var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var wave = (function () {
    function wave() {
    }
    wave.addSprite20011 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, wave.frame2, 10, wave.frame10]);
        return;
    };
    wave.frame2Call = function (mc, own_role) {
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            mc.stop();
        }
        else {
            mc.resetFrameStop();
        }
    };
    wave.frame2 = function (mc) {
        mc.stop();
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 35;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt6";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 4;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    wave.frame10 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return wave;
}());
__reflect(wave.prototype, "wave");
//# sourceMappingURL=wave.js.map