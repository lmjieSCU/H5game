var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_kick2 = (function () {
    function Terry_kick2() {
    }
    Terry_kick2.addSprite8751 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_kick2.frame3, 5, Terry_kick2.frame5, 20, Terry_kick2.frame20]);
        return;
    };
    Terry_kick2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.k_snd.start();
        var a6617 = Terry_a6617.getInstance(_parentRole);
        a6617.Vx = 10;
        a6617.Vy = 0;
        a6617.Va = 0;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.posY2 = "";
        a6617.end_status = "none";
    };
    Terry_kick2.frame5 = function (mc) {
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
        hitcheck.freezeTime = 6;
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
    Terry_kick2.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_kick2;
}());
__reflect(Terry_kick2.prototype, "Terry_kick2");
//# sourceMappingURL=Terry_kick2.js.map