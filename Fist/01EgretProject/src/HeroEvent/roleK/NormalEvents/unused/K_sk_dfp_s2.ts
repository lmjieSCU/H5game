class K_sk_dfp_s2 {


    public static addSprite5673(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [7, K_sk_dfp_s2.frame7, 16, K_sk_dfp_s2.frame16]);
        mc["own_role"] = own_role;
        return;
    }

    public static frame7(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc["own_role"]).name = "fire2";
    }


    public static frame16(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }



}