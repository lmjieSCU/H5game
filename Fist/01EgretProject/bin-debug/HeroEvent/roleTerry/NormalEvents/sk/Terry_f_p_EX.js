var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_f_p_EX = (function () {
    function Terry_f_p_EX() {
    }
    Terry_f_p_EX.addSprite8853 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Terry_f_p_EX.frame2, 7, Terry_f_p_EX.frame7, 16, Terry_f_p_EX.frame16]);
        return;
    };
    Terry_f_p_EX.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 8;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_f_p_EX.frame7 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 20;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "up";
    };
    Terry_f_p_EX.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_f_p_EX;
}());
__reflect(Terry_f_p_EX.prototype, "Terry_f_p_EX");
//# sourceMappingURL=Terry_f_p_EX.js.map