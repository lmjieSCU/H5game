class Mai_land3{
	public static addSprite6587(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Mai_land3.frame1,12,Mai_land3.frame12]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.bodyTouch();
	}


	public static frame12(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}


