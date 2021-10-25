var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_heavyHit = (function () {
    function Mai_heavyHit() {
    }
    Mai_heavyHit.addSprite6804 = function (mc, own_role) {
        mc.addFrameScript(mc, [9, Mai_heavyHit.frame9, 13, Mai_heavyHit.frame13, 25, Mai_heavyHit.frame25]);
        return;
    };
    Mai_heavyHit.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6541 = Mai_a6541.getInstance(_parentRole);
        a6541.soundArray = [];
        a6541.soundArray[0] = "mai_att_m1";
        a6541.startPos = 0;
        a6541.loop = 1;
    };
    Mai_heavyHit.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt4";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 17;
        htcheck.Vy = 40;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_h";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_heavyHit.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_heavyHit;
}());
__reflect(Mai_heavyHit.prototype, "Mai_heavyHit");
//# sourceMappingURL=Mai_heavyHit.js.map