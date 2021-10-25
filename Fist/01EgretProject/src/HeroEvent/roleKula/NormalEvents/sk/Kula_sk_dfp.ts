class Kula_sk_dfp{
	public static addSprite19461(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Kula_sk_dfp.frame4,27,Kula_sk_dfp.frame27]);
		return;
	}
	public static frame4(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        Kula_a19439.getInstance(_parentRole).name = "kula_ice_qixi";
	}


	public static frame27(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}