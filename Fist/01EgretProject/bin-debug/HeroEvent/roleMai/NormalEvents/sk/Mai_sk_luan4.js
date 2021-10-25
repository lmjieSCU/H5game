var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_luan4 = (function () {
    function Mai_sk_luan4() {
    }
    Mai_sk_luan4.addSprite7675 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Mai_sk_luan4.frame1, 4, Mai_sk_luan4.frame4, 7, Mai_sk_luan4.frame7, 15, Mai_sk_luan4.frame15]);
        return;
    };
    Mai_sk_luan4.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 10;
        a6433.flag = "";
        a6433.target = "";
    };
    Mai_sk_luan4.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 12;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 1;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.25;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_luan4.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzipo";
    };
    Mai_sk_luan4.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_luan4;
}());
__reflect(Mai_sk_luan4.prototype, "Mai_sk_luan4");
//# sourceMappingURL=Mai_sk_luan4.js.map