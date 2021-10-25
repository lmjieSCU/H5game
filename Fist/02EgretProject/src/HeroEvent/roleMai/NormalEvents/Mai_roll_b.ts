class Mai_roll_b{
	public static addSprite6447(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Mai_roll_b.frame3,11,Mai_roll_b.frame11,14,Mai_roll_b.frame14]);
		return;
	}
	public static frame3(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		
		let a6433=Mai_a6433.getInstance(_parentRole);
		a6433.Vx=-24;
		a6433.flag="";
		a6433.target="";
	}


	public static frame11(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		_parentRole.bodyTouch();
	}


	public static frame14(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		_parentRole.stop_move_X1();
		_parentRole.toStatus_switch("stand");
	}

}
