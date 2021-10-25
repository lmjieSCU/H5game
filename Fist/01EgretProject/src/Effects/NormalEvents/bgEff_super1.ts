class bgEff_super1 {

    public static addSprite10934(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, bgEff_super1.frame1,2, bgEff_super1.frame2,29, bgEff_super1.frame30]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        mc.play();
    }


    public static frame30(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}