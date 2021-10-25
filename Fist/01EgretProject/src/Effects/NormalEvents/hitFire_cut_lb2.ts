class hitFire_cut_lb2 {

    public static addSprite12091(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [7,hitFire_cut_lb2.frame12]);
        return;
    }



    public static frame12(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}