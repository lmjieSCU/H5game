var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_huaxing = (function () {
    function Kula_sk_huaxing() {
    }
    Kula_sk_huaxing.addSprite19387 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_sk_huaxing.frame1, 6, Kula_sk_huaxing.frame6, 7, Kula_sk_huaxing.frame7, 8, Kula_sk_huaxing.frame8, 22, Kula_sk_huaxing.frame22]);
        return;
    };
    Kula_sk_huaxing.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //hitPos = "down";
        _parentRole.status_2 = "land";
    };
    Kula_sk_huaxing.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 23;
        a18962.flag = "";
        a18962.target = "";
    };
    Kula_sk_huaxing.frame7 = function (mc) {
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
        htcheck.Vy = 45;
        htcheck.a = 0;
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
        htcheck.hitPos = "down";
    };
    Kula_sk_huaxing.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Kula_sk_huaxing.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_huaxing;
}());
__reflect(Kula_sk_huaxing.prototype, "Kula_sk_huaxing");
//# sourceMappingURL=Kula_sk_huaxing.js.map