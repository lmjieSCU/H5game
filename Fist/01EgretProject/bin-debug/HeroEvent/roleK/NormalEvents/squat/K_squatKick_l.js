var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_squatKick_l = (function () {
    function K_squatKick_l() {
    }
    K_squatKick_l.addSprite5515 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, K_squatKick_l.frame3, 6, K_squatKick_l.frame6]);
        return;
    };
    K_squatKick_l.frame3 = function (mc) {
        //_level0.pl_snd.start();
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = "s2";
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 1;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitfire_l";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
    };
    K_squatKick_l.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("squat");
        return;
    };
    return K_squatKick_l;
}());
__reflect(K_squatKick_l.prototype, "K_squatKick_l");
//# sourceMappingURL=K_squatKick_l.js.map