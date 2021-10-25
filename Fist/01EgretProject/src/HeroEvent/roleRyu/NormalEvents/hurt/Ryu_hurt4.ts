class Ryu_hurt4{
	public static addSprite20335(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [13,Ryu_hurt4.frame13,]);
		return;
	}
    public static frame13(mc: zmovie.ZMovieClip){
        mc.gotoAndStop("s3");
        mc.resetFrameStop();
    }
}


