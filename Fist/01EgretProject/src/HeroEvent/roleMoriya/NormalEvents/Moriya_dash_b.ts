class Moriya_dash_b{
	public static addSprite3390(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Moriya_dash_b.frame3,7,Moriya_dash_b.frame7]);
		return;
	}
	public static frame3(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.start_move_Y1(_parentRole.Vy,_parentRole.Vx);
	}


	public static frame7(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}


