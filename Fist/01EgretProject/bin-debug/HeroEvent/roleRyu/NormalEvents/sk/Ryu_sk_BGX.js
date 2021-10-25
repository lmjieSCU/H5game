var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk_BGX = (function () {
    function Ryu_sk_BGX() {
    }
    Ryu_sk_BGX.addSprite21012 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Ryu_sk_BGX.frame4, 18, Ryu_sk_BGX.frame18, 19, Ryu_sk_BGX.frame19, 20, Ryu_sk_BGX.frame20, 31, Ryu_sk_BGX.frame31, 32, Ryu_sk_BGX.frame32, 34, Ryu_sk_BGX.frame34, 49, Ryu_sk_BGX.frame49, 50, Ryu_sk_BGX.frame50, 54, Ryu_sk_BGX.frame54, 56, Ryu_sk_BGX.frame56]);
        return;
    };
    Ryu_sk_BGX.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 15;
        a20238.Vy = 35;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "frame_land";
    };
    Ryu_sk_BGX.frame18 = function (mc) {
        mc.stop();
    };
    Ryu_sk_BGX.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 10;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk_BGX.frame20 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt5";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup1";
        hitcheck.Vx = 10;
        hitcheck.Vy = 31;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
    };
    Ryu_sk_BGX.frame31 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    Ryu_sk_BGX.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 28;
        a20238.Vy = -20;
        a20238.Va = 0;
        a20238.Vg = 5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land3";
        //hitPos = "up";
    };
    Ryu_sk_BGX.frame34 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt5";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup1";
        hitcheck.Vx = 10;
        hitcheck.Vy = 31;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
    };
    Ryu_sk_BGX.frame49 = function (mc) {
        mc.stop();
    };
    Ryu_sk_BGX.frame50 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 5;
        a20238.Vy = 5;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "";
        //hitPos = "up";
    };
    Ryu_sk_BGX.frame54 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup1";
        hitcheck.Vx = 30;
        hitcheck.Vy = -30;
        hitcheck.a = 4;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "up";
    };
    Ryu_sk_BGX.frame56 = function (mc) {
        mc.stop();
    };
    return Ryu_sk_BGX;
}());
__reflect(Ryu_sk_BGX.prototype, "Ryu_sk_BGX");
//# sourceMappingURL=Ryu_sk_BGX.js.map