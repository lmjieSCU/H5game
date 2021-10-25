var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_bdf_k = (function () {
    function Terry_bdf_k() {
    }
    Terry_bdf_k.addSprite8896 = function (mc, own_role) {
        mc.addFrameScript(mc, [7, Terry_bdf_k.frame7, 9, Terry_bdf_k.frame9, 16, Terry_bdf_k.frame16, 20, Terry_bdf_k.frame20, 33, Terry_bdf_k.frame33]);
        return;
    };
    Terry_bdf_k.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 28;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_bdf_k.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 25;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.8;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
        hitcheck.nohit_skills = [];
        hitcheck.nohit_skills[0] = "bdf_k";
        hitcheck.nohit_status = [];
        hitcheck.nohit_status[0] = "getup1";
        hitcheck.nohit_status[1] = "hurt3";
    };
    Terry_bdf_k.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 20;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_bdf_k.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 48;
        hitcheck.a = 0;
        hitcheck.g = 4;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.4;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_bdf_k.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Terry_bdf_k;
}());
__reflect(Terry_bdf_k.prototype, "Terry_bdf_k");
//# sourceMappingURL=Terry_bdf_k.js.map