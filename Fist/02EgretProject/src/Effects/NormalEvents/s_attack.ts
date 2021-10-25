class s_attack {

    public static addSprite11142(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [9,s_attack.frame9]);
        return;
    }

    public static frame9(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}