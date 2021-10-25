class hitEff_ice1 {
    public static addSprite4389(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitEff_ice1.frame1, 30, hitEff_ice1.frame30]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        // numMax = 4;
        // color1 = "ice1";
        // color2 = "ice1";
    }


    public static frame30(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}


