class K_end {
    public static addSprite5040(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [55, K_end.frame55]);
        return;
    }
    public static frame55(mc: zmovie.ZMovieClip) {
        mc.stop();
    }
}