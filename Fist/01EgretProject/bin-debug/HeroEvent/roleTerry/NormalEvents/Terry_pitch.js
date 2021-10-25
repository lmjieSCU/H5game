var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_pitch = (function () {
    function Terry_pitch() {
    }
    Terry_pitch.addSprite8803 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Terry_pitch.frame1, 12, Terry_pitch.frame12, 16, Terry_pitch.frame16, 24, Terry_pitch.frame24]);
        return;
    };
    Terry_pitch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6754 = Terry_a6754.getInstance(_parentRole);
        a6754.hurt = false;
        a6754.land = true;
        a6754.downHit = false;
        a6754.status_1 = "hurt2";
        a6754.flag = "s_catch";
    };
    Terry_pitch.frame12 = function () {
        //_level0.p_snd.start();
    };
    Terry_pitch.frame16 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt5";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 30;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
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
    Terry_pitch.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_pitch;
}());
__reflect(Terry_pitch.prototype, "Terry_pitch");
//# sourceMappingURL=Terry_pitch.js.map