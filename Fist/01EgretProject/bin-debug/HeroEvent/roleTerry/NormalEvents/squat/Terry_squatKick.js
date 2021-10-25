var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_squatKick = (function () {
    function Terry_squatKick() {
    }
    Terry_squatKick.addSprite8768 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_squatKick.frame3, 8, Terry_squatKick.frame8, 21, Terry_squatKick.frame21]);
        return;
    };
    Terry_squatKick.frame3 = function () {
        //_level0.p_snd.start();
    };
    Terry_squatKick.frame8 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt5";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup1";
        hitcheck.Vx = 7;
        hitcheck.Vy = 31;
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
        hitcheck.hitPos = "down";
    };
    Terry_squatKick.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_squatKick;
}());
__reflect(Terry_squatKick.prototype, "Terry_squatKick");
//# sourceMappingURL=Terry_squatKick.js.map