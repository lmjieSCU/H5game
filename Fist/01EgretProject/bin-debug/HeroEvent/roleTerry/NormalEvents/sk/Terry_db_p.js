var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_db_p = (function () {
    function Terry_db_p() {
    }
    Terry_db_p.addSprite9025 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, Terry_db_p.frame11, 13, Terry_db_p.frame13, 36, Terry_db_p.frame36]);
        return;
    };
    Terry_db_p.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Terry_a6617.getInstance(_parentRole);
        a6617.Vx = 35;
        a6617.Vy = 12;
        a6617.Va = 0;
        a6617.Vg = 2;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "frame_end";
    };
    Terry_db_p.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 20;
        hitcheck.a = 0;
        hitcheck.g = 3;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "land";
        //缺少技能
        Terry_a6914.getInstance(_parentRole).name = "terry_fireEff2";
    };
    Terry_db_p.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_db_p;
}());
__reflect(Terry_db_p.prototype, "Terry_db_p");
//# sourceMappingURL=Terry_db_p.js.map