var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_glass = (function () {
    function k_glass() {
    }
    k_glass.addSprite4777 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, k_glass.frame1, 23, k_glass.frame23]);
        mc.addWaitingCallFun(mc, ['hit', k_glass.hit, [mc, own_role]]);
        return;
    };
    k_glass.frame1 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 32;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 1;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt2";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = 15;
        hitcheck_obj.Vy = 25;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 5;
        hitcheck_obj.freezeTime = 5;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 1;
        hitcheck_obj.d_rate = 0.5;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = true;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    k_glass.frame23Call = function (mc, own_role) {
    };
    k_glass.frame23 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    k_glass.hit = function (mc) {
        mc.gotoAndStop("hit");
        mc.resetFrameStop();
    };
    return k_glass;
}());
__reflect(k_glass.prototype, "k_glass");
//# sourceMappingURL=k_glass.js.map