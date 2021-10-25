class Terry_begin {
	public static addSprite8338(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [65, Terry_begin.frame65]);
		mc["own_role"] = own_role;
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