var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_kick_l = (function () {
    function Chunli_kick_l() {
    }
    Chunli_kick_l.addSprite14741 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_kick_l.frame3, 4, Chunli_kick_l.frame4, 9, Chunli_kick_l.frame12]);
        return;
    };
    Chunli_kick_l.frame3 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 2;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitfire_l";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = "s2";
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.Vx = 15;
        htcheck.freezeTime2 = 2;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        // soundArray = [];
        // soundArray[0] = "chunli_att_l1";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_kick_l.frame4 = function (mc) {
        //_level0.kl_snd.start();
    };
    Chunli_kick_l.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_kick_l;
}());
__reflect(Chunli_kick_l.prototype, "Chunli_kick_l");
//# sourceMappingURL=Chunli_kick_l.js.map