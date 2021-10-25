var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_squatKick_l = (function () {
    function Moriya_squatKick_l() {
    }
    Moriya_squatKick_l.addSprite3738 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_squatKick_l.frame2, 6, Moriya_squatKick_l.frame6]);
        return;
    };
    Moriya_squatKick_l.frame2 = function (mc) {
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
        htcheck.freezeTime2 = 1;
        htcheck.freezeTime = 4;
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
        //_level0.pl_snd.start();
    };
    Moriya_squatKick_l.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_squatKick_l;
}());
__reflect(Moriya_squatKick_l.prototype, "Moriya_squatKick_l");
//# sourceMappingURL=Moriya_squatKick_l.js.map