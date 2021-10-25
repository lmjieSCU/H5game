class Chunli_hurt3{
	public static addSprite14577(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Chunli_hurt3.frame1,20,Chunli_hurt3.frame20]);
		return;
	}
    public static frame1(){
            // soundArray = [];
            // soundArray[0] = "mai_hurt3";
            // soundArray[1] = "mai_hurt4";
            // soundArray[2] = "none";
            // startPos = 0;
            // loop = 1;
    }

    public static frame20(mc: zmovie.ZMovieClip) {
            mc.stop();
    }
}

