class fire5 {
    public static addSprite4898(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, fire5.frame1, 10, fire5.frame10]);
        return;
    }

    public static frame1() {
        // _level0.fire2_snd.start();
    }

    public static frame10(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}