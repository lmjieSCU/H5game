class Terry_hurt5 {

    public static addSprite8593(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1,Terry_hurt5.frame1,12,Terry_hurt5.frame12]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip){
        // soundArray = [];
        // soundArray[0] = "none";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    }
    public static frame12(mc: zmovie.ZMovieClip){
       mc.stop();
    }
}