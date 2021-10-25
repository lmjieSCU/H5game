class Ryu_begin {
	public static addSprite20110(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [93, Ryu_begin.frame93]);
		mc["own_role"] = own_role;
		return;
	}
	public static frame93(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.gotoAndStop("ready");
		// _parentRole.toStatus_switch("stand");
	}
}