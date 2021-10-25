var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_punch2 = (function () {
    function Mai_punch2() {
    }
    Mai_punch2.addSprite6657 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Mai_punch2.frame2, 4, Mai_punch2.frame4, 5, Mai_punch2.frame5, 15, Mai_punch2.frame15]);
        return;
    };
    Mai_punch2.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6541 = Mai_a6541.getInstance(_parentRole);
        a6541.soundArray = [];
        a6541.soundArray[0] = "mai_att_m1";
        a6541.soundArray[1] = "mai_att_m2";
        a6541.soundArray[2] = "none";
        a6541.startPos = 0;
        a6541.loop = 1;
    };
    Mai_punch2.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Mai_punch2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_punch2.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_punch2;
}());
__reflect(Mai_punch2.prototype, "Mai_punch2");
//# sourceMappingURL=Mai_punch2.js.map