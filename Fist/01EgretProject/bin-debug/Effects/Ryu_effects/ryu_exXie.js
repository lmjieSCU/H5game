var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ryu_exXie = (function () {
    function ryu_exXie() {
    }
    ryu_exXie.addSprite21223 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, ryu_exXie.frame1, 5, ryu_exXie.frame5, 8, ryu_exXie.frame8, 60, ryu_exXie.frame60, 94, ryu_exXie.frame94]);
        mc.addWaitingCallFun(mc, ['frame1Call', ryu_exXie.frame1Call, [mc, own_role]]);
        return;
    };
    ryu_exXie.frame1Call = function (mc, own_role) {
        mc.x = own_role.opp.x;
    };
    ryu_exXie.frame1 = function (mc) {
        mc.checkWaitingCallFun('frame1Call');
    };
    ryu_exXie.frame5 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup1";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = -60;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 3;
        hitcheck_obj.freezeTime2 = 6;
        hitcheck_obj.freezeTime = 5;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 3;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    ryu_exXie.frame8 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup1";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 50;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 3.9;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 6;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 2;
        hitcheck_obj.d_rate = 2;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "up";
    };
    ryu_exXie.frame60 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    ryu_exXie.frame94 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return ryu_exXie;
}());
__reflect(ryu_exXie.prototype, "ryu_exXie");
//# sourceMappingURL=ryu_exXie.js.map