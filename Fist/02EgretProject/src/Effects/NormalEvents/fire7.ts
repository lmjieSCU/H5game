class fire7 {
    public static addSprite4921(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1,fire7.frame1, 12, fire7.frame12]);
        return;
    }

    public static frame1() {
        // _level0.fire2_snd.start();
    }

    public static frame12(mc:zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}