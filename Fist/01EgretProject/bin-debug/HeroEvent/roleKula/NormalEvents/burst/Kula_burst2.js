var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_burst2 = (function () {
    function Kula_burst2() {
    }
    Kula_burst2.addSprite19129 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_burst2.frame3, 6, Kula_burst2.frame6]);
        return;
    };
    Kula_burst2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 20;
        htcheck.Vy = 40;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        var a19125 = Kula_a19125.getInstance(_parentRole);
        a19125.s_type = "s_defend";
        _parentRole.powerBurst();
    };
    Kula_burst2.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_burst2;
}());
__reflect(Kula_burst2.prototype, "Kula_burst2");
//# sourceMappingURL=Kula_burst2.js.map