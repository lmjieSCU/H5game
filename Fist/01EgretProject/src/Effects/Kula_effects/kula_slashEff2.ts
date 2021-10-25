class kula_slashEff2{
	public static addSprite18485(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,kula_slashEff2.frame21]);
		return;
	}
	public static frame21(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
	}

}