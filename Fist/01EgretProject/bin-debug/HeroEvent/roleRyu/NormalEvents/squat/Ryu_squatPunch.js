var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_squatPunch = (function () {
    function Ryu_squatPunch() {
    }
    Ryu_squatPunch.addSprite20541 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Ryu_squatPunch.frame5, 8, Ryu_squatPunch.frame8, 16, Ryu_squatPunch.frame16]);
        return;
    };
    Ryu_squatPunch.frame5 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt1";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = "s1";
        hitxheck.end_status = "";
        hitxheck.Vx = 20;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 5;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 1;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "";
        //_level0.p_snd.start();
    };
    Ryu_squatPunch.frame8 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt1";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = "s1";
        hitxheck.end_status = "";
        hitxheck.Vx = 20;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
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
        hitxheck.reCheck = false;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "";
    };
    Ryu_squatPunch.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("squat");
    };
    return Ryu_squatPunch;
}());
__reflect(Ryu_squatPunch.prototype, "Ryu_squatPunch");
//# sourceMappingURL=Ryu_squatPunch.js.map