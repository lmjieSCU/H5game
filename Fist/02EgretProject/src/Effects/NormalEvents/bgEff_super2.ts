class bgEff_super2 {

    public static addSprite10952(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, bgEff_super2.frame1,2, bgEff_super2.frame2,33, bgEff_super2.frame34]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        mc.play();
    }


    public static frame34(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}