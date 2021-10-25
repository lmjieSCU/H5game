var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_punch = (function () {
    function Terry_punch() {
    }
    Terry_punch.addSprite8676 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Terry_punch.frame1, 3, Terry_punch.frame3, 4, Terry_punch.frame4, 12, Terry_punch.frame16]);
        return;
    };
    Terry_punch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a8669.getInstance(_parentRole).flag = "punch2";
    };
    Terry_punch.frame3 = function () {
        //_level0.p_snd.start();
    };
    Terry_punch.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 25;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        return;
    };
    Terry_punch.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_punch;
}());
__reflect(Terry_punch.prototype, "Terry_punch");
//# sourceMappingURL=Terry_punch.js.map