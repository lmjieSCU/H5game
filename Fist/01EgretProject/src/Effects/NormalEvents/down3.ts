class down3 {

    public static addSprite11102(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, down3.frame1,12, down3.frame12]);
        return;
    }


    public static frame1(mc: zmovie.ZMovieClip) {
        //_level0.shake_mc.shakeStart(2);
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}