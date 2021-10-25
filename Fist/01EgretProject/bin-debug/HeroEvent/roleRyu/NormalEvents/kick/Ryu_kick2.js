var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_kick2 = (function () {
    function Ryu_kick2() {
    }
    Ryu_kick2.addSprite20524 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_kick2.frame1, 4, Ryu_kick2.frame4, 10, Ryu_kick2.frame10, 22, Ryu_kick2.frame24]);
        return;
    };
    Ryu_kick2.frame1 = function () {
        //hitPos = "up";
    };
    Ryu_kick2.frame4 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt1";
        hitxheck.hurtAway = "hurt3";
        hitxheck.flag = 1;
        hitxheck.end_status = "";
        hitxheck.Vx = 10;
        hitxheck.Vy = 20;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 6;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.5;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "";
        //_level0.k_snd.start();
    };
    Ryu_kick2.frame10 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt1";
        hitxheck.hurtAway = "hurt3";
        hitxheck.flag = 1;
        hitxheck.end_status = "";
        hitxheck.Vx = 19;
        hitxheck.Vy = -20;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 6;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.7;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "up";
    };
    Ryu_kick2.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_kick2;
}());
__reflect(Ryu_kick2.prototype, "Ryu_kick2");
//# sourceMappingURL=Ryu_kick2.js.map