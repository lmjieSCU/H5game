var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_pitch = (function () {
    function K_pitch() {
    }
    K_pitch.addSprite5558 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_pitch.frame1, 15, K_pitch.frame15, 32, K_pitch.frame32]);
        return;
    };
    K_pitch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a5537 = K_a5537.getInstance(_parentRole);
        a5537.hurt = false;
        a5537.land = true;
        a5537.downHit = false;
        a5537.status_1 = "hurt2";
        a5537.flag = "s3";
        return;
    };
    K_pitch.frame15 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 40;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 7;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        return;
    };
    K_pitch.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_pitch;
}());
__reflect(K_pitch.prototype, "K_pitch");
//# sourceMappingURL=K_pitch.js.map