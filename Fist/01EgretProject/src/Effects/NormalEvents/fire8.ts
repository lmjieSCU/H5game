class fire8 {
    public static addSprite4922(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1,fire8.frame1, 14, fire8.frame14]);
        return;
    }

    public static frame1() {
        // _level0.fire2_snd.start();
    }

    public static frame14(mc:zmovie.ZMovieClip) {
       mc.parent.removeChild(mc);
    }

}