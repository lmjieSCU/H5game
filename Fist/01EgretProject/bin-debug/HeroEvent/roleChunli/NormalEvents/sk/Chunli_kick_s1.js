var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_kick_s1 = (function () {
    function Chunli_kick_s1() {
    }
    Chunli_kick_s1.addSprite14948 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Chunli_kick_s1.frame2, 3, Chunli_kick_s1.frame3, 8, Chunli_kick_s1.frame8, 15, Chunli_kick_s1.frame15, 20, Chunli_kick_s1.frame20]);
        return;
    };
    Chunli_kick_s1.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.pl_snd.start();
    };
    Chunli_kick_s1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 10;
        a4023.Vy = 30;
        a4023.Va = 0;
        a4023.Vg = 3;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land";
    };
    Chunli_kick_s1.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // soundArray = [];
        // soundArray[0] = "chunli_att_l3";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_kick_s1.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 4;
        htcheck.isObj = false;
        htcheck.hitPos = "up";
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
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.Vx = 18;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_kick_s1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Chunli_kick_s1;
}());
__reflect(Chunli_kick_s1.prototype, "Chunli_kick_s1");
//# sourceMappingURL=Chunli_kick_s1.js.map