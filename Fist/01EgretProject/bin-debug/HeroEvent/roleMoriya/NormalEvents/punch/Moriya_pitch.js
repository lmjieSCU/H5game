var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_pitch = (function () {
    function Moriya_pitch() {
    }
    Moriya_pitch.addSprite3775 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Moriya_pitch.frame1, 6, Moriya_pitch.frame6, 7, Moriya_pitch.frame7, 9, Moriya_pitch.frame9, 38, Moriya_pitch.frame38]);
        return;
    };
    Moriya_pitch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3742 = Moriya_a3742.getInstance(_parentRole);
        a3742.hurt = false;
        a3742.land = true;
        a3742.downHit = false;
        a3742.status_1 = "hurt2";
        a3742.flag = "s_catch";
    };
    Moriya_pitch.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3565 = Moriya_a3565.getInstance(_parentRole);
        a3565.soundArray = [];
        a3565.soundArray[0] = "m_hit_v_h1";
        a3565.soundArray[1] = "m_hit_v_h2";
        a3565.startPos = 0;
        a3565.loop = 1;
    };
    Moriya_pitch.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_pitch.frame9 = function (mc) {
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
        htcheck.hitType = "";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_pitch.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_pitch;
}());
__reflect(Moriya_pitch.prototype, "Moriya_pitch");
//# sourceMappingURL=Moriya_pitch.js.map