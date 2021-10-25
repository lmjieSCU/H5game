class kula_iceFire{
	public static addSprite18528(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [21,kula_iceFire.frame23]);
		return;
	}
	public static frame23(mc:zmovie.ZMovieClip){
        	mc.parent.removeChild(mc);
	}
}