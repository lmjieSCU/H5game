class hitFire_sf3_2 {

    public static addSprite12044(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [8,hitFire_sf3_2.frame13]);
        return;
    }

    public static frame13(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}