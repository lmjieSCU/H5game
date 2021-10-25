var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_s2 = (function () {
    function Moriya_sk_s2() {
    }
    Moriya_sk_s2.addSprite4183 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Moriya_sk_s2.frame5, 7, Moriya_sk_s2.frame7, 8, Moriya_sk_s2.frame8, 12, Moriya_sk_s2.frame12, 15, Moriya_sk_s2.frame15, 30, Moriya_sk_s2.frame30, 31, Moriya_sk_s2.frame31, 34, Moriya_sk_s2.frame34, 38, Moriya_sk_s2.frame38, 39, Moriya_sk_s2.frame39, 40, Moriya_sk_s2.frame40, 45, Moriya_sk_s2.frame45, 48, Moriya_sk_s2.frame48, 53, Moriya_sk_s2.frame53, 55, Moriya_sk_s2.frame55, 60, Moriya_sk_s2.frame60, 62, Moriya_sk_s2.frame62, 67, Moriya_sk_s2.frame67, 69, Moriya_sk_s2.frame69, 73, Moriya_sk_s2.frame73, 76, Moriya_sk_s2.frame76, 80, Moriya_sk_s2.frame80, 81, Moriya_sk_s2.frame81, 84, Moriya_sk_s2.frame84, 112, Moriya_sk_s2.frame112]);
        return;
    };
    Moriya_sk_s2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s1";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Moriya";
        a4178.faceName = "";
    };
    Moriya_sk_s2.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 12;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_s2.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    };
    Moriya_sk_s2.frame12 = function (mc) {
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
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 10;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.onHit) {
            mc.gotoAndStop("hit");
        }
    };
    Moriya_sk_s2.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_s2.frame31 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "bgEff_speed1";
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 20;
        a3395.flag = "";
        a3395.target = "";
        //_level0.p_snd.start();
    };
    Moriya_sk_s2.frame34 = function (mc) {
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
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 5;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_s2.frame39 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s2.frame40 = function (mc) {
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
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame45 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s2.frame48 = function (mc) {
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
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame53 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s2.frame55 = function (mc) {
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
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame60 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s2.frame62 = function (mc) {
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
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame67 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s2.frame69 = function (mc) {
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
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame73 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_s2.frame76 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 15;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_s2.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Moriya_sk_s2.frame81 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 17;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "m_moonlight";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s2.frame84 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a3196.getInstance(_parentRole).effName = "";
    };
    Moriya_sk_s2.frame112 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_s2;
}());
__reflect(Moriya_sk_s2.prototype, "Moriya_sk_s2");
//# sourceMappingURL=Moriya_sk_s2.js.map