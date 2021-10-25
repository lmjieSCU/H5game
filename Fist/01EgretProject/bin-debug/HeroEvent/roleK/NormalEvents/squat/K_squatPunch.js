var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_squatPunch = (function () {
    function K_squatPunch() {
    }
    K_squatPunch.addSprite5497 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, K_squatPunch.frame4, 7, K_squatPunch.frame7, 17, K_squatPunch.frame17]);
        return;
    };
    K_squatPunch.frame4 = function (mc) {
        //_level0.p_snd.start();
    };
    K_squatPunch.frame7 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        return;
    };
    K_squatPunch.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("squat");
    };
    return K_squatPunch;
}());
__reflect(K_squatPunch.prototype, "K_squatPunch");
//# sourceMappingURL=K_squatPunch.js.map