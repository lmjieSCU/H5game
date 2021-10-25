var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_squatKick = (function () {
    function K_squatKick() {
    }
    K_squatKick.addSprite5534 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, K_squatKick.frame4, 5, K_squatKick.frame5, 22, K_squatKick.frame22]);
        return;
    };
    K_squatKick.frame4 = function (mc) {
        //_level0.k_snd.start();
    };
    K_squatKick.frame5 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt5";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup1";
        hitcheck.Vx = 12;
        hitcheck.Vy = 31;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
        return;
    };
    K_squatKick.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_squatKick;
}());
__reflect(K_squatKick.prototype, "K_squatKick");
//# sourceMappingURL=K_squatKick.js.map