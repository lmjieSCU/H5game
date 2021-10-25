var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_s1 = (function () {
    function K_sk_s1() {
    }
    K_sk_s1.addSprite5766 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_sk_s1.frame1, 2, K_sk_s1.frame2,
            3, K_sk_s1.frame3, 4, K_sk_s1.frame4, 42, K_sk_s1.frame42, 44, K_sk_s1.frame44, 45, K_sk_s1.frame45,
            46, K_sk_s1.frame46, 47, K_sk_s1.frame47, 54, K_sk_s1.frame54, 55, K_sk_s1.frame55, 58, K_sk_s1.frame58, 71, K_sk_s1.frame71,
            73, K_sk_s1.frame73, 77, K_sk_s1.frame77, 79, K_sk_s1.frame79, 80, K_sk_s1.frame80, 81, K_sk_s1.frame81, 82, K_sk_s1.frame82,
            86, K_sk_s1.frame86, 88, K_sk_s1.frame88, 92, K_sk_s1.frame92, 95, K_sk_s1.frame95, 99, K_sk_s1.frame99]);
        mc["own_role"] = own_role;
        return;
    };
    K_sk_s1.frame1 = function (mc) {
        EventUtil.printMC(mc, "s1_1");
        if (mc["own_role"].keyCtrl == undefined || mc["own_role"].keyCtrl == null) {
            return;
        }
        mc["own_role"].keyCtrl.isKeyDown = true;
    };
    K_sk_s1.frame2 = function (mc) {
        EventUtil.printMC(mc, "s1_2");
        if (mc["own_role"].keyCtrl == undefined || mc["own_role"].keyCtrl == null) {
            return;
        }
        mc["own_role"].keyCtrl.isKeyDown = true;
    };
    K_sk_s1.frame3 = function (mc) {
        EventUtil.printMC(mc, "s1_3");
        if (mc["own_role"].keyCtrl == undefined || mc["own_role"].keyCtrl == null) {
            return;
        }
        mc["own_role"].keyCtrl.isKeyDown = true;
        var a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s1";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    };
    K_sk_s1.frame4 = function (mc) {
        EventUtil.printMC(mc, "s1_4");
        var hold_mc = K_a5740.getInstance(mc["own_role"]);
        hold_mc.key = mc["own_role"]._punchButton;
        hold_mc.holdFunc = function () { };
        hold_mc.releaseFunc = function (mc) {
            if (mc.getCurrFrame() > 35) {
                mc["own_role"].bodyMC.gotoAndStop("attack2");
            }
            else {
                mc["own_role"].bodyMC.gotoAndStop("attack");
            }
        };
        hold_mc.endFunc = function (mc) {
            mc["own_role"].bodyMC.gotoAndStop("attack2");
        };
    };
    K_sk_s1.frame42 = function (mc) {
        mc["own_role"].checkTouch_stop = true;
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    };
    K_sk_s1.frame44 = function (mc) {
        var a594 = K_a594.getInstance(mc["own_role"]);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";
    };
    K_sk_s1.frame45 = function (mc) {
        K_a863.getInstance(mc["own_role"]).name = "eff_rush";
    };
    K_sk_s1.frame46 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 5;
        hitcheck.Vy = 50;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 1;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 4.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s1.render_frame47 = function (mc) {
        if (_level0.inPause) {
            return undefined;
        }
        if (mc["own_role"].onHit) {
            FightMainRender.getInstance().Remove(mc, K_sk_s1.render_frame47);
        }
        else if (mc["own_role"].opp.onHit) {
            FightMainRender.getInstance().Remove(mc, K_sk_s1.render_frame47);
        }
    };
    K_sk_s1.frame47 = function (mc) {
        FightMainRender.getInstance().Add(mc, K_sk_s1.render_frame47, [mc, mc["own_role"]]);
    };
    K_sk_s1.frame54 = function (mc) {
        mc['own_role'].stop_move_X1();
        // K_sk_s1.mc.play();
    };
    K_sk_s1.frame55 = function (mc) {
        var a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = 25;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    };
    K_sk_s1.frame58 = function (mc) {
        K_a5755.getInstance(mc["own_role"]).effName = "";
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    };
    K_sk_s1.frame71 = function (mc) {
        FightMainRender.getInstance().Remove(mc, K_sk_s1.render_frame47);
        mc["own_role"].toStatus_switch("stand");
    };
    K_sk_s1.frame73 = function (mc) {
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    };
    K_sk_s1.frame77 = function (mc) {
        // K_sk_s1.mc.visible = false;
        FightMainRender.getInstance().Add(mc, K_sk_s1.Onenterframe77, [mc, mc["own_role"]]);
    };
    K_sk_s1.Onenterframe77 = function (mc) {
        //    if(_level0.inPause)
        //    {
        //       return undefined;
        //    }
        if (mc["own_role"].onHit) {
            // K_sk_s1.mc.visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s1.Onenterframe77);
        }
        else if (mc["own_role"].opp.onHit) {
            // K_sk_s1.mc.visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s1.Onenterframe77);
        }
    };
    K_sk_s1.frame79 = function (mc) {
        var a594 = K_a594.getInstance(mc["own_role"]);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";
        var a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow7";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    };
    K_sk_s1.frame80 = function (mc) {
        K_a863.getInstance(mc["own_role"]).name = "eff_rush";
    };
    K_sk_s1.frame81 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 5;
        hitcheck.Vy = 50;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 1;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 4.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "all";
    };
    K_sk_s1.frame82 = function (mc) {
    };
    K_sk_s1.frame86 = function (mc) {
        mc['own_role'].stop_move_X1();
        K_a5765.getInstance(mc["own_role"]).mc.visible = true;
    };
    K_sk_s1.frame88 = function (mc) {
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    };
    K_sk_s1.frame92 = function (mc) {
        var a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = 25;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    };
    K_sk_s1.frame95 = function (mc) {
        K_a5755.getInstance(mc["own_role"]).effName = "";
    };
    K_sk_s1.frame99 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    return K_sk_s1;
}());
__reflect(K_sk_s1.prototype, "K_sk_s1");
//# sourceMappingURL=K_sk_s1.js.map