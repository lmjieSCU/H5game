class down2 {

    public static addSprite11121(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [8, down2.frame8]);
        return;
    }


    public static frame8(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}