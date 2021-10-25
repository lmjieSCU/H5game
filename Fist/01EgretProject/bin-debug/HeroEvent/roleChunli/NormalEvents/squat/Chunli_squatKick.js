var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_squatKick = (function () {
    function Chunli_squatKick() {
    }
    Chunli_squatKick.addSprite14848 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_squatKick.frame3, 4, Chunli_squatKick.frame4, 16, Chunli_squatKick.frame16]);
        return;
    };
    Chunli_squatKick.frame3 = function (mc) {
        //_level0.p_snd.start();
    };
    Chunli_squatKick.frame4 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "down";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt5";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 31;
        htcheck.a = 0;
        htcheck.Vx = 12;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        // soundArray = [];
        // soundArray[0] = "chunli_att_l2";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_squatKick.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_squatKick;
}());
__reflect(Chunli_squatKick.prototype, "Chunli_squatKick");
//# sourceMappingURL=Chunli_squatKick.js.map