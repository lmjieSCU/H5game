var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_squatKick_l = (function () {
    function Chunli_squatKick_l() {
    }
    Chunli_squatKick_l.addSprite14859 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Chunli_squatKick_l.frame2, 8, Chunli_squatKick_l.frame8]);
        return;
    };
    Chunli_squatKick_l.frame2 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "down";
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
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        //_level0.pl_snd.start();
    };
    Chunli_squatKick_l.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_squatKick_l;
}());
__reflect(Chunli_squatKick_l.prototype, "Chunli_squatKick_l");
//# sourceMappingURL=Chunli_squatKick_l.js.map