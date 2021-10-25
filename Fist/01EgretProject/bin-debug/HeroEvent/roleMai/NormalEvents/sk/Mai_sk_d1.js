var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_d1 = (function () {
    function Mai_sk_d1() {
    }
    Mai_sk_d1.addSprite6906 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_sk_d1.frame1, 7, Mai_sk_d1.frame7, 10, Mai_sk_d1.frame10, 34, Mai_sk_d1.frame34]);
        return;
    };
    Mai_sk_d1.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Mai_a6617.getInstance(_parentRole);
        a6617.Vx = 0;
        a6617.Vy = 10;
        a6617.Va = 0;
        a6617.Vg = 2;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "";
    };
    Mai_sk_d1.frame7 = function (mc) {
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
        htcheck.Vy = 28;
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
        htcheck.hitPos = "";
        var a6617 = Mai_a6617.getInstance(_parentRole);
        a6617.Vx = 28;
        a6617.Vy = -10;
        a6617.Va = 0;
        a6617.Vg = 4.5;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "frame_land";
    };
    Mai_sk_d1.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Mai_sk_d1.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_d1;
}());
__reflect(Mai_sk_d1.prototype, "Mai_sk_d1");
//# sourceMappingURL=Mai_sk_d1.js.map