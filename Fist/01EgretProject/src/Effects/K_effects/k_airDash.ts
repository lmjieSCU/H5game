class k_airDash {
    public static addSprite6071(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, k_airDash.frame1, 24, k_airDash.frame24, 25, k_airDash.frame25,]);
        mc['own_role'] = own_role;
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        // ColorEffect.setColor(_root.role_mc,"black");
        // ColorEffect.setColor(_root.role_mc.opp,"black");
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_red";
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 3;
        hitcheck.Vy = 5;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 15;
        hitcheck.freezeTime = 15;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_cut_lb1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame24Call(mc: zmovie.ZMovieClip, own_role: Role) {
        K_a5755.getInstance(own_role).effName = "";
    }
    public static frame24(mc: zmovie.ZMovieClip) {
        K_a5755.getInstance(mc['own_role']).effName = "";
    }

    public static frame25(mc: zmovie.ZMovieClip) {
        mc.stop();
        // ColorEffect.setColor(_root.role_mc,"normal");
        // ColorEffect.setColor(_root.role_mc.opp,"normal");
        mc.parent.removeChild(mc);
    }
}