var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_kick2 = (function () {
    function K_kick2() {
    }
    K_kick2.addSprite5459 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, K_kick2.frame4, 6, K_kick2.frame6, 9, K_kick2.frame9, 11, K_kick2.frame11, 21, K_kick2.frame24]);
        return;
    };
    K_kick2.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // _level0.k_snd.start();
        var a594 = K_a594.getInstance(_parentRole);
        a594.flag = "";
        a594.target = "";
        a594.Vx = 18;
    };
    K_kick2.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
    };
    K_kick2.frame9 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_kick2.frame11 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 2;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "up";
        return;
    };
    K_kick2.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_kick2;
}());
__reflect(K_kick2.prototype, "K_kick2");
//# sourceMappingURL=K_kick2.js.map