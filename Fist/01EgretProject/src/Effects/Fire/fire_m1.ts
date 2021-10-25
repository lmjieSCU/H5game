class fire_m1 {

    public static addSprite6035(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, fire_m1.frame1,39,fire_m1.frame39]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        //    numMax = 3;
        // color1 = "fire_red1";
        // color2 = "fire_red2";
        //_root.role_mc.changeColor("fire",500);
    }

    public static frame39(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}