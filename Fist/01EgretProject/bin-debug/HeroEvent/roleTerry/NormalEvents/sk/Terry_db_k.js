var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_db_k = (function () {
    function Terry_db_k() {
    }
    Terry_db_k.addSprite8945 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_db_k.frame3, 4, Terry_db_k.frame4, 6, Terry_db_k.frame6, 8, Terry_db_k.frame8, 10, Terry_db_k.frame10, 14, Terry_db_k.frame14, 20, Terry_db_k.frame20]);
        return;
    };
    Terry_db_k.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Terry_a6617.getInstance(_parentRole);
        a6617.Vx = 17;
        a6617.Vy = 24;
        a6617.Va = 0;
        a6617.Vg = 4.8;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "frame_end";
    };
    Terry_db_k.frame4 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 25;
        hitcheck.a = 0;
        hitcheck.g = 5;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_db_k.frame6 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 28;
        hitcheck.a = 3;
        hitcheck.g = 5;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_db_k.frame8 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 28;
        hitcheck.a = 3;
        hitcheck.g = 5;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_db_k.frame10 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 28;
        hitcheck.a = 3;
        hitcheck.g = 5;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_db_k.frame14 = function (mc) {
        mc.stop();
    };
    Terry_db_k.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_db_k;
}());
__reflect(Terry_db_k.prototype, "Terry_db_k");
//# sourceMappingURL=Terry_db_k.js.map