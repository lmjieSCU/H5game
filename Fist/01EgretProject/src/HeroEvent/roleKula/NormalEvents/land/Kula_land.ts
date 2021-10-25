class Kula_land{
	public static addSprite19107(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Kula_land.frame1,4,Kula_land.frame4]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.bodyTouch();
	}


	public static frame4(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}