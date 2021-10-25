var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_kick = (function () {
    function Chunli_kick() {
    }
    Chunli_kick.addSprite14764 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_kick.frame1, 2, Chunli_kick.frame2, 4, Chunli_kick.frame4, 7, Chunli_kick.frame7, 17, Chunli_kick.frame20]);
        return;
    };
    Chunli_kick.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3563.getInstance(_parentRole).flag = "kick2";
    };
    Chunli_kick.frame2 = function (mc) {
        // soundArray = [];
        // soundArray[0] = "chunli_att_l1";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_kick.frame4 = function (mc) {
        //_level0.k_snd.start();
    };
    Chunli_kick.frame7 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 6;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt2";
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
    };
    Chunli_kick.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_kick;
}());
__reflect(Chunli_kick.prototype, "Chunli_kick");
//# sourceMappingURL=Chunli_kick.js.map