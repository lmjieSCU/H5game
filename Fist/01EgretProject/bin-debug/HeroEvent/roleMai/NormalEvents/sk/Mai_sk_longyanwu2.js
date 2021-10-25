var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_longyanwu2 = (function () {
    function Mai_sk_longyanwu2() {
    }
    Mai_sk_longyanwu2.addSprite7077 = function (mc, own_role) {
        mc.addFrameScript(mc, [8, Mai_sk_longyanwu2.frame8, 11, Mai_sk_longyanwu2.frame11, 23, Mai_sk_longyanwu2.frame23]);
        return;
    };
    Mai_sk_longyanwu2.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.7;
        htcheck.isObj = true;
        htcheck.hitType = "";
        htcheck.hitEff = "fire_m2";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_longyanwu2.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = true;
        htcheck.hitType = "";
        htcheck.hitEff = "fire_m2";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_longyanwu2.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_longyanwu2;
}());
__reflect(Mai_sk_longyanwu2.prototype, "Mai_sk_longyanwu2");
//# sourceMappingURL=Mai_sk_longyanwu2.js.map