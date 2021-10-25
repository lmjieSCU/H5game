class s3 {

    public static addSprite7337(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [12, s3.frame21]);
        mc.play();
        return;
    }


    public static frame21(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}