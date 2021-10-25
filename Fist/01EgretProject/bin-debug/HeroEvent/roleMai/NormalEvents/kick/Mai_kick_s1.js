var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_kick_s1 = (function () {
    function Mai_kick_s1() {
    }
    Mai_kick_s1.addSprite6634 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Mai_kick_s1.frame4, 10, Mai_kick_s1.frame10, 16, Mai_kick_s1.frame16, 20, Mai_kick_s1.frame20, 26, Mai_kick_s1.frame26]);
        return;
    };
    Mai_kick_s1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.pl_snd.start();
    };
    Mai_kick_s1.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6541 = Mai_a6541.getInstance(_parentRole);
        a6541.soundArray = [];
        a6541.soundArray[0] = "mai_att_l1";
        a6541.soundArray[1] = "mai_att_l2";
        a6541.soundArray[2] = "none";
        a6541.startPos = 0;
        a6541.loop = 1;
        var a6617 = Mai_a6617.getInstance(_parentRole);
        a6617.Vx = 18;
        a6617.Vy = 23;
        a6617.Va = 0;
        a6617.Vg = 5;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "";
    };
    Mai_kick_s1.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 18;
        htcheck.Vy = 20;
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
        htcheck.hitPos = "up";
    };
    Mai_kick_s1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Mai_kick_s1.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_kick_s1;
}());
__reflect(Mai_kick_s1.prototype, "Mai_kick_s1");
//# sourceMappingURL=Mai_kick_s1.js.map