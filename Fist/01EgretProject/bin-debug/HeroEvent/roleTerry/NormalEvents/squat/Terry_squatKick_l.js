var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_squatKick_l = (function () {
    function Terry_squatKick_l() {
    }
    Terry_squatKick_l.addSprite8775 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Terry_squatKick_l.frame2, 3, Terry_squatKick_l.frame3, 7, Terry_squatKick_l.frame7]);
        return;
    };
    Terry_squatKick_l.frame2 = function () {
        //_level0.pl_snd.start();
    };
    Terry_squatKick_l.frame3 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = "s2";
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitfire_l";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
    };
    Terry_squatKick_l.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_squatKick_l;
}());
__reflect(Terry_squatKick_l.prototype, "Terry_squatKick_l");
//# sourceMappingURL=Terry_squatKick_l.js.map