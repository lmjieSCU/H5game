class hitFire_obj {

    public static addSprite10760(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [16,hitFire_obj.frame16]);
        return;
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}