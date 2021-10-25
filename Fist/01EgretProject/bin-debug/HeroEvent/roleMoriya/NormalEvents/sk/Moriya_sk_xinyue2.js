var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_xinyue2 = (function () {
    function Moriya_sk_xinyue2() {
    }
    Moriya_sk_xinyue2.addSprite3979 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Moriya_sk_xinyue2.frame5, 7, Moriya_sk_xinyue2.frame7, 9, Moriya_sk_xinyue2.frame9, 10, Moriya_sk_xinyue2.frame10, 34, Moriya_sk_xinyue2.frame34]);
        return;
    };
    Moriya_sk_xinyue2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2, "up");
    };
    Moriya_sk_xinyue2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 13;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_xinyue2.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 17;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_xinyue2.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    };
    Moriya_sk_xinyue2.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_xinyue2;
}());
__reflect(Moriya_sk_xinyue2.prototype, "Moriya_sk_xinyue2");
//# sourceMappingURL=Moriya_sk_xinyue2.js.map