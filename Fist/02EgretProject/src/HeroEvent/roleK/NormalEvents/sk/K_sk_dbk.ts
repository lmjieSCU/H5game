class K_sk_dbk {

    public static addSprite5606(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [5, K_sk_dbk.frame5, 9, K_sk_dbk.frame9, 11, K_sk_dbk.frame11, 25, K_sk_dbk.frame25]);
        return;
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 40;
        a917.Vy = 14;
        a917.Va = 0;
        a917.Vg = 3;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    }

    public static frame9() {
        // _level0.k_snd.start();

    }
    public static frame11(mc:zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 40;
        hitcheck.Vy = 40;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame25(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

}