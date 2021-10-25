class Chunli_hurt4{
	public static addSprite14587(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Chunli_hurt4.frame2,12,Chunli_hurt4.frame12]);
		return;
	}
    public static frame2(){
        // soundArray = [];
        // soundArray[0] = "mai_hurt3";
        // soundArray[1] = "mai_hurt4";
        // startPos = 0;
        // loop = 1;
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop("s2");
        //mc.play();
    }
}

