class hitFire_s2 {

    public static addSprite10744(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [16,hitFire_s2.frame16]);
        return;
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}