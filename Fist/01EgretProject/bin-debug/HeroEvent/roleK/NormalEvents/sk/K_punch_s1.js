var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_punch_s1 = (function () {
    function K_punch_s1() {
    }
    K_punch_s1.addSprite5345 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, K_punch_s1.frame5, 7, K_punch_s1.frame7, 22, K_punch_s1.frame22]);
        return;
    };
    K_punch_s1.frame5 = function () {
        // _level0.p_snd.start();
        return;
    };
    K_punch_s1.frame7 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 25;
        hitcheck.Vy = 15;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.7;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_punch_s1.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
        return;
    };
    return K_punch_s1;
}());
__reflect(K_punch_s1.prototype, "K_punch_s1");
//# sourceMappingURL=K_punch_s1.js.map