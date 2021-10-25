class s1_s {

    public static addSprite11357(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [16, s1_s.frame20]);
        return;
    }


    public static frame20(mc: zmovie.ZMovieClip) {
        //_root.shinning_bg._visible = 0;
        mc.parent.removeChild(mc);
    }

}