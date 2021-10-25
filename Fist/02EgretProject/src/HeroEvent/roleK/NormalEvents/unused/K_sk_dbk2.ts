/**废用 */
class K_sk_dbk2 {


    public static addSprite5608(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, K_sk_dbk2.frame2, 7, K_sk_dbk2.frame7, 8, K_sk_dbk2.frame8, 25, K_sk_dbk2.frame25]);
        mc["own_role"] = own_role;
        return;
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        let a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = 32;
        a917.Vy = 17;
        a917.Va = 0;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    }

    public static frame7(mc: zmovie.ZMovieClip) {
        // _level0.k_snd.start();

    }


    public static frame8(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 45;
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