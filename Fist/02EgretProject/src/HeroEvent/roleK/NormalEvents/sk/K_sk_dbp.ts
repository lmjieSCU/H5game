class K_sk_dbp {

    public static addSprite5855(mc: zmovie.ZMovieClip, own_role: Role) {
        mc["own_role"] = own_role;
        mc.addFrameScript(mc, [1, K_sk_dbp.frame1, 7, K_sk_dbp.frame7, 11, K_sk_dbp.frame11, 24, K_sk_dbp.frame24]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        let a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = -5;
        a917.Vy = 37;
        a917.Va = 0;
        a917.Vg = 5;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    }

    public static frame7() {
        // _level0.k_snd.start();
    }


    public static frame11(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc["own_role"]).name = "fire9_3";
    }



    public static frame24(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

}