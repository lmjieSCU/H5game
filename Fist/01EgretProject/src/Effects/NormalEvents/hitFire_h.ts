class hitFire_h {

    public static addSprite10646(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitFire_h.frame1,16, hitFire_h.frame16]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc.rotation = Math.round((Math.random() * 360));
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}