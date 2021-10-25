class Moriya_hurt5{
	public static addSprite3505(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [14,Moriya_hurt5.frame14]);
		return;
	}
	public static frame14(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}

