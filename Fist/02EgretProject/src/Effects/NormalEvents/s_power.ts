class s_power {

    public static addSprite11167(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [11,s_power.frame11]);
        return;
    }

    public static frame11(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}