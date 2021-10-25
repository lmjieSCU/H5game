class hitFire0 {

    public static addSprite10761(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitFire0.frame1,12, hitFire0.frame12]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc.rotation = Math.round((Math.random() * 360));
        //blendMode = "screen";
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}