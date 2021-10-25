var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk3_l = (function () {
    function Ryu_sk3_l() {
    }
    Ryu_sk3_l.addSprite20708 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_sk3_l.frame1, 5, Ryu_sk3_l.frame5, 6, Ryu_sk3_l.frame6, 7, Ryu_sk3_l.frame7, 15, Ryu_sk3_l.frame15]);
        return;
    };
    Ryu_sk3_l.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2, "up");
    };
    Ryu_sk3_l.frame5 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 13;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 4;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk3_l.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    };
    Ryu_sk3_l.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 4;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = false;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 8;
        a20238.Vy = 27;
        a20238.Va = 0;
        a20238.Vg = 4.5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_sk3_l.frame15 = function (mc) {
        mc.stop();
    };
    return Ryu_sk3_l;
}());
__reflect(Ryu_sk3_l.prototype, "Ryu_sk3_l");
//# sourceMappingURL=Ryu_sk3_l.js.map