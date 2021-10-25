var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_s2 = (function () {
    function K_sk_s2() {
    }
    K_sk_s2.addSprite5787 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_sk_s2.frame1, 3, K_sk_s2.frame3, 6, K_sk_s2.frame6, 9, K_sk_s2.frame9, 11, K_sk_s2.frame11, 12, K_sk_s2.frame12,
            13, K_sk_s2.frame13, 18, K_sk_s2.frame18, 24, K_sk_s2.frame24, 25, K_sk_s2.frame25, 27, K_sk_s2.frame27, 38, K_sk_s2.frame38]);
        return;
    };
    K_sk_s2.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
        var a985 = K_a985.getInstance(_parentRole);
        a985.s_type = "s1";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    };
    K_sk_s2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a594 = K_a594.getInstance(_parentRole);
        a594.Vx = -30;
        a594.flag = "";
        a594.target = "";
    };
    K_sk_s2.frame6 = function (mc) {
        // let _parentRole = EventUtil.getRole_Parent(mc);
        // if (_parentRole == null) {
        //     return;
        // }
    };
    K_sk_s2.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a5755.getInstance(_parentRole).effName = "bgEff_speed1";
    };
    K_sk_s2.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a594 = K_a594.getInstance(_parentRole);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";
    };
    K_sk_s2.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a863.getInstance(_parentRole).name = "eff_rush";
        mc.visible = false;
        FightMainRender.getInstance().Add(mc, K_sk_s2.Onenterframe12, [mc, _parentRole]);
    };
    K_sk_s2.Onenterframe12 = function (mc, _parentRole) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_parentRole.onHit) {
            mc.visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s2.Onenterframe12);
        }
        else if (_parentRole.opp.onHit) {
            mc.visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s2.Onenterframe12);
        }
        if (_parentRole.status_3 == "stand") {
            mc.visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s2.Onenterframe12);
        }
    };
    K_sk_s2.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 5;
        hitcheck.Vy = 50;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 5;
        hitcheck.d_rate = 4;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s2.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a5765 = K_a5765.getInstance(_parentRole);
        a5765.shadow_name = "shadow1";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    };
    K_sk_s2.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 40;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    };
    K_sk_s2.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.visible = true;
        K_a5755.getInstance(_parentRole).effName = "";
    };
    K_sk_s2.frame27 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
        _parentRole.bodyTouch();
        _parentRole.stop_move_X1();
        mc.visible = true;
        FightMainRender.getInstance().Remove("static", K_sk_s2.Onenterframe12);
    };
    K_sk_s2.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_sk_s2;
}());
__reflect(K_sk_s2.prototype, "K_sk_s2");
//# sourceMappingURL=K_sk_s2.js.map