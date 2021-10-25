class Ryu_hurt5{
	public static addSprite20340(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [12,Ryu_hurt5.frame12,]);
		return;
	}
    public static frame12(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}


