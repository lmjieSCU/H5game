var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_d2 = (function () {
    function Mai_sk_d2() {
    }
    Mai_sk_d2.addSprite6887 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_sk_d2.frame1, 11, Mai_sk_d2.frame11, 28, Mai_sk_d2.frame28]);
        return;
    };
    Mai_sk_d2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Mai_a6617.getInstance(_parentRole);
        a6617.Vx = 5;
        a6617.Vy = 15;
        a6617.Va = 0;
        a6617.Vg = 2;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "";
    };
    Mai_sk_d2.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 30;
        htcheck.Vy = -30;
        htcheck.a = 4;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire0";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "up";
        var a6617 = Mai_a6617.getInstance(_parentRole);
        a6617.Vx = 0;
        a6617.Vy = -10;
        a6617.Va = 0;
        a6617.Vg = 4.5;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "frame_land";
    };
    Mai_sk_d2.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_d2;
}());
__reflect(Mai_sk_d2.prototype, "Mai_sk_d2");
//# sourceMappingURL=Mai_sk_d2.js.map