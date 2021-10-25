class hitFire_cut4 {

    public static addSprite10843(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [10,hitFire_cut4.frame10]);
        return;
    }



    public static frame10(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}