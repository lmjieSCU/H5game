class ryu_eff_tian {

    public static addSprite19935(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [23,ryu_eff_tian.frame23]);
        return;
    }

    public static frame23(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}