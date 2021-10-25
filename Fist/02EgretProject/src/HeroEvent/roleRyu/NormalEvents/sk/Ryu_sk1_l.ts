class Ryu_sk1_l {
	public static addSprite20667(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [8, Ryu_sk1_l.frame8, 28, Ryu_sk1_l.frame28]);
		return;
	}
	public static frame8(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		Ryu_a20657.getInstance(_parentRole).name = "wave_l";
	}

	public static frame28(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.toStatus_switch("stand");
	}
}
