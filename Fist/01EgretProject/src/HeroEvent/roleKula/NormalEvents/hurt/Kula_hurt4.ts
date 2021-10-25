class Kula_hurt4{
	public static addSprite19069(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [14,Kula_hurt4.frame14]);
		return;
	}
	public static frame14(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.gotoAndStop("s2");
	}
}