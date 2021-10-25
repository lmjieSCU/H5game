class wave_head {

    public static addSprite19941(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3,wave_head.frame3]);
        return;
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}