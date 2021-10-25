class Mai_ready {
	public static addSprite6347(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [101, Mai_ready.frame101]);
		return;
	}
	public static frame101(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.stop();
	}
}