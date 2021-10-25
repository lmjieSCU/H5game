var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_pitch = (function () {
    function Chunli_pitch() {
    }
    Chunli_pitch.addSprite14885 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_pitch.frame1, 9, Chunli_pitch.frame9, 10, Chunli_pitch.frame10, 12, Chunli_pitch.frame12, 22, Chunli_pitch.frame22, 40, Chunli_pitch.frame40]);
        return;
    };
    Chunli_pitch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a14862 = Chunli_a14862.getInstance(_parentRole);
        a14862.hurt = false;
        a14862.land = true;
        a14862.downHit = false;
        a14862.status_1 = "hurt2";
        a14862.flag = "s_catch";
    };
    Chunli_pitch.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // soundArray = [];
        // soundArray[0] = "chunli_att_l3";
        // soundArray[1] = "chunli_att_l1";
        // soundArray[2] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_pitch.frame10 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 2;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.Vx = 2;
        htcheck.freezeTime2 = 10;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch.frame12 = function (mc) {
        //_level0.p_snd.start();
    };
    Chunli_pitch.frame22 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 7;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.Vx = 18;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_pitch.frame40 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_pitch;
}());
__reflect(Chunli_pitch.prototype, "Chunli_pitch");
//# sourceMappingURL=Chunli_pitch.js.map