var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_huaxing = (function () {
    function Mai_sk_huaxing() {
    }
    Mai_sk_huaxing.addSprite6832 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_sk_huaxing.frame1, 3, Mai_sk_huaxing.frame3, 5, Mai_sk_huaxing.frame5, 8, Mai_sk_huaxing.frame8, 12, Mai_sk_huaxing.frame12, 29, Mai_sk_huaxing.frame29]);
        return;
    };
    Mai_sk_huaxing.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //hitPos = "down";
    };
    Mai_sk_huaxing.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 25;
        a6433.flag = "";
        a6433.target = "";
        var a6541 = Mai_a6541.getInstance(_parentRole);
        a6541.soundArray = [];
        a6541.soundArray[0] = "mai_att_m1";
        a6541.startPos = 0;
        a6541.loop = 1;
    };
    Mai_sk_huaxing.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup1";
        htcheck.Vx = 12;
        htcheck.Vy = 25;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "down";
    };
    Mai_sk_huaxing.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Mai_sk_huaxing.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup1";
        htcheck.Vx = 12;
        htcheck.Vy = 25;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 6;
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
    Mai_sk_huaxing.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_huaxing;
}());
__reflect(Mai_sk_huaxing.prototype, "Mai_sk_huaxing");
//# sourceMappingURL=Mai_sk_huaxing.js.map