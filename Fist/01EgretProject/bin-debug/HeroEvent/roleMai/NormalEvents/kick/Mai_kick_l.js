var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_kick_l = (function () {
    function Mai_kick_l() {
    }
    Mai_kick_l.addSprite6672 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_kick_l.frame3, 4, Mai_kick_l.frame4, 5, Mai_kick_l.frame5, 13, Mai_kick_l.frame13]);
        return;
    };
    Mai_kick_l.frame3 = function (mc) {
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
    };
    Mai_kick_l.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.kl_snd.start();
    };
    Mai_kick_l.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = "s2";
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitfire_l";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_kick_l.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_kick_l;
}());
__reflect(Mai_kick_l.prototype, "Mai_kick_l");
//# sourceMappingURL=Mai_kick_l.js.map