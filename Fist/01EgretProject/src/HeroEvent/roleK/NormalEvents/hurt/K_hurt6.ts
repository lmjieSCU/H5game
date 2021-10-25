class K_hurt6 {

    public static addSprite5262(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [12, K_hurt6.frame12]);
        return;
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

}