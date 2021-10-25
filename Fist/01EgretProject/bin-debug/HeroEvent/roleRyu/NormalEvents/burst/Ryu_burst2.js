var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_burst2 = (function () {
    function Ryu_burst2() {
    }
    Ryu_burst2.addSprite20395 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_burst2.frame3, 5, Ryu_burst2.frame5]);
        return;
    };
    Ryu_burst2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "";
        hitxheck.hurtAway = "hurt3";
        hitxheck.flag = 1;
        hitxheck.end_status = "getup2";
        hitxheck.Vx = 20;
        hitxheck.Vy = 40;
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
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "";
        Ryu_a20393.getInstance(_parentRole).s_type = "s_defend";
        _parentRole.powerBurst();
    };
    Ryu_burst2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_burst2;
}());
__reflect(Ryu_burst2.prototype, "Ryu_burst2");
//# sourceMappingURL=Ryu_burst2.js.map