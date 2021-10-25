var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_punch_s1 = (function () {
    function Kula_punch_s1() {
    }
    Kula_punch_s1.addSprite19157 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Kula_punch_s1.frame4, 7, Kula_punch_s1.frame7, 22, Kula_punch_s1.frame22]);
        return;
    };
    Kula_punch_s1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.pl_snd.start();
    };
    Kula_punch_s1.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 25;
        htcheck.Vy = 15;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire0";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_punch_s1.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_punch_s1;
}());
__reflect(Kula_punch_s1.prototype, "Kula_punch_s1");
//# sourceMappingURL=Kula_punch_s1.js.map