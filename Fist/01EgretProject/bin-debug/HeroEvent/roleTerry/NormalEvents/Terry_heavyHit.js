var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_heavyHit = (function () {
    function Terry_heavyHit() {
    }
    Terry_heavyHit.addSprite8838 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_heavyHit.frame3, 5, Terry_heavyHit.frame5, 7, Terry_heavyHit.frame7, 12, Terry_heavyHit.frame12, 19, Terry_heavyHit.frame19, 25, Terry_heavyHit.frame25]);
        return;
    };
    Terry_heavyHit.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 40;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_heavyHit.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 6;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_heavyHit.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 5;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_heavyHit.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 12;
        a6433.flag = "";
        a6433.target = "";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 17;
        hitcheck.Vy = 40;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_heavyHit.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 3;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_heavyHit.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_heavyHit;
}());
__reflect(Terry_heavyHit.prototype, "Terry_heavyHit");
//# sourceMappingURL=Terry_heavyHit.js.map