var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var wave_h = (function () {
    function wave_h() {
    }
    wave_h.addSprite20044 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, wave_h.frame2, 10, wave_h.frame10]);
        mc.addWaitingCallFun(mc, ['frame2Call', wave_h.frame2Call, [mc, own_role]]);
        return;
    };
    wave_h.frame2Call = function (mc, own_role) {
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            mc.stop();
        }
        else {
            mc.resetFrameStop();
        }
    };
    wave_h.frame2 = function (mc) {
        mc.checkWaitingCallFun('frame2Call');
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 33;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 1;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 4;
        hitcheck_obj.freezeTime = 6;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 2;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "fire_m1";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    wave_h.frame10 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return wave_h;
}());
__reflect(wave_h.prototype, "wave_h");
//# sourceMappingURL=wave_h.js.map