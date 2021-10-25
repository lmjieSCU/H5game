class Terry_begin2 {
	public static addSprite8349(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [94, Terry_begin2.frame94]);
		mc["own_role"] = own_role;
		return;
	}
	public static frame94(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.gotoAndStop("ready");
		// _parentRole.toStatus_switch("stand");
	}
}