var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_df_k1 = (function () {
    function Terry_df_k1() {
    }
    Terry_df_k1.addSprite9156 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Terry_df_k1.frame5, 11, Terry_df_k1.frame11, 22, Terry_df_k1.frame22]);
        return;
    };
    Terry_df_k1.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 23;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_df_k1.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 25;
        hitcheck.a = 0;
        hitcheck.g = 3;
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
        hitcheck.hitPos = "";
    };
    Terry_df_k1.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Terry_df_k1;
}());
__reflect(Terry_df_k1.prototype, "Terry_df_k1");
//# sourceMappingURL=Terry_df_k1.js.map