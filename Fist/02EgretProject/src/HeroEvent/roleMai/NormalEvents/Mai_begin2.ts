class Mai_begin2 {
	public static addSprite6242(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [102, Mai_begin2.frame102]);
		return;
	}
	public static frame102(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.gotoAndStop("ready");
		// _parentRole.toStatus_switch("stand");
	}
}