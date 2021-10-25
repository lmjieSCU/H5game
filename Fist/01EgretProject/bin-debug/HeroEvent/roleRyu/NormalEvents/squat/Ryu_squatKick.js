var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_squatKick = (function () {
    function Ryu_squatKick() {
    }
    Ryu_squatKick.addSprite20580 = function (mc, own_role) {
        mc.addFrameScript(mc, [6, Ryu_squatKick.frame6, 7, Ryu_squatKick.frame7, 19, Ryu_squatKick.frame19]);
        return;
    };
    Ryu_squatKick.frame6 = function () {
        //_level0.k_snd.start();
    };
    Ryu_squatKick.frame7 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "";
        hitxheck.hurtAway = "hurt5";
        hitxheck.flag = 1;
        hitxheck.end_status = "getup1";
        hitxheck.Vx = 10;
        hitxheck.Vy = 31;
        hitxheck.a = 0;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 3;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 1;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "down";
    };
    Ryu_squatKick.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_squatKick;
}());
__reflect(Ryu_squatKick.prototype, "Ryu_squatKick");
//# sourceMappingURL=Ryu_squatKick.js.map