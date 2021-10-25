class hitFire_cut_lb1 {

    public static addSprite12090(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [12,hitFire_cut_lb1.frame12]);
        return;
    }



    public static frame12(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}