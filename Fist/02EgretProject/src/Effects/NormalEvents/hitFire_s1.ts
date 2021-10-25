class hitFire_s1 {

    public static addSprite10742(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [13,hitFire_s1.frame16]);
        return;
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}