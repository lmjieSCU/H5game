var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_s_q2 = (function () {
    function Moriya_sk_s_q2() {
    }
    Moriya_sk_s_q2.addSprite4229 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Moriya_sk_s_q2.frame5, 7, Moriya_sk_s_q2.frame7, 8, Moriya_sk_s_q2.frame8, 12, Moriya_sk_s_q2.frame12, 15, Moriya_sk_s_q2.frame15, 16, Moriya_sk_s_q2.frame16, 17, Moriya_sk_s_q2.frame17, 19, Moriya_sk_s_q2.frame19, 24, Moriya_sk_s_q2.frame24, 25, Moriya_sk_s_q2.frame25, 30, Moriya_sk_s_q2.frame30, 33, Moriya_sk_s_q2.frame33, 38, Moriya_sk_s_q2.frame38, 40, Moriya_sk_s_q2.frame40, 45, Moriya_sk_s_q2.frame45, 47, Moriya_sk_s_q2.frame47, 52, Moriya_sk_s_q2.frame52, 54, Moriya_sk_s_q2.frame54, 65, Moriya_sk_s_q2.frame65, 72, Moriya_sk_s_q2.frame72, 84, Moriya_sk_s_q2.frame84, 104, Moriya_sk_s_q2.frame104, 125, Moriya_sk_s_q2.frame125]);
        return;
    };
    Moriya_sk_s_q2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s2";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Moriya";
        a4178.faceName = "";
    };
    Moriya_sk_s_q2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 12;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_s_q2.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    };
    Moriya_sk_s_q2.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt1";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 13;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 8;
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
    Moriya_sk_s_q2.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4202.getInstance(_parentRole).nohitFrame = "nohit";
    };
    Moriya_sk_s_q2.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_speed1";
        Moriya_a4196.getInstance(_parentRole).name = "moriya_heti1";
        //_level0.p_snd.start();
    };
    Moriya_sk_s_q2.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4196.getInstance(_parentRole).name = "moriya_heti2";
    };
    Moriya_sk_s_q2.frame19 = function (mc) {
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
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 5;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q2.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s_q2.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt1";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 5;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q2.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s_q2.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt1";
        htcheck.flag = "";
        htcheck.end_status = "";
        htcheck.Vx = 5;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q2.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s_q2.frame40 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 5;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q2.frame45 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s_q2.frame47 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 10;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q2.frame52 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s_q2.frame54 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt1";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 10;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 10;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s_q2.frame65 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s_q2.frame72 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Moriya_sk_s_q2.frame84 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "";
    };
    Moriya_sk_s_q2.frame104 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_s_q2.frame125 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_s_q2;
}());
__reflect(Moriya_sk_s_q2.prototype, "Moriya_sk_s_q2");
//# sourceMappingURL=Moriya_sk_s_q2.js.map