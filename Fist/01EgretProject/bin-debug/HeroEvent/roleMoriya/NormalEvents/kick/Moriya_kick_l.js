var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_kick_l = (function () {
    function Moriya_kick_l() {
    }
    Moriya_kick_l.addSprite3669 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_kick_l.frame2, 3, Moriya_kick_l.frame3, 9, Moriya_kick_l.frame9]);
        return;
    };
    Moriya_kick_l.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.kl_snd.start();
    };
    Moriya_kick_l.frame3 = function (mc) {
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
        htcheck.freezeTime = 4;
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
    Moriya_kick_l.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_kick_l;
}());
__reflect(Moriya_kick_l.prototype, "Moriya_kick_l");
//# sourceMappingURL=Moriya_kick_l.js.map