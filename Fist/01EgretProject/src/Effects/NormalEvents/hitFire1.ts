class hitFire1 {

    public static addSprite10783(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitFire1.frame1,13, hitFire1.frame13]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc.rotation = Math.round((Math.random() * 360));
    }

    public static frame13(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}