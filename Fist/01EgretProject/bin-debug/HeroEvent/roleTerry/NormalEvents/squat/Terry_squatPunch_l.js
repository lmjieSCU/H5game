var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_squatPunch_l = (function () {
    function Terry_squatPunch_l() {
    }
    Terry_squatPunch_l.addSprite8761 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_squatPunch_l.frame3, 6, Terry_squatPunch_l.frame6]);
        return;
    };
    Terry_squatPunch_l.frame3 = function (mc) {
        //_level0.pl_snd.start();
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = "s2";
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 1;
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
        hitcheck.hitPos = "";
    };
    Terry_squatPunch_l.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_squatPunch_l;
}());
__reflect(Terry_squatPunch_l.prototype, "Terry_squatPunch_l");
//# sourceMappingURL=Terry_squatPunch_l.js.map