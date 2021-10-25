var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_punch = (function () {
    function Chunli_punch() {
    }
    Chunli_punch.addSprite14695 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_punch.frame1, 3, Chunli_punch.frame3, 5, Chunli_punch.frame5, 15, Chunli_punch.frame18]);
        return;
    };
    Chunli_punch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3563.getInstance(_parentRole).flag = "punch2";
    };
    Chunli_punch.frame3 = function (mc) {
        //_level0.p_snd.start();
    };
    Chunli_punch.frame5 = function (mc) {
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
        htcheck.d_rate = 1.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
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
    Chunli_punch.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_punch;
}());
__reflect(Chunli_punch.prototype, "Chunli_punch");
//# sourceMappingURL=Chunli_punch.js.map