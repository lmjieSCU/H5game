class hitFire1_2 {

    public static addSprite10918(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [13,hitFire1_2.frame13]);
        return;
    }



    public static frame13(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}