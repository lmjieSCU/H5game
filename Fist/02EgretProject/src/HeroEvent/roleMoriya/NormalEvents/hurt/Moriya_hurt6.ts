class Moriya_hurt6{
	public static addSprite3506(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [13,Moriya_hurt6.frame13]);
		return;
	}
	public static frame13(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}


