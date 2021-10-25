var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_punch_l = (function () {
    function Ryu_punch_l() {
    }
    Ryu_punch_l.addSprite20423 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Ryu_punch_l.frame2, 3, Ryu_punch_l.frame3, 6, Ryu_punch_l.frame6,]);
        return;
    };
    Ryu_punch_l.frame2 = function () {
        //_level0.pl_snd.start();
    };
    Ryu_punch_l.frame3 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt1";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = "s2";
        hitxheck.end_status = "";
        hitxheck.Vx = 14;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 2;
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
        hitxheck.hitPos = "";
    };
    Ryu_punch_l.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_punch_l;
}());
__reflect(Ryu_punch_l.prototype, "Ryu_punch_l");
//# sourceMappingURL=Ryu_punch_l.js.map