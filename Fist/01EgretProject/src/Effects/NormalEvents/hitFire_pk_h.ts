class hitFire_pk_h {

    public static addSprite10865(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [4, hitFire_pk_h.frame4,10, hitFire_pk_h.frame10]);
        return;
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        
    }

    public static frame10(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}