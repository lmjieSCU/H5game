class Moriya_end2{
	public static addSprite3315(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [80,Moriya_end2.frame80]);
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


