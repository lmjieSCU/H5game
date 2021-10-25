class hitFire3 {

    public static addSprite10818(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [7, hitFire3.frame7]);
        return;
    }



    public static frame7(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}