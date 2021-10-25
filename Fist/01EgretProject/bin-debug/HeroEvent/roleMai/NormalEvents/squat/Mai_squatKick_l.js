var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_squatKick_l = (function () {
    function Mai_squatKick_l() {
    }
    Mai_squatKick_l.addSprite6750 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Mai_squatKick_l.frame2, 4, Mai_squatKick_l.frame4, 8, Mai_squatKick_l.frame8]);
        return;
    };
    Mai_squatKick_l.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.pl_snd.start();
    };
    Mai_squatKick_l.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = "s2";
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitfire_l";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "down";
    };
    Mai_squatKick_l.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_squatKick_l;
}());
__reflect(Mai_squatKick_l.prototype, "Mai_squatKick_l");
//# sourceMappingURL=Mai_squatKick_l.js.map