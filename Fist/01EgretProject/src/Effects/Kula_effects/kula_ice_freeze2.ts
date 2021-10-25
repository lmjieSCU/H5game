class kula_ice_freeze2 {
    public static addSprite7739(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, kula_ice_freeze2.frame1, 4, kula_ice_freeze2.frame4, 5, kula_ice_freeze2.frame10]);
        mc["own_role"] = own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        var opp = mc["own_role"].opp;
        let role = mc["own_role"];
        mc.x = opp.x;
        if (opp.status_3 == "hurt" && role.onHit) {
            role.hit = true;
            opp.hurtValue.hurtAway = "aaa";
            opp.stop_hurtBack();
            opp.mc.inIce = true;
            opp.mc.gotoAndStop("hurt1");
            //opp.mc.gotoAndStop(2);
            FightMainRender.getInstance().Add(mc, kula_ice_freeze2.onEnterFrame, [mc, opp])
        }
    }
    public static onEnterFrame(mc: zmovie.ZMovieClip, opp) {
        if (_level0.inPause) {
            return undefined;
        }
        if (opp.hurtValue.hurtAway != "aaa") {
            FightMainRender.getInstance().Remove(mc, kula_ice_freeze2.onEnterFrame);
            mc.gotoAndStop("end");
            mc.resetFrameStop();
            return undefined;
        }
        opp.mc.gotoAndStop("hurt1");
        FightMainRender.getInstance().Remove(mc, kula_ice_freeze2.onEnterFrame);
        //opp.mc.gotoAndStop(2);
        mc.gotoAndStop("end");
        mc.resetFrameStop();
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt4";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = -10;
        htcheck.Vy = 40;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 13;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 2;
        htcheck.isObj = true;
        htcheck.hitType = "hitFire_h";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame10(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
        FightMainRender.getInstance().Remove(mc, kula_ice_freeze2.onEnterFrame);
    }
}