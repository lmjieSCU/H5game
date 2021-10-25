class bgEff_super0 {

    public static addSprite10923(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, bgEff_super0.frame1,2, bgEff_super0.frame2,15, bgEff_super0.frame15]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        mc.play();
    }


    public static frame15(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}