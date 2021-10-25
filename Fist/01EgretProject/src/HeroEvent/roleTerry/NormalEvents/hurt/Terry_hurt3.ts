class Terry_hurt3 {

    public static addSprite8582(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1,Terry_hurt3.frame1,20,Terry_hurt3.frame20]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip){
        // soundArray = [];
        // soundArray[0] = "none";
        // startPos = 0;
        // loop = 1;
    }

    public static frame20(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}