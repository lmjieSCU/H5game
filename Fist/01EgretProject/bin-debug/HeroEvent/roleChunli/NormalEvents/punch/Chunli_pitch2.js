var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_pitch2 = (function () {
    function Chunli_pitch2() {
    }
    Chunli_pitch2.addSprite14869 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_pitch2.frame1, 9, Chunli_pitch2.frame9, 12, Chunli_pitch2.frame12, 15, Chunli_pitch2.frame15, 20, Chunli_pitch2.frame20, 26, Chunli_pitch2.frame26, 32, Chunli_pitch2.frame32, 38, Chunli_pitch2.frame38, 48, Chunli_pitch2.frame48]);
        return;
    };
    Chunli_pitch2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a14862 = Chunli_a14862.getInstance(_parentRole);
        a14862.hurt = false;
        a14862.land = true;
        a14862.downHit = false;
        a14862.status_1 = "hurt2";
        a14862.flag = "s_catch";
    };
    Chunli_pitch2.frame9 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch2.frame12 = function (mc) {
        //_level0.p_snd.start();
    };
    Chunli_pitch2.frame15 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch2.frame20 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch2.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch2.frame32 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch2.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 10;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.Vx = 25;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch2.frame48 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_pitch2;
}());
__reflect(Chunli_pitch2.prototype, "Chunli_pitch2");
//# sourceMappingURL=Chunli_pitch2.js.map