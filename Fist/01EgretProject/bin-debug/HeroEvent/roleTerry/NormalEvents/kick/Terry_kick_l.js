var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_kick_l = (function () {
    function Terry_kick_l() {
    }
    Terry_kick_l.addSprite8690 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Terry_kick_l.frame4, 5, Terry_kick_l.frame5, 12, Terry_kick_l.frame12]);
        return;
    };
    Terry_kick_l.frame4 = function () {
        //_level0.kl_snd.start();
    };
    Terry_kick_l.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = "s2";
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 2;
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
        return;
    };
    Terry_kick_l.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_kick_l;
}());
__reflect(Terry_kick_l.prototype, "Terry_kick_l");
//# sourceMappingURL=Terry_kick_l.js.map