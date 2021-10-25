class K_begin {
	public static addSprite4954(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [70, K_begin.frame70]);
		mc["own_role"] = own_role;
		return;
	}
	public static frame70(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.gotoAndStop("ready");
		// _parentRole.toStatus_switch("stand");
	}

}