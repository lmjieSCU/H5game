class down1 {

    public static addSprite11077(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [9, down1.frame9]);
        return;
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}