class Mai_end2 {
	public static addSprite6326(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [80, Mai_end2.frame80]);
		return;
	}
	public static frame80(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.stop();
		// _parentRole.toStatus_switch("stand");
	}
}