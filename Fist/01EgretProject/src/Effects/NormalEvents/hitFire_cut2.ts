class hitFire_cut2 {

    public static addSprite10637(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [12,hitFire_cut2.frame12]);
        return;
    }



    public static frame12(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}