var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_punch_l = (function () {
    function Mai_punch_l() {
    }
    Mai_punch_l.addSprite6606 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Mai_punch_l.frame2, 3, Mai_punch_l.frame3, 8, Mai_punch_l.frame8]);
        return;
    };
    Mai_punch_l.frame2 = function (mc) {
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
    Mai_punch_l.frame3 = function (mc) {
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
        htcheck.freezeTime = 3;
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
        //_level0.pl_snd.start();
    };
    Mai_punch_l.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_punch_l;
}());
__reflect(Mai_punch_l.prototype, "Mai_punch_l");
//# sourceMappingURL=Mai_punch_l.js.map