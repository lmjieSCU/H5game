class K_hurt3 {

    public static addSprite5239(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_hurt3.frame1, 21, K_hurt3.frame21]);
        return;
    }

    public static frame1() {
    }

    public static frame21(mc: zmovie.ZMovieClip) {
        mc.stop();
    }
}