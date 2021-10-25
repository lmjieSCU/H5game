var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_fdf_kl = (function () {
    function Terry_fdf_kl() {
    }
    Terry_fdf_kl.addSprite9106 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_fdf_kl.frame3, 5, Terry_fdf_kl.frame5, 17, Terry_fdf_kl.frame17, 33, Terry_fdf_kl.frame33]);
        return;
    };
    Terry_fdf_kl.frame3 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 30;
        hitcheck.a = 0;
        hitcheck.g = 3.5;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_fdf_kl.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Terry_a6617.getInstance(_parentRole);
        a6617.Vx = 15;
        a6617.Vy = 35;
        a6617.Va = 0;
        a6617.Vg = 3.5;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "frame_end";
    };
    Terry_fdf_kl.frame17 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 20;
        hitcheck.Vy = -8;
        hitcheck.a = 0;
        hitcheck.g = 6;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_fdf_kl.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_fdf_kl;
}());
__reflect(Terry_fdf_kl.prototype, "Terry_fdf_kl");
//# sourceMappingURL=Terry_fdf_kl.js.map