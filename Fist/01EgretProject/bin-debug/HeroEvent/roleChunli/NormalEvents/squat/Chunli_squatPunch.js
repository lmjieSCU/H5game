var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_squatPunch = (function () {
    function Chunli_squatPunch() {
    }
    Chunli_squatPunch.addSprite14810 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Chunli_squatPunch.frame2, 3, Chunli_squatPunch.frame3, 5, Chunli_squatPunch.frame5, 16, Chunli_squatPunch.frame16]);
        return;
    };
    Chunli_squatPunch.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 15;
        a4023.Vy = 0;
        a4023.Va = 3;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "";
    };
    Chunli_squatPunch.frame3 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 4;
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
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        // soundArray = [];
        // soundArray[0] = "chunli_att_l3";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_squatPunch.frame5 = function (mc) {
        //_level0.p_snd.start();
    };
    Chunli_squatPunch.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_squatPunch;
}());
__reflect(Chunli_squatPunch.prototype, "Chunli_squatPunch");
//# sourceMappingURL=Chunli_squatPunch.js.map