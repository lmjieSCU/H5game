class s1_bg {

    public static addSprite11184(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [9, s1_bg.frame9]);
        return;
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}