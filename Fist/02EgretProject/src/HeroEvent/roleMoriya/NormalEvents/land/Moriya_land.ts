class Moriya_land{
	public static addSprite3542(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Moriya_land.frame1,4,Moriya_land.frame4]);
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


