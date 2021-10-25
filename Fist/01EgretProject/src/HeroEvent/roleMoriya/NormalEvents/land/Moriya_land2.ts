class Moriya_land2{
	public static addSprite3543(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Moriya_land2.frame1,7,Moriya_land2.frame7]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.bodyTouch();
	}


	public static frame7(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}


