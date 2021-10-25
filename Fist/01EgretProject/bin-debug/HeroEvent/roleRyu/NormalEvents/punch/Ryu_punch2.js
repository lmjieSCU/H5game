var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_punch2 = (function () {
    function Ryu_punch2() {
    }
    Ryu_punch2.addSprite20456 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_punch2.frame3, 13, Ryu_punch2.frame16]);
        return;
    };
    Ryu_punch2.frame3 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt1";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = 1;
        hitxheck.end_status = "";
        hitxheck.Vx = 20;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 4;
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
    Ryu_punch2.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_punch2;
}());
__reflect(Ryu_punch2.prototype, "Ryu_punch2");
//# sourceMappingURL=Ryu_punch2.js.map