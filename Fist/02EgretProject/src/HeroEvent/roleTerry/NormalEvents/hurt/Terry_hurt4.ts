class Terry_hurt4 {

    public static addSprite8592(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Terry_hurt4.frame2, 13, Terry_hurt4.frame13]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        // startPos = 0;
        // loop = 1;
    }

    public static frame13(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop("s2");
        // gotoAndStop("s2");
        // play();
    }
}