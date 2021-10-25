var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_squatPunch = (function () {
    function Moriya_squatPunch() {
    }
    Moriya_squatPunch.addSprite3705 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_squatPunch.frame2, 5, Moriya_squatPunch.frame5, 7, Moriya_squatPunch.frame7, 9, Moriya_squatPunch.frame9, 20, Moriya_squatPunch.frame20]);
        return;
    };
    Moriya_squatPunch.frame2 = function (mc) {
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
    Moriya_squatPunch.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_squatPunch.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_squatPunch.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.8;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_squatPunch.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_squatPunch;
}());
__reflect(Moriya_squatPunch.prototype, "Moriya_squatPunch");
//# sourceMappingURL=Moriya_squatPunch.js.map