class kula_storm {
	public static addSprite18578(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [65, kula_storm.frame65]);
		return;
	}
	public static frame65(mc: zmovie.ZMovieClip) {
		mc.parent.removeChild(mc);
	}
}