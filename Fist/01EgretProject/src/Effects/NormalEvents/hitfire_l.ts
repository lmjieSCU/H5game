class hitFire_l {

    public static addSprite10713(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [13,hitFire_l.frame13]);
        return;
    }

    public static frame13(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}