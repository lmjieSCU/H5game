class Mai_begin {
	public static addSprite6200(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [65, Mai_begin.frame65]);
		return;
	}
	public static frame65(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.gotoAndStop("ready");
		// _parentRole.toStatus_switch("stand");
	}
}