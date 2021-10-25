var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_s3 = (function () {
    function Moriya_sk_s3() {
    }
    Moriya_sk_s3.addSprite4195 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_sk_s3.frame2, 3, Moriya_sk_s3.frame3, 4, Moriya_sk_s3.frame4, 14, Moriya_sk_s3.frame14, 15, Moriya_sk_s3.frame15, 29, Moriya_sk_s3.frame29, 30, Moriya_sk_s3.frame30, 33, Moriya_sk_s3.frame33, 39, Moriya_sk_s3.frame39, 42, Moriya_sk_s3.frame42, 48, Moriya_sk_s3.frame48, 51, Moriya_sk_s3.frame51, 53, Moriya_sk_s3.frame53, 56, Moriya_sk_s3.frame56, 62, Moriya_sk_s3.frame62, 78, Moriya_sk_s3.frame78]);
        return;
    };
    Moriya_sk_s3.frame2 = function (mc) {
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
    Moriya_sk_s3.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_speed1";
        _parentRole.checkTouch_stop = true;
        //continueHit = true;
    };
    Moriya_sk_s3.frame4 = function (mc) {
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
    Moriya_sk_s3.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Moriya_sk_s3.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_black";
    };
    Moriya_sk_s3.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_s3.frame30 = function (mc) {
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
    };
    Moriya_sk_s3.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt1";
        htcheck.flag = "";
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 2;
        htcheck.isObj = false;
        htcheck.hitType = "m_slash_0";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s3.frame39 = function (mc) {
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
    };
    Moriya_sk_s3.frame42 = function (mc) {
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
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 2;
        htcheck.isObj = false;
        htcheck.hitType = "m_slash_0_2";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s3.frame48 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_black";
    };
    Moriya_sk_s3.frame51 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 45;
        a3395.flag = "";
        a3395.target = "";
        Moriya_a4186.getInstance(_parentRole)._name = "Moriya_a4186";
        var a4188 = Moriya_a4188.getInstance(_parentRole);
        a4188.status_1 = "hurt2";
        a4188.flag = "s_catch";
        a4188.hurt = true;
        a4188.land = false;
        a4188.downHit = false;
        a4188.func = null;
        a4188.posObj = "Moriya_a4186";
        //continueHit = false;
    };
    Moriya_sk_s3.frame53 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = "";
        htcheck.end_status = "getup2";
        htcheck.Vx = 0;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 10;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 2;
        htcheck.isObj = false;
        htcheck.hitType = "m_slash_1";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s3.frame56 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Moriya_a4023.getInstance(_parentRole);
        a4023.Vx = 30;
        a4023.Vy = 0;
        a4023.Va = 7;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "none";
    };
    Moriya_sk_s3.frame62 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
    };
    Moriya_sk_s3.frame78 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_s3;
}());
__reflect(Moriya_sk_s3.prototype, "Moriya_sk_s3");
//# sourceMappingURL=Moriya_sk_s3.js.map