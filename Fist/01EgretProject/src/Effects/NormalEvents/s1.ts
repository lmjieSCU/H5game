class s1 {

    public static addSprite11356(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [16, s1.frame26]);
        return;
    }


    public static frame26(mc: zmovie.ZMovieClip) {
        //_root.shinning_bg._visible = 0;
        mc.parent.removeChild(mc);
    }

}