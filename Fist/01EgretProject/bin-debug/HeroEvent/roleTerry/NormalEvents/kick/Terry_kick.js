var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_kick = (function () {
    function Terry_kick() {
    }
    Terry_kick.addSprite8715 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Terry_kick.frame1, 3, Terry_kick.frame3, 4, Terry_kick.frame4, 10, Terry_kick.frame10, 23, Terry_kick.frame23]);
        return;
    };
    Terry_kick.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a8669.getInstance(_parentRole).flag = "kick2";
    };
    Terry_kick.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var _a594 = Terry_a6433.getInstance(_parentRole);
        _a594.Vx = 10;
        _a594.flag = "";
        _a594.target = "";
    };
    Terry_kick.frame4 = function (mc) {
        //_level0.k_snd.start();
    };
    Terry_kick.frame10 = function (mc) {
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
        hitcheck.Vy = 30;
        hitcheck.a = 3;
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
        hitcheck.hitPos = "";
    };
    Terry_kick.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_kick;
}());
__reflect(Terry_kick.prototype, "Terry_kick");
//# sourceMappingURL=Terry_kick.js.map