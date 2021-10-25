class hitFire_pk_m {

    public static addSprite10891(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitFire_pk_m.frame1,13, hitFire_pk_m.frame13]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc.rotation = Math.round((Math.random() * 360));
    }

    public static frame13(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}