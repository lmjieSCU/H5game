var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_dongjie = (function () {
    function Kula_sk_dongjie() {
    }
    Kula_sk_dongjie.addSprite19488 = function (mc, own_role) {
        mc.addFrameScript(mc, [10, Kula_sk_dongjie.frame10, 29, Kula_sk_dongjie.frame29]);
        return;
    };
    Kula_sk_dongjie.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 25;
        htcheck.Vy = 15;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.7;
        htcheck.isObj = true;
        htcheck.hitType = "hitfire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_dongjie.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_dongjie;
}());
__reflect(Kula_sk_dongjie.prototype, "Kula_sk_dongjie");
//# sourceMappingURL=Kula_sk_dongjie.js.map