var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_s_q1 = (function () {
    function Moriya_sk_s_q1() {
    }
    Moriya_sk_s_q1.addSprite4228 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_sk_s_q1.frame2, 3, Moriya_sk_s_q1.frame3, 4, Moriya_sk_s_q1.frame4, 14, Moriya_sk_s_q1.frame14, 15, Moriya_sk_s_q1.frame15, 24, Moriya_sk_s_q1.frame24, 29, Moriya_sk_s_q1.frame29, 30, Moriya_sk_s_q1.frame30, 31, Moriya_sk_s_q1.frame31, 32, Moriya_sk_s_q1.frame32, 35, Moriya_sk_s_q1.frame35, 48, Moriya_sk_s_q1.frame48, 66, Moriya_sk_s_q1.frame66, 68, Moriya_sk_s_q1.frame68, 93, Moriya_sk_s_q1.frame93, 105, Moriya_sk_s_q1.frame105, 106, Moriya_sk_s_q1.frame106, 111, Moriya_sk_s_q1.frame111, 121, Moriya_sk_s_q1.frame121]);
        return;
    };
    Moriya_sk_s_q1.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s2";
        a4178.f_time = 20;
        a4178.bgType = "2";
        a4178.roleName = "Moriya";
        a4178.faceName = "";
    };
    Moriya_sk_s_q1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_speed1";
        _parentRole.checkTouch_stop = true;
        //continueHit = true;
    };
    Moriya_sk_s_q1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4185 = Moriya_a4185.getInstance(_parentRole);
        a4185.Vx = 50;
        a4185.Vy = 0;
        a4185.Va = 0;
        a4185.S = 600;
        a4185.dis = 0;
        a4185.attFrame = "hit";
        a4185.endFrame = "nohit";
        a4185.target = "stand";
        a4185.nohit_status = "";
    };
    Moriya_sk_s_q1.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Moriya_sk_s_q1.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_black";
        var a4023 = Moriya_a4023.getInstance(_parentRole);
        a4023.Vx = 30;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "none";
    };
    Moriya_sk_s_q1.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
    };
    Moriya_sk_s_q1.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_s_q1.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = "";
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q1.frame31 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4186.getInstance(_parentRole)._name = "Moriya_a4186";
        var a4188 = Moriya_a4188.getInstance(_parentRole);
        a4188.status_1 = "hurt2";
        a4188.flag = "s_catch";
        a4188.hurt = true;
        a4188.land = false;
        a4188.downHit = false;
        a4188.func = null;
        a4188.posObj = "Moriya_a4186";
        Moriya_a4202.getInstance(_parentRole).nohitFrame = "nohit2";
    };
    Moriya_sk_s_q1.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = "";
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 20;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q1.frame35 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4196.getInstance(_parentRole).name = "moriya_slash_m3";
        var a4023 = Moriya_a4023.getInstance(_parentRole);
        a4023.Vx = 20;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "none";
    };
    Moriya_sk_s_q1.frame48 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_black";
        Moriya_a4186.getInstance(_parentRole)._name = "Moriya_a4186";
        var a4188 = Moriya_a4188.getInstance(_parentRole);
        a4188.status_1 = "hurt2";
        a4188.flag = "s_catch";
        a4188.hurt = true;
        a4188.land = false;
        a4188.downHit = false;
        a4188.func = null;
        a4188.posObj = "Moriya_a4186";
    };
    Moriya_sk_s_q1.frame66 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s3";
        a4178.f_time = 20;
        a4178.bgType = "0";
        a4178.roleName = "";
        a4178.faceName = "";
    };
    Moriya_sk_s_q1.frame68 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4196.getInstance(_parentRole).name = "m_slash_3_2";
        //continueHit = false;
    };
    Moriya_sk_s_q1.frame93 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
    };
    Moriya_sk_s_q1.frame105 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_s_q1.frame106 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_black";
        var a4023 = Moriya_a4023.getInstance(_parentRole);
        a4023.Vx = 35;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "none";
    };
    Moriya_sk_s_q1.frame111 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
    };
    Moriya_sk_s_q1.frame121 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_s_q1;
}());
__reflect(Moriya_sk_s_q1.prototype, "Moriya_sk_s_q1");
//# sourceMappingURL=Moriya_sk_s_q1.js.map