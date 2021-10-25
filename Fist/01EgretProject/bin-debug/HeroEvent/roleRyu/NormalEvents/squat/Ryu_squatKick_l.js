var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_squatKick_l = (function () {
    function Ryu_squatKick_l() {
    }
    Ryu_squatKick_l.addSprite20557 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Ryu_squatKick_l.frame2, 6, Ryu_squatKick_l.frame6]);
        return;
    };
    Ryu_squatKick_l.frame2 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt2";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = "s2";
        hitxheck.end_status = "";
        hitxheck.Vx = 15;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 1;
        hitxheck.freezeTime = 4;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.5;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitfire_l";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "down";
        //_level0.pl_snd.start();
    };
    Ryu_squatKick_l.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("squat");
    };
    return Ryu_squatKick_l;
}());
__reflect(Ryu_squatKick_l.prototype, "Ryu_squatKick_l");
//# sourceMappingURL=Ryu_squatKick_l.js.map