class hitFire4 {

    public static addSprite10841(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [16,hitFire4.frame16]);
        return;
    }



    public static frame16(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}