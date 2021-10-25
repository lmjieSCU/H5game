var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_squatPunch_l = (function () {
    function Chunli_squatPunch_l() {
    }
    Chunli_squatPunch_l.addSprite14827 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_squatPunch_l.frame3, 14, Chunli_squatPunch_l.frame14]);
        return;
    };
    Chunli_squatPunch_l.frame3 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitfire_l";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = "s2";
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.Vx = 15;
        htcheck.freezeTime2 = 1;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        //_level0.pl_snd.start();
    };
    Chunli_squatPunch_l.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_squatPunch_l;
}());
__reflect(Chunli_squatPunch_l.prototype, "Chunli_squatPunch_l");
//# sourceMappingURL=Chunli_squatPunch_l.js.map