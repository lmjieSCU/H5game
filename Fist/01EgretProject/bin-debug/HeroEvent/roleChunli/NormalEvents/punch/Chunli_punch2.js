var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_punch2 = (function () {
    function Chunli_punch2() {
    }
    Chunli_punch2.addSprite14726 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Chunli_punch2.frame4, 5, Chunli_punch2.frame5, 12, Chunli_punch2.frame12, 24, Chunli_punch2.frame26]);
        return;
    };
    Chunli_punch2.frame4 = function (mc) {
        //_level0.p_snd.start();
    };
    Chunli_punch2.frame5 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.Vx = 7;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        // soundArray = [];
        // soundArray[0] = "chunli_att_l3";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_punch2.frame12 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 5;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_punch2.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_punch2;
}());
__reflect(Chunli_punch2.prototype, "Chunli_punch2");
//# sourceMappingURL=Chunli_punch2.js.map