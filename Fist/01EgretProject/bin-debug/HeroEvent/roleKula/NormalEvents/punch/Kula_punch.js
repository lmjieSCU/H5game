var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_punch = (function () {
    function Kula_punch() {
    }
    Kula_punch.addSprite19189 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_punch.frame1, 3, Kula_punch.frame3, 7, Kula_punch.frame7, 20, Kula_punch.frame20]);
        return;
    };
    Kula_punch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a8669 = Kula_a8669.getInstance(_parentRole);
        a8669.flag = "punch2";
    };
    Kula_punch.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // /_level0.p_snd.start();
    };
    Kula_punch.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_punch.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_punch;
}());
__reflect(Kula_punch.prototype, "Kula_punch");
//# sourceMappingURL=Kula_punch.js.map