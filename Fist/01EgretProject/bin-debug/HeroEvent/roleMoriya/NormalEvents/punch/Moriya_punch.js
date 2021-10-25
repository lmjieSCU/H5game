var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_punch = (function () {
    function Moriya_punch() {
    }
    Moriya_punch.addSprite3612 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Moriya_punch.frame1, 5, Moriya_punch.frame5, 7, Moriya_punch.frame7, 9, Moriya_punch.frame9, 21, Moriya_punch.frame21]);
        return;
    };
    Moriya_punch.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3563 = Moriya_a3563.getInstance(_parentRole);
        a3563.flag = "punch2";
    };
    Moriya_punch.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3565 = Moriya_a3565.getInstance(_parentRole);
        a3565.soundArray = [];
        a3565.soundArray[0] = "m_hit_v_h1";
        a3565.soundArray[1] = "m_hit_v_h2";
        a3565.soundArray[2] = "none";
        a3565.startPos = 0;
        a3565.loop = 1;
    };
    Moriya_punch.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // _level0.p_snd.start();
    };
    Moriya_punch.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_punch.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_punch;
}());
__reflect(Moriya_punch.prototype, "Moriya_punch");
//# sourceMappingURL=Moriya_punch.js.map