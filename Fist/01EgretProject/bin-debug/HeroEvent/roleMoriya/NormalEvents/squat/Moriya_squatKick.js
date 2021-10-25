var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_squatKick = (function () {
    function Moriya_squatKick() {
    }
    Moriya_squatKick.addSprite3731 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_squatKick.frame2, 4, Moriya_squatKick.frame4, 6, Moriya_squatKick.frame6, 17, Moriya_squatKick.frame17]);
        return;
    };
    Moriya_squatKick.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3565 = Moriya_a3565.getInstance(_parentRole);
        a3565.soundArray = [];
        a3565.soundArray[0] = "m_hit_v_h1";
        a3565.soundArray[1] = "m_hit_v_h2";
        a3565.soundArray[2] = "none";
        a3565.startPos = 0;
        a3565.loop = 1;
    };
    Moriya_squatKick.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_squatKick.frame6 = function (mc) {
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
        htcheck.freezeTime = 4;
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
    Moriya_squatKick.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_squatKick;
}());
__reflect(Moriya_squatKick.prototype, "Moriya_squatKick");
//# sourceMappingURL=Moriya_squatKick.js.map