class s_defend {

    public static addSprite11167(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [12,s_defend.frame12]);
        return;
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}