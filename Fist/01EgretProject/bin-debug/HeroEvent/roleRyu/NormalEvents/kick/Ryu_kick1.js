var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_kick1 = (function () {
    function Ryu_kick1() {
    }
    Ryu_kick1.addSprite20505 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_kick1.frame1, 8, Ryu_kick1.frame8, 9, Ryu_kick1.frame9, 11, Ryu_kick1.frame13]);
        return;
    };
    Ryu_kick1.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 13;
        a20238.Vy = 15;
        a20238.Va = 0;
        a20238.Vg = 3.5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_kick1.frame8 = function () {
        // _level0.p_snd.start();
    };
    Ryu_kick1.frame9 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt1";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = 3;
        hitxheck.end_status = "";
        hitxheck.Vx = 17;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 4;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.7;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "";
    };
    Ryu_kick1.frame13 = function (mc) {
        mc.stop();
    };
    return Ryu_kick1;
}());
__reflect(Ryu_kick1.prototype, "Ryu_kick1");
//# sourceMappingURL=Ryu_kick1.js.map