class fire_m4 {

    public static addSprite7224(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, fire_m4.frame1,20,fire_m4.frame20]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        //    numMax = 3;
        // color1 = "fire_red1";
        // color2 = "fire_red2";
        //_root.role_mc.changeColor("fire",500);
    }

    public static frame20(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}