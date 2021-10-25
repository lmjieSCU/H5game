var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_pitch = (function () {
    function Kula_pitch() {
    }
    Kula_pitch.addSprite19353 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_pitch.frame1, 16, Kula_pitch.frame16, 17, Kula_pitch.frame17, 44, Kula_pitch.frame44]);
        return;
    };
    Kula_pitch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6754 = Kula_a6754.getInstance(_parentRole);
        a6754.hurt = false;
        a6754.land = true;
        a6754.downHit = false;
        a6754.status_1 = "hurt2";
        a6754.flag = "s_catch";
    };
    Kula_pitch.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Kula_pitch.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt4";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = -30;
        htcheck.Vy = 40;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_pitch.frame44 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_pitch;
}());
__reflect(Kula_pitch.prototype, "Kula_pitch");
//# sourceMappingURL=Kula_pitch.js.map