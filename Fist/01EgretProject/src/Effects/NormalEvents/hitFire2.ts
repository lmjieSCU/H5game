class hitFire2 {

    public static addSprite10803(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [10,hitFire2.frame10]);
        return;
    }



    public static frame10(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}