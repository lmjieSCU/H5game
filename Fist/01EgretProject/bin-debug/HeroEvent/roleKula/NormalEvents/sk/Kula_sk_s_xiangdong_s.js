var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_xiangdong_s = (function () {
    function Kula_sk_s_xiangdong_s() {
    }
    Kula_sk_s_xiangdong_s.addSprite19711 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_sk_s_xiangdong_s.frame1, 2, Kula_sk_s_xiangdong_s.frame2, 4, Kula_sk_s_xiangdong_s.frame4, 5, Kula_sk_s_xiangdong_s.frame5, 6, Kula_sk_s_xiangdong_s.frame6, 7, Kula_sk_s_xiangdong_s.frame7, 8, Kula_sk_s_xiangdong_s.frame8, 9, Kula_sk_s_xiangdong_s.frame9, 13, Kula_sk_s_xiangdong_s.frame13, 14, Kula_sk_s_xiangdong_s.frame14, 17, Kula_sk_s_xiangdong_s.frame17, 18, Kula_sk_s_xiangdong_s.frame18, 20, Kula_sk_s_xiangdong_s.frame20, 21, Kula_sk_s_xiangdong_s.frame21, 22, Kula_sk_s_xiangdong_s.frame22, 28, Kula_sk_s_xiangdong_s.frame28, 29, Kula_sk_s_xiangdong_s.frame29, 33, Kula_sk_s_xiangdong_s.frame33, 35, Kula_sk_s_xiangdong_s.frame35, 36, Kula_sk_s_xiangdong_s.frame36, 37, Kula_sk_s_xiangdong_s.frame37, 42, Kula_sk_s_xiangdong_s.frame42, 43, Kula_sk_s_xiangdong_s.frame43, 46, Kula_sk_s_xiangdong_s.frame46, 52, Kula_sk_s_xiangdong_s.frame52, 54, Kula_sk_s_xiangdong_s.frame54, 56, Kula_sk_s_xiangdong_s.frame56, 57, Kula_sk_s_xiangdong_s.frame57, 59, Kula_sk_s_xiangdong_s.frame59, 61, Kula_sk_s_xiangdong_s.frame61, 70, Kula_sk_s_xiangdong_s.frame70]);
        return;
    };
    Kula_sk_s_xiangdong_s.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 20;
        a18962.flag = "";
        a18962.target = "";
        //continueHit = true;
    };
    Kula_sk_s_xiangdong_s.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1_s";
        a19530.f_time = 20;
        a19530.bgType = "1";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_s_xiangdong_s.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_wuyayao";
    };
    Kula_sk_s_xiangdong_s.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 18;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "bgEff_up3";
    };
    Kula_sk_s_xiangdong_s.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 18;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 15;
        a19418.Vy = 17;
        a19418.Va = 0;
        a19418.Vg = 0;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "none";
    };
    Kula_sk_s_xiangdong_s.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 30;
        htcheck.Vy = 32;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 10;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Kula_sk_s_xiangdong_s.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 15;
        a18962.flag = "";
        a18962.target = "";
    };
    Kula_sk_s_xiangdong_s.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_wuyayao";
    };
    Kula_sk_s_xiangdong_s.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 18;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 18;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 15;
        a19418.Vy = 27;
        a19418.Va = 0;
        a19418.Vg = 0;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "none";
    };
    Kula_sk_s_xiangdong_s.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 16;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 4;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Kula_sk_s_xiangdong_s.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 20;
        a18962.flag = "";
        a18962.target = "";
        Kula_a19439.getInstance(_parentRole).name = "kula_wuyayao";
    };
    Kula_sk_s_xiangdong_s.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 10;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame35 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 18;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 15;
        a19418.Vy = 35;
        a19418.Va = 0;
        a19418.Vg = 4.5;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "none";
    };
    Kula_sk_s_xiangdong_s.frame37 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 33;
        htcheck.a = 3;
        htcheck.g = 3.5;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.9;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame42 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
    };
    Kula_sk_s_xiangdong_s.frame43 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 15;
        a19418.Vy = 22;
        a19418.Va = 0;
        a19418.Vg = 3.5;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    };
    Kula_sk_s_xiangdong_s.frame46 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 10;
        htcheck.Vy = 10;
        htcheck.a = 4;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "up";
    };
    Kula_sk_s_xiangdong_s.frame52 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 20;
        htcheck.Vy = -17;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        //continueHit = false;
    };
    Kula_sk_s_xiangdong_s.frame54 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s3";
        a19530.f_time = 20;
        a19530.bgType = "0";
        a19530.roleName = "";
        a19530.faceName = "";
        //continueHit = false;
    };
    Kula_sk_s_xiangdong_s.frame56 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 30;
        a19418.Vy = -17;
        a19418.Va = 0;
        a19418.Vg = 4;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land3";
    };
    Kula_sk_s_xiangdong_s.frame57 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 3.5;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame59 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 3.5;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame61 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = -25;
        htcheck.a = 3;
        htcheck.g = 3.5;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_xiangdong_s.frame70 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_sk_s_xiangdong_s;
}());
__reflect(Kula_sk_s_xiangdong_s.prototype, "Kula_sk_s_xiangdong_s");
//# sourceMappingURL=Kula_sk_s_xiangdong_s.js.map