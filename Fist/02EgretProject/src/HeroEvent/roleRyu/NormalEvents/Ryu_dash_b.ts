class Ryu_dash_b{
	public static addSprite20233(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_dash_b.frame3,5,Ryu_dash_b.frame5]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy,_parentRole.Vx);
    }

    public static frame5(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
