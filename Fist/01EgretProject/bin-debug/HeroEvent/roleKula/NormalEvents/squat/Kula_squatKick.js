var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_squatKick = (function () {
    function Kula_squatKick() {
    }
    Kula_squatKick.addSprite19316 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Kula_squatKick.frame4, 5, Kula_squatKick.frame5, 18, Kula_squatKick.frame18]);
        return;
    };
    Kula_squatKick.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Kula_squatKick.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "getup1";
        htcheck.Vx = 12;
        htcheck.Vy = 31;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "down";
    };
    Kula_squatKick.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_squatKick;
}());
__reflect(Kula_squatKick.prototype, "Kula_squatKick");
//# sourceMappingURL=Kula_squatKick.js.map