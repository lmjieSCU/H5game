class hitFire_s3 {

    public static addSprite10919(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [16,hitFire_s3.frame16]);
        return;
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}