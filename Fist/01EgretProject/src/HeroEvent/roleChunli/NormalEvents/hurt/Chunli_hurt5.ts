class Chunli_hurt5{
	public static addSprite14588(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Chunli_hurt1.frame2,12,Chunli_hurt4.frame12]);
		return;
	}
    public static frame1(){
        // soundArray = [];
        // soundArray[0] = "kula_hurt1";
        // soundArray[1] = "kula_hurt2";
        // soundArray[2] = "none";
        // soundArray[3] = "none";
        // startPos = 0;
        // loop = 1;
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        mc.stop();
    }
}

