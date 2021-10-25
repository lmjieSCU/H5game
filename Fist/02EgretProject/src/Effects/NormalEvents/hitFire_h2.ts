class hitFire_h2 {

    public static addSprite10694(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [18,hitFire_h2.frame18]);
        return;
    }

    public static frame18(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}