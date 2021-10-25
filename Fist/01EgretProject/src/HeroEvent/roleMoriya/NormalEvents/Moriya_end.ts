class Moriya_end{
	public static addSprite3286(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [80,Moriya_end.frame80]);
		return;
	}
	public static frame80(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}

}

