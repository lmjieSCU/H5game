class boom_airDash {
    public static addSprite4738(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, boom_airDash.frame1, 25, boom_airDash.frame25,]);
        mc.addWaitingCallFun(mc, ['frame1Call', boom_airDash.frame1Call, [mc, own_role]]);
        return;
    }
    public static frame1Call(mc: zmovie.ZMovieClip,own_role: Role) {
        mc.x = own_role.x;
        mc.y = own_role.y;
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y - 170;
    }
    public static frame1(mc:zmovie.ZMovieClip) {
        mc.checkWaitingCallFun('frame1Call');
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 25;
        hitcheck.Vy = 40;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 3;
        hitcheck.d_rate = 2;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "all";
    }

    public static frame25(mc: zmovie.ZMovieClip) {
       mc.parent.removeChild(mc);
    }
}