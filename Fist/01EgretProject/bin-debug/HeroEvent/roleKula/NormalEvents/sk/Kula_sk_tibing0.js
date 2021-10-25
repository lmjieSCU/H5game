var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_tibing0 = (function () {
    function Kula_sk_tibing0() {
    }
    Kula_sk_tibing0.addSprite19440 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Kula_sk_tibing0.frame5, 21, Kula_sk_tibing0.frame21]);
        return;
    };
    Kula_sk_tibing0.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_tibing0.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_tibing0;
}());
__reflect(Kula_sk_tibing0.prototype, "Kula_sk_tibing0");
//# sourceMappingURL=Kula_sk_tibing0.js.map