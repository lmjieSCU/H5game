class K_sk_dfk {

    public static addSprite5687(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_sk_dfk.frame1, 4, K_sk_dfk.frame4, 10, K_sk_dfk.frame10, 14, K_sk_dfk.frame14, 19, K_sk_dfk.frame19, 26, K_sk_dfk.frame26]);
        mc['own_role'] = own_role;
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = true;
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        let a594 = K_a594.getInstance(mc['own_role']);
        a594.Vx = 40;
        a594.flag = "";
        a594.target = "";
    }

    public static frame10(mc: zmovie.ZMovieClip) {
        mc['own_role'].stop_move_X1();
    }


    public static frame14(mc: zmovie.ZMovieClip) {
        let a917 = K_a917.getInstance(mc['own_role']);
        a917.Vx = 25;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";


    }

    public static frame19(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = false;

    }

    public static frame26(mc: zmovie.ZMovieClip) {
        mc['own_role'].toStatus_switch("stand");
    }

}