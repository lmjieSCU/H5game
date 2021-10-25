class hitFire_kof_1 {

    public static addSprite10892(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitFire_kof_1.frame1,14,hitFire_kof_1.frame14]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc.rotation = Math.round((Math.random() * 360));
    }

    public static frame14(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}