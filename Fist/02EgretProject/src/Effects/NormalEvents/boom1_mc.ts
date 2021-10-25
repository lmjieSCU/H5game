class boom1_mc {
    public static addSprite12883(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [24, boom1_mc.frame24]);
        return;
    }

    public static frame24(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}