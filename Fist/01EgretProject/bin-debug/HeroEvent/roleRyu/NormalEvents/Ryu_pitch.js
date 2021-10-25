var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_pitch = (function () {
    function Ryu_pitch() {
    }
    Ryu_pitch.addSprite20598 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_pitch.frame1, 22, Ryu_pitch.frame22, 36, Ryu_pitch.frame36]);
        return;
    };
    Ryu_pitch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20583 = Ryu_a20583.getInstance(_parentRole);
        a20583.hurt = false;
        a20583.land = true;
        a20583.downHit = false;
        a20583.status_1 = "hurt2";
        a20583.flag = "s3";
    };
    Ryu_pitch.frame22 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "";
        hitxheck.hurtAway = "hurt4";
        hitxheck.flag = 1;
        hitxheck.end_status = "getup2";
        hitxheck.Vx = 17;
        hitxheck.Vy = 40;
        hitxheck.a = 0;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 5;
        hitxheck.slowTime = 0;
        hitxheck.shake = 1;
        hitxheck.d_rate = 2;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "";
    };
    Ryu_pitch.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_pitch;
}());
__reflect(Ryu_pitch.prototype, "Ryu_pitch");
//# sourceMappingURL=Ryu_pitch.js.map