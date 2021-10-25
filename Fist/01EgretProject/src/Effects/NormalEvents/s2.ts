class s2 {

    public static addSprite11289(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [16, s2.frame32]);
        return;
    }


    public static frame32(mc: zmovie.ZMovieClip) {
        //_root.shinning_bg._visible = 0;
        mc.parent.removeChild(mc);
    }

}