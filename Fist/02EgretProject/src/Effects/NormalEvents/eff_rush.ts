class eff_rush {

    public static addSprite6067(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [14, eff_rush.frame15]);
        return;
    }

    public static frame15(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}