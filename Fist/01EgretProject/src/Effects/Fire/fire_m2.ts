class fire_m2 {

    public static addSprite6036(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, fire_m2.frame1,39,fire_m2.frame39]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        // numMax = 4;
        // color1 = "fire_red1";
        // color2 = "fire_red2";
        //_root.role_mc.changeColor("fire",500);
    }

    public static frame39(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}