var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_kick2 = (function () {
    function Chunli_kick2() {
    }
    Chunli_kick2.addSprite14789 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Chunli_kick2.frame4, 5, Chunli_kick2.frame5, 17, Chunli_kick2.frame20]);
        return;
    };
    Chunli_kick2.frame4 = function (mc) {
        //_level0.k_snd.start();
    };
    Chunli_kick2.frame5 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        // soundArray = [];
        // soundArray[0] = "chunli_att_l1";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_kick2.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_kick2;
}());
__reflect(Chunli_kick2.prototype, "Chunli_kick2");
//# sourceMappingURL=Chunli_kick2.js.map