class hitTest_jiejie {
    public static addSprite7738(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitTest_jiejie.frame1, 2, hitTest_jiejie.frame2, 4, hitTest_jiejie.frame4, 6, hitTest_jiejie.frame6, 7, hitTest_jiejie.frame7, 11, hitTest_jiejie.frame11]);
        mc["own_role"] = own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 2;
        htcheck.Vy = 7;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = true;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        mc["num"] = 1;
    }


    public static frame2(mc: zmovie.ZMovieClip) {
        mc.x = mc["own_role"].opp.x;
        mc.y = mc["own_role"].opp.y - 150;
        Kula_a7155.getInstance(mc["own_role"])._name = "Kula_a7155"
        let a7156 = Kula_a7156.getInstance(mc["own_role"]);
        a7156.status_1 = "hurt3";
        a7156.flag = "1";
        a7156.hurt = true;
        a7156.land = false;
        a7156.downHit = false;
        a7156.func = null;
        a7156.posObj = "Kula_a7155";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 2;
        htcheck.Vy = 7;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = true;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        if (_level0.inPause) {
            mc.gotoAndPlay(mc.getCurrFrame() - 1);
        }
        else if (mc["num"] > 4) {
            //play();
        }
        else {
            mc["num"]++;
            mc.gotoAndStop("hit");
            //play();
        }
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 25;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 10;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 2;
        htcheck.isObj = true;
        htcheck.hitType = "hitFire4";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame11(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}